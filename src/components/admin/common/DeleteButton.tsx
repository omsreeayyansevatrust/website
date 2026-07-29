"use client";

import { Trash2 } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function DeleteButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
    >
      <Trash2 size={18} />
      Delete
    </button>
  );
}