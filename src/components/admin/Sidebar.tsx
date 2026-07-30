"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";


import {
  LayoutDashboard,
  FolderKanban,
  CalendarDays,
  ImageIcon,
  Users,
  ShieldCheck,
  HeartHandshake,
  Settings,
  LogOut,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    name: "Projects",
    icon: FolderKanban,
    href: "/admin/projects",
  },
  {
    name: "Events",
    icon: CalendarDays,
    href: "/admin/events",
  },
  {
    name: "Gallery",
    icon: ImageIcon,
    href: "/admin/gallery",
  },
  {
    name: "Volunteers",
    icon: Users,
    href: "/admin/volunteers",
  },
  {
    name: "Trustees",
    icon: ShieldCheck,
    href: "/admin/trustees",
  },
  {
    name: "Donations",
    icon: HeartHandshake,
    href: "/admin/donations",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await signOut(auth);
    router.push("/admin/login");
  }

  return (
    <aside className="w-72 bg-white shadow-lg border-r min-h-screen">

      <div className="p-6 border-b">

        <h1 className="text-xl font-bold text-orange-600">
          Om Sree Ayyan
        </h1>

        <p className="text-gray-500 text-sm">
          Admin Portal
        </p>

      </div>

      <nav className="p-4 space-y-2">

        {menus.map((menu) => {

          const Icon = menu.icon;

          return (
            <Link
              key={menu.name}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition

              ${
                pathname === menu.href
                  ? "bg-orange-500 text-white"
                  : "hover:bg-orange-100"
              }
              `}
            >
              <Icon size={20} />
              {menu.name}
            </Link>
          );
        })}

        <button
          onClick={logout}
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-red-100 text-red-600 w-full mt-8"
        >
          <LogOut size={20} />
          Logout
        </button>

      </nav>
    </aside>
  );
}