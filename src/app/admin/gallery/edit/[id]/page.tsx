"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import GalleryForm from "@/components/admin/gallery/GalleryForm";
import PageContainer from "@/components/admin/ui/PageContainer";
import PageHeader from "@/components/admin/ui/PageHeader";

import { getGalleryById } from "@/services/galleryService";
import { Gallery } from "@/types/gallery";

export default function EditGalleryPage() {
  const params = useParams();

  const [gallery, setGallery] = useState<Gallery | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await getGalleryById(params.id as string);
        setGallery(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, [params.id]);

  if (loading) {
    return (
      <PageContainer>
        <div className="text-center py-20">
          Loading...
        </div>
      </PageContainer>
    );
  }

  if (!gallery) {
    return (
      <PageContainer>
        <div className="text-center py-20">
          Gallery not found.
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader
        title="Edit Gallery"
        description="Update gallery album details."
      />

      <GalleryForm
        mode="edit"
        gallery={gallery}
      />
    </PageContainer>
  );
}