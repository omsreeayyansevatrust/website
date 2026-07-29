"use client";

import GalleryForm from "@/components/admin/gallery/GalleryForm";
import PageContainer from "@/components/admin/ui/PageContainer";
import PageHeader from "@/components/admin/ui/PageHeader";

export default function AddGalleryPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Create Gallery Album"
        description="Upload photos and create a new gallery album."
      />

      <GalleryForm mode="add" />
    </PageContainer>
  );
}