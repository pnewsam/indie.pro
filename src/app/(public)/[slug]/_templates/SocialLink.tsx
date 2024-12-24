export function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-300"
    >
      {icon}
      <p className="text-base">{label}</p>
    </a>
  );
}
