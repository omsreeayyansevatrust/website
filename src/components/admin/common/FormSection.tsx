interface Props {
  title: string;
  children: React.ReactNode;
}

export default function FormSection({
  title,
  children,
}: Props) {
  return (
    <div className="bg-gray-50 rounded-xl border p-6">
      <h3 className="text-lg font-semibold mb-5">
        {title}
      </h3>

      {children}
    </div>
  );
}