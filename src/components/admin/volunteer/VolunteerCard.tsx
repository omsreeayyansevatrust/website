"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Briefcase,
  User,
  Pencil,
  Trash2,
} from "lucide-react";

import { Volunteer } from "@/types/volunteer";

interface Props {
  volunteer: Volunteer;
  onDelete: (id: string) => void;
}

export default function VolunteerCard({
  volunteer,
  onDelete,
}: Props) {
  const image =
    volunteer.photo ||
    "https://placehold.co/400x400?text=Volunteer";

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">

      <div className="relative h-56">

        <Image
          src={image}
          alt={volunteer.fullName}
          fill
          unoptimized
          className="object-cover"
        />

        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
            volunteer.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {volunteer.status}
        </span>

      </div>

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {volunteer.fullName}
        </h2>

        <p className="text-orange-600 font-medium">
          {volunteer.department}
        </p>

        <div className="space-y-2 mt-4 text-sm text-gray-600">

          <div className="flex items-center gap-2">
            <Phone size={16} />
            {volunteer.mobile}
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            {volunteer.email}
          </div>

          <div className="flex items-center gap-2">
            <Briefcase size={16} />
            {volunteer.occupation}
          </div>

          <div className="flex items-center gap-2">
            <User size={16} />
            {volunteer.gender}
          </div>

        </div>

        <div className="flex justify-between items-center mt-6 border-t pt-4">

          <span className="text-sm text-gray-500">
            Joined: {volunteer.joiningDate}
          </span>

          <div className="flex gap-2">

            <Link
              href={`/admin/volunteers/edit/${volunteer.id}`}
              className="bg-blue-100 hover:bg-blue-200 p-2 rounded-lg"
            >
              <Pencil
                size={18}
                className="text-blue-700"
              />
            </Link>

            <button
              onClick={() =>
                volunteer.id &&
                onDelete(volunteer.id)
              }
              className="bg-red-100 hover:bg-red-200 p-2 rounded-lg"
            >
              <Trash2
                size={18}
                className="text-red-700"
              />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}