import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">

      <div>

        <p className="text-gray-500 text-sm">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>

      </div>

      <div className="bg-orange-100 p-4 rounded-xl">

        <Icon
          size={28}
          className="text-orange-600"
        />

      </div>

    </div>
  );
}