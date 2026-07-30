"use client";

import Image from "next/image";
import Link from "next/link";

import { Trustee } from "@/types/trustee";

interface Props {
  trustee: Trustee;
  onDelete: (id: string) => void;
}

export default function TrusteeCard({
  trustee,
  onDelete,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden border">

      {/* Photo */}

      <div className="relative h-72 bg-gray-100">

        {trustee.photo ? (
          <Image
            src={trustee.photo}
            alt={trustee.fullName}
            fill
            unoptimized
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No Photo
          </div>
        )}

        {trustee.featured && (
          <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}

      </div>

      {/* Details */}

      <div className="p-5 space-y-3">

        <div>

          <h2 className="text-xl font-bold text-gray-800">
            {trustee.fullName}
          </h2>

          <p className="text-orange-600 font-medium">
            {trustee.designation}
          </p>

        </div>

        <div className="space-y-1 text-sm text-gray-600">

          {trustee.mobile && (
            <p>
              📞 {trustee.mobile}
            </p>
          )}

          {trustee.email && (
            <p className="break-all">
              📧 {trustee.email}
            </p>
          )}

          {trustee.occupation && (
            <p>
              💼 {trustee.occupation}
            </p>
          )}

          {trustee.qualification && (
            <p>
              🎓 {trustee.qualification}
            </p>
          )}

        </div>

        <div className="flex justify-between items-center">

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              trustee.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {trustee.status}
          </span>

          <span className="text-xs text-gray-500">
            Order: {trustee.displayOrder}
          </span>

        </div>

        <div className="flex gap-3 pt-3">

          <Link
            href={`/admin/trustees/edit/${trustee.id}`}
            className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Edit
          </Link>

          <button
            onClick={() => onDelete(trustee.id!)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}