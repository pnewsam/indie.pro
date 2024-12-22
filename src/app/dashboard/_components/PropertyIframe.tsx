export function PropertyIframe({ slug }: { slug: string }) {
  return (
    <div className="border border-neutral-300 shadow-md rounded-md w-full h-[720px]">
      <iframe
        className="w-full h-full border-none rounded-md"
        src={`${process.env.BASE_URL}/${slug}`}
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
