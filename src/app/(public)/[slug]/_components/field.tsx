export const Field = ({
  label,
  description,
  value,
}: {
  label: string;
  description: string;
  value: string;
}) => {
  return (
    <div className="flex flex-col">
      <p className="font-medium">{label}</p>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
