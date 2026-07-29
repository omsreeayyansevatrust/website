"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FolderOpen,
  CalendarDays,
  Image,
  Users,
  HeartHandshake,
  Mail,
} from "lucide-react";

import {
  getDashboardCounts,
  DashboardCounts,
} from "@/services/dashboardService";

import ActivityChart from "@/components/admin/dashboard/ActivityChart";
import DonationChart from "@/components/admin/dashboard/DonationChart";
import UpcomingEvents from "@/components/admin/dashboard/UpcomingEvents";
import RecentProjects from "@/components/admin/dashboard/RecentProjects";
import QuickActions from "@/components/admin/dashboard/QuickActions";

export default function DashboardPage() {
  const [counts, setCounts] = useState<DashboardCounts>({
    projects: 0,
    events: 0,
    gallery: 0,
    volunteers: 0,
    donations: 0,
    messages: 0,
  });

  const cards = [
    {
      title: "Projects",
      value: counts.projects,
      icon: FolderOpen,
      href: "/admin/projects",
    },
    {
      title: "Events",
      value: counts.events,
      icon: CalendarDays,
      href: "/admin/events",
    },
    {
      title: "Gallery",
      value: counts.gallery,
      icon: Image,
      href: "/admin/gallery",
    },
    {
      title: "Volunteers",
      value: counts.volunteers,
      icon: Users,
      href: "/admin/volunteers",
    },
    {
      title: "Donations",
      value: counts.donations,
      icon: HeartHandshake,
      href: "/admin/donations",
    },
    {
      title: "Messages",
      value: counts.messages,
      icon: Mail,
      href: "/admin/messages",
    },
  ];

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    const data = await getDashboardCounts();
    setCounts(data);
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome to Om Sree Ayyan Seva Trust Admin Portal
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-xl border bg-white p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-gray-500">
                    {card.title}
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    {card.value}
                  </h2>
                </div>

                <Icon
                  size={42}
                  className="text-orange-600"
                />

              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <ActivityChart />
        <DonationChart />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <UpcomingEvents />
        <RecentProjects />
      </div>

      <QuickActions />

    </div>
  );
}