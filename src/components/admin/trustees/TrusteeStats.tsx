"use client";

import { Award, CheckCircle2, Star, Users } from "lucide-react";
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
  icon={Users}
/>

<StatCard
  title="Active Trustees"
  value={active}
  icon={CheckCircle2}
/>

<StatCard
  title="Featured Trustees"
  value={featured}
  icon={Star}
/>

<StatCard
  title="Committee Positions"
  value={designations}
  icon={Award}
/>

    </div>
  );
}