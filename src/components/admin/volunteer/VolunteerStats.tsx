"use client";

import {
  Users,
  UserCheck,
  UserX,
  Building2,
} from "lucide-react";

import StatCard from "@/components/admin/ui/StatCard";
import { Volunteer } from "@/types/volunteer";

interface Props {
  volunteers: Volunteer[];
}

export default function VolunteerStats({
  volunteers,
}: Props) {
  const total = volunteers.length;

  const active = volunteers.filter(
    (v) => v.status === "Active"
  ).length;

  const inactive = volunteers.filter(
    (v) => v.status === "Inactive"
  ).length;

  const departments = new Set(
    volunteers.map((v) => v.department)
  ).size;

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Volunteers"
        value={total}
        icon={Users}
        bg="bg-blue-100"
        color="text-blue-700"
      />

      <StatCard
        title="Active"
        value={active}
        icon={UserCheck}
        bg="bg-green-100"
        color="text-green-700"
      />

      <StatCard
        title="Inactive"
        value={inactive}
        icon={UserX}
        bg="bg-red-100"
        color="text-red-700"
      />

      <StatCard
        title="Departments"
        value={departments}
        icon={Building2}
        bg="bg-purple-100"
        color="text-purple-700"
      />

    </div>
  );
}