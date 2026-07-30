"use client";

import PageContainer from "@/components/admin/ui/PageContainer";
import PageHeader from "@/components/admin/ui/PageHeader";

import VolunteerForm from "@/components/admin/volunteer/VolunteerForm";

export default function AddVolunteerPage() {
  return (
    <PageContainer>

      <PageHeader
        title="Add Volunteer"
        description="Register a new volunteer."
      />

      <VolunteerForm mode="add" />

    </PageContainer>
  );
}