"use client";

import { Volunteer } from "@/types/volunteer";
import VolunteerCard from "./VolunteerCard";

interface Props {
  volunteers: Volunteer[];
  onDelete: (id: string) => void;
}

export default function VolunteerGrid({
  volunteers,
  onDelete,
}: Props) {
  if (!volunteers.length) {
    return (
      <div className="bg-white rounded-xl shadow p-16 text-center">

        <div className="text-6xl">
          🙋
        </div>

        <h2 className="text-2xl font-bold mt-4">
          No Volunteers Found
        </h2>

        <p className="text-gray-500 mt-2">
          Click "Add Volunteer" to register your first volunteer.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

      {volunteers.map((volunteer) => (
        <VolunteerCard
          key={volunteer.id}
          volunteer={volunteer}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}