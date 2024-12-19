import { Metadata } from "next";
import { Outfit } from "next/font/google";

import { SEO } from "@/constants/seo";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.shortDescription,
  keywords: SEO.keywords,
  openGraph: {
    title: SEO.title,
    description: SEO.shortDescription,
    url: "https://indie.pro",
    siteName: "Indie Pro Websites",
    images: [
      {
        url: "https://indie.pro/og-image.jpg", // Update with your actual OG image path
        width: 1200,
        height: 630,
        alt: SEO.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.shortDescription,
    images: ["https://indie.pro/twitter-image.jpg"], // Update with your actual Twitter image path
    creator: "@indie_pro", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
  alternates: {
    canonical: "https://indie.pro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
