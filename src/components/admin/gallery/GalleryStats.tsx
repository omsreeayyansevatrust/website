"use client";

import {
  Images,
  Image as ImageIcon,
  Star,
  FolderOpen,
} from "lucide-react";

import { Gallery } from "@/types/gallery";
import StatCard from "@/components/admin/ui/StatCard";

interface GalleryStatsProps {
  galleries: Gallery[];
}

export default function GalleryStats({
  galleries,
}: GalleryStatsProps) {
  const totalAlbums = galleries.length;

  const totalPhotos = galleries.reduce(
    (sum, gallery) => sum + gallery.images.length,
    0
  );

  const featuredAlbums = galleries.filter(
    (gallery) => gallery.featured
  ).length;

  const categories = new Set(
    galleries.map((gallery) => gallery.category)
  ).size;

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Albums"
        value={totalAlbums}
        icon={FolderOpen}
        bg="bg-blue-100"
        color="text-blue-700"
      />

      <StatCard
        title="Photos"
        value={totalPhotos}
        icon={Images}
        bg="bg-green-100"
        color="text-green-700"
      />

      <StatCard
        title="Featured"
        value={featuredAlbums}
        icon={Star}
        bg="bg-yellow-100"
        color="text-yellow-700"
      />

      <StatCard
        title="Categories"
        value={categories}
        icon={ImageIcon}
        bg="bg-purple-100"
        color="text-purple-700"
      />

    </div>
  );
}