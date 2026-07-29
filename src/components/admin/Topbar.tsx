"use client";

import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white border-b h-16 px-8 flex items-center justify-between">

      <div>

        <h2 className="font-semibold text-2xl">
          Dashboard
        </h2>

        <p className="text-gray-500 text-sm">
          Welcome back 👋
        </p>

      </div>

      <div className="flex items-center gap-6">

        <Bell className="text-gray-600" />

        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
          A
        </div>

      </div>

    </header>
  );
}