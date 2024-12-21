export function PageHeader({
  title,
  actions,
}: {
  title: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="w-full p-4 h-16 border-b bg-neutral-50">
      <div className="flex items-center justify-between h-full px-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex items-center gap-2">{actions}</div>
      </div>
    </div>
  );
}
