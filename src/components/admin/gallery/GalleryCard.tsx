"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Images,
  MapPin,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";

import { Gallery } from "@/types/gallery";

interface GalleryCardProps {
  gallery: Gallery;
  onDelete: (id: string) => void;
}

export default function GalleryCard({
  gallery,
  onDelete,
}: GalleryCardProps) {
  if (!gallery) return null;

  const image =
    gallery.thumbnail ||
    gallery.images?.[0] ||
    "https://placehold.co/600x400?text=No+Image";

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition">

      <div className="relative h-56">

        <Image
          src={image}
          alt={gallery.title || "Gallery"}
          fill
          unoptimized
          className="object-cover"
        />

        {gallery.featured && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
            <Star size={14} fill="currentColor" />
            Featured
          </div>
        )}
      </div>

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {gallery.title}
        </h2>

        <p className="text-sm text-gray-500">
          {gallery.category}
        </p>

        <p className="mt-3 text-gray-600 line-clamp-3">
          {gallery.description}
        </p>

        <div className="mt-4 space-y-2 text-sm text-gray-600">

          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            {gallery.eventDate || "-"}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {gallery.location || "-"}
          </div>

          <div className="flex items-center gap-2">
            <Images size={16} />
            {gallery.images?.length ?? 0} Photos
          </div>

        </div>

        <div className="flex justify-between items-center mt-5 pt-4 border-t">

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              gallery.status === "Published"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {gallery.status}
          </span>

          <div className="flex gap-2">

            <Link
              href={`/admin/gallery/edit/${gallery.id}`}
              className="p-2 rounded bg-blue-100 hover:bg-blue-200"
            >
              <Pencil
                size={18}
                className="text-blue-700"
              />
            </Link>

            <button
              onClick={() => gallery.id && onDelete(gallery.id)}
              className="p-2 rounded bg-red-100 hover:bg-red-200"
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