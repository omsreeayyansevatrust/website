"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
  deleteTrustee,
  getTrustees,
} from "@/services/trusteeService";

import { Trustee } from "@/types/trustee";

import PageContainer from "@/components/admin/ui/PageContainer";
import PageHeader from "@/components/admin/ui/PageHeader";
import SearchBar from "@/components/admin/ui/SearchBar";

import TrusteeGrid from "@/components/admin/trustees/TrusteeGrid";
import TrusteeStats from "@/components/admin/trustees/TrusteeStats";

export default function TrusteesPage() {
  const [trustees, setTrustees] = useState<Trustee[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadTrustees();
  }, []);

  async function loadTrustees() {
    setLoading(true);

    try {
      const data = await getTrustees();
      setTrustees(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this trustee?")) return;

    try {
      await deleteTrustee(id);
      setTrustees((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error(error);
      alert("Unable to delete trustee.");
    }
  }

  const filtered = useMemo(() => {
    const keyword = search.toLowerCase();

    return trustees.filter((t) =>
      [
        t.fullName,
        t.designation,
        t.mobile,
        t.email,
        t.occupation,
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword)
    );
  }, [trustees, search]);

  return (
    <PageContainer>

      <PageHeader
        title="Trustees & Committee"
        description="Manage Trustees and Committee Members"
        action={
          <Link
            href="/admin/trustees/add"
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-lg"
          >
            + Add Trustee
          </Link>
        }
      />

      <TrusteeStats trustees={trustees} />

      <div className="mt-6">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search trustee..."
        />
      </div>

      <div className="mt-6">

        {loading ? (
          <div className="text-center py-20">
            Loading...
          </div>
        ) : (
          <TrusteeGrid
            trustees={filtered}
            onDelete={handleDelete}
          />
        )}

      </div>

    </PageContainer>
  );
}