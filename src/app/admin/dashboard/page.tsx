"use client";

import DashboardStats from "@/components/admin/dashboard/DashboardStats";
import ActivityChart from "@/components/admin/dashboard/ActivityChart";
import DonationChart from "@/components/admin/dashboard/DonationChart";
import UpcomingEvents from "@/components/admin/dashboard/UpcomingEvents";
import RecentProjects from "@/components/admin/dashboard/RecentProjects";
import LatestEnquiries from "@/components/admin/dashboard/LatestEnquiries";
import ActivityTimeline from "@/components/admin/dashboard/ActivityTimeline";
import QuickActions from "@/components/admin/dashboard/QuickActions";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <DashboardStats
        projects={12}
        events={5}
        gallery={18}
        volunteers={32}
        donations={50}
        amount={125000}
      />

      <div className="grid lg:grid-cols-2 gap-6">
        <ActivityChart />
        <DonationChart />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <UpcomingEvents />
        <RecentProjects />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <LatestEnquiries />
        <QuickActions />
      </div>

      <ActivityTimeline />

    </div>
  );
}