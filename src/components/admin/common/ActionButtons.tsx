"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

interface Props {
  editUrl: string;
  onDelete: () => void;
}

export default function ActionButtons({
  editUrl,
  onDelete,
}: Props) {
  return (
    <div className="flex justify-center gap-2">
      <Link
        href={editUrl}
        className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-lg transition"
      >
        <Pencil size={18} />
      </Link>

      <button
        onClick={onDelete}
        className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-lg transition"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}