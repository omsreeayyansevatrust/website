"use client";

import { Gallery } from "@/types/gallery";
import GalleryCard from "./GalleryCard";

interface Props {
  galleries: Gallery[];
  onDelete: (id: string) => void;
}

export default function GalleryGrid({
  galleries,
  onDelete,
}: Props) {
  if (!galleries || galleries.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-12 text-center">

        <div className="text-6xl mb-4">
          📸
        </div>

        <h2 className="text-2xl font-bold">
          No Gallery Albums Found
        </h2>

        <p className="text-gray-500 mt-2">
          Click "Add Album" to create your first gallery.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

      {galleries
        .filter(Boolean)
        .map((gallery) => (
          <GalleryCard
            key={gallery.id}
            gallery={gallery}
            onDelete={onDelete}
          />
        ))}

    </div>
  );
}