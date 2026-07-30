"use client";

import { Trustee } from "@/types/trustee";
import StatCard from "@/components/admin/ui/StatCard";

interface Props {
  trustees: Trustee[];
}

export default function TrusteeStats({
  trustees,
}: Props) {
  const total = trustees.length;

  const active = trustees.filter(
    (t) => t.status === "Active"
  ).length;

  const featured = trustees.filter(
    (t) => t.featured
  ).length;

  const designations = new Set(
    trustees
      .map((t) => t.designation?.trim())
      .filter(Boolean)
  ).size;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Trustees"
        value={total}
        icon="👥"
      />

      <StatCard
        title="Active Trustees"
        value={active}
        icon="✅"
      />

      <StatCard
        title="Featured Trustees"
        value={featured}
        icon="⭐"
      />

      <StatCard
        title="Committee Positions"
        value={designations}
        icon="🏛️"
      />

    </div>
  );
}