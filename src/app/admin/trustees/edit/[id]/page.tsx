"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import PageContainer from "@/components/admin/ui/PageContainer";
import PageHeader from "@/components/admin/ui/PageHeader";

import TrusteeForm from "@/components/admin/trustees/TrusteeForm";

import { Trustee } from "@/types/trustee";
import { getTrustee } from "@/services/trusteeService";

export default function EditTrusteePage() {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [trustee, setTrustee] = useState<Trustee | null>(null);

  useEffect(() => {
    loadTrustee();
  }, []);

  async function loadTrustee() {
    try {
      const data = await getTrustee(params.id as string);
      setTrustee(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <PageContainer>
        <div className="text-center py-20">
          Loading...
        </div>
      </PageContainer>
    );
  }

  if (!trustee) {
    return (
      <PageContainer>
        <div className="text-center py-20">
          Trustee not found.
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>

      <PageHeader
        title="Edit Trustee"
        description="Update trustee information."
      />

      <TrusteeForm
        mode="edit"
        trustee={trustee}
      />

    </PageContainer>
  );
}