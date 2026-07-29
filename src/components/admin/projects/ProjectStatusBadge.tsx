interface Props {
  status: "Active" | "Completed";
}

export default function ProjectStatusBadge({
  status,
}: Props) {
  const styles =
    status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-gray-200 text-gray-700";

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${styles}`}
    >
      {status}
    </span>
  );
}