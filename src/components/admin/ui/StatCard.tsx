import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: number | string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
  bg,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex justify-between items-center">

      <div>
        <p className="text-gray-500 text-sm">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div
        className={`${bg} ${color} p-4 rounded-full`}
      >
        <Icon size={30} />
      </div>

    </div>
  );
}