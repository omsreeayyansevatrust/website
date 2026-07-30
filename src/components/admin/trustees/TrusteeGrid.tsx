"use client";

import { Trustee } from "@/types/trustee";
import TrusteeCard from "./TrusteeCard";

interface Props {
  trustees: Trustee[];
  onDelete: (id: string) => void;
}

export default function TrusteeGrid({
  trustees,
  onDelete,
}: Props) {
  if (trustees.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md border p-16 text-center">

        <div className="text-6xl mb-5">👥</div>

        <h2 className="text-2xl font-semibold text-gray-700">
          No Trustees Found
        </h2>

        <p className="text-gray-500 mt-2">
          Add your first trustee or committee member to get started.
        </p>

      </div>
    );
  }

  return (
    <div
      className="
        grid
        gap-6

        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {trustees.map((trustee) => (
        <TrusteeCard
          key={trustee.id}
          trustee={trustee}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}