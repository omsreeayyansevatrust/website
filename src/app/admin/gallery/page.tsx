"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
  deleteGallery,
  getAllGalleries,
} from "@/services/galleryService";

import { Gallery } from "@/types/gallery";

import PageContainer from "@/components/admin/ui/PageContainer";
import PageHeader from "@/components/admin/ui/PageHeader";
import SearchBar from "@/components/admin/ui/SearchBar";

import GalleryGrid from "@/components/admin/gallery/GalleryGrid";
import GalleryStats from "@/components/admin/gallery/GalleryStats";

export default function GalleryPage() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadData() {
    setLoading(true);

    try {
      const data = await getAllGalleries();
      setGalleries(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleDelete(id: string) {
    const ok = confirm(
      "Are you sure you want to delete this gallery?"
    );

    if (!ok) return;

    try {
      await deleteGallery(id);

      setGalleries((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Unable to delete gallery.");
    }
  }

  const filtered = useMemo(() => {
    const keyword = search.toLowerCase();

    return galleries.filter((gallery) =>
      [
        gallery.title,
        gallery.category,
        gallery.location,
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword)
    );
  }, [galleries, search]);

  return (
    <PageContainer>

      <PageHeader
        title="Gallery"
        description="Manage NGO gallery albums."
        action={
          <Link
            href="/admin/gallery/add"
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-lg"
          >
            + Add Album
          </Link>
        }
      />

      <GalleryStats galleries={galleries} />

      <div className="mt-8">

        <SearchBar
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search albums..."
        />

      </div>

      <div className="mt-8">

        {loading ? (
          <div className="text-center py-20">
            Loading...
          </div>
        ) : (
          <GalleryGrid
            galleries={filtered}
            onDelete={handleDelete}
          />
        )}

      </div>

    </PageContainer>
  );
}