"use server";

import { S3Client } from "@aws-sdk/client-s3";
import { PutObjectCommand, PutObjectCommandInput } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { nanoid } from "nanoid";

const client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID!}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_TOKEN_ACCESS_KEY_ID!,
    secretAccessKey: process.env.CLOUDFLARE_R2_TOKEN_SECRET_ACCESS_KEY!,
  },
});

const EXTENSION_BY_MIME_TYPE = Object.freeze({
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
});

const R2_BUCKET = "indiepro";

const DOMAIN_BY_MIME_TYPE = Object.freeze({
  "image/jpeg": "https://pub-5c803ffe5906471ca04240c4d5c8dfea.r2.dev",
  "image/png": "https://pub-5c803ffe5906471ca04240c4d5c8dfea.r2.dev",
  "image/gif": "https://pub-5c803ffe5906471ca04240c4d5c8dfea.r2.dev",
});

type FileType = keyof typeof DOMAIN_BY_MIME_TYPE;

const createObjectUrl = (filetype: FileType, key: string) =>
  `${DOMAIN_BY_MIME_TYPE[filetype]}/${key}`;

const getUploadUrl = async (filetype: FileType) => {
  const randomID = nanoid();
  const fileExtension = EXTENSION_BY_MIME_TYPE[filetype as FileType];
  const bucket = R2_BUCKET;
  const key = `${randomID}.${fileExtension}`;

  const s3Params: PutObjectCommandInput = {
    Bucket: bucket,
    Key: key,
    ContentType: filetype,
    // This ACL makes the uploaded object publicly readable. You must also uncomment
    // the extra permission for the Lambda function in the SAM template.
    // ACL: "public-read",
  };

  const url = await getSignedUrl(client, new PutObjectCommand(s3Params), {
    expiresIn: 3600,
  });

  return { url, key };
};

export const putObjectViaPresignedUrl = async (
  uploadUrl: string,
  filetype: string,
  blob: Blob,
) => {
  const response = await fetch(uploadUrl, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": filetype,
      "Content-Length": blob.size.toString(),
    },
    body: blob,
  });

  console.log({ response });

  if (!response.ok) {
    throw new Error("Failed to upload file");
  }
};

export const uploadFile = async function (file: File) {
  const filetype = file.type as FileType;
  const { url, key } = await getUploadUrl(filetype);
  const binary = await file.arrayBuffer();
  const blob = new Blob([new Uint8Array(binary)], { type: filetype });

  await putObjectViaPresignedUrl(url, filetype, blob);

  // Final URL for the user doesn't need the query string params
  const objectUrl = createObjectUrl(filetype, key);

  return objectUrl;
};
