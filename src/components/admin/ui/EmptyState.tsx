interface Props {
  title: string;
}

export default function EmptyState({
  title,
}: Props) {
  return (
    <div className="bg-white rounded-xl p-20 text-center shadow">

      <h2 className="text-2xl font-semibold">
        No {title} Found
      </h2>

      <p className="text-gray-500 mt-2">
        Start by creating your first {title.toLowerCase()}.
      </p>

    </div>
  );
}