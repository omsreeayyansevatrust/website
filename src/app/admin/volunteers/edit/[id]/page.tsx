"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import PageContainer from "@/components/admin/ui/PageContainer";
import PageHeader from "@/components/admin/ui/PageHeader";

import VolunteerForm from "@/components/admin/volunteer/VolunteerForm";

import {
  getVolunteer,
} from "@/services/volunteerService";

import { Volunteer } from "@/types/volunteer";

export default function EditVolunteerPage() {
  const params = useParams();

  const [loading, setLoading] = useState(true);

  const [volunteer, setVolunteer] =
    useState<Volunteer | null>(null);

  useEffect(() => {
    loadVolunteer();
  }, []);

  async function loadVolunteer() {
    try {
      const data = await getVolunteer(
        params.id as string
      );

      setVolunteer(data);
    } catch (err) {
      console.error(err);
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

  if (!volunteer) {
    return (
      <PageContainer>
        <div className="text-center py-20">
          Volunteer not found.
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>

      <PageHeader
        title="Edit Volunteer"
        description="Update volunteer details."
      />

      <VolunteerForm
        mode="edit"
        volunteer={volunteer}
      />

    </PageContainer>
  );
}