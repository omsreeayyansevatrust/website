interface Props {
  title: string;
  description?: string;
}

export default function SectionHeader({
  title,
  description,
}: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold">{title}</h2>

      {description && (
        <p className="text-gray-500 mt-1">
          {description}
        </p>
      )}
    </div>
  );
}