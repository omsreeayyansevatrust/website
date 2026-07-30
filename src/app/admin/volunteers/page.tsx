"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
  deleteVolunteer,
  getVolunteers,
} from "@/services/volunteerService";

import { Volunteer } from "@/types/volunteer";

import PageContainer from "@/components/admin/ui/PageContainer";
import PageHeader from "@/components/admin/ui/PageHeader";
import SearchBar from "@/components/admin/ui/SearchBar";

import VolunteerGrid from "@/components/admin/volunteer/VolunteerGrid";
import VolunteerStats from "@/components/admin/volunteer/VolunteerStats";

export default function VolunteersPage() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadVolunteers();
  }, []);

  async function loadVolunteers() {
    setLoading(true);

    try {
      const data = await getVolunteers();
      setVolunteers(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this volunteer?")) return;

    try {
      await deleteVolunteer(id);

      setVolunteers((prev) =>
        prev.filter((v) => v.id !== id)
      );
    } catch (err) {
      console.error(err);
      alert("Unable to delete volunteer.");
    }
  }

  const filtered = useMemo(() => {
    const keyword = search.toLowerCase();

    return volunteers.filter((v) =>
      [
        v.fullName,
        v.department,
        v.mobile,
        v.email,
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword)
    );
  }, [volunteers, search]);

  return (
    <PageContainer>

      <PageHeader
        title="Volunteers"
        description="Manage NGO volunteers."
        action={
          <Link
            href="/admin/volunteers/add"
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-lg"
          >
            + Add Volunteer
          </Link>
        }
      />

      <VolunteerStats volunteers={volunteers} />

      <div className="mt-6">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search volunteers..."
        />
      </div>

      <div className="mt-6">

        {loading ? (
          <div className="text-center py-20">
            Loading...
          </div>
        ) : (
          <VolunteerGrid
            volunteers={filtered}
            onDelete={handleDelete}
          />
        )}

      </div>

    </PageContainer>
  );
}