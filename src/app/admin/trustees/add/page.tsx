"use client";

import PageContainer from "@/components/admin/ui/PageContainer";
import PageHeader from "@/components/admin/ui/PageHeader";

import TrusteeForm from "@/components/admin/trustees/TrusteeForm";

export default function AddTrusteePage() {
  return (
    <PageContainer>

      <PageHeader
        title="Add Trustee"
        description="Register a new trustee or committee member."
      />

      <TrusteeForm mode="add" />

    </PageContainer>
  );
}