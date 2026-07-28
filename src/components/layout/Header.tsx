"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const menus = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  //{ name: "Volunteer", href: "/volunteer" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="container mx-auto px-6">

        <div className="flex items-center justify-between h-24">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-4">

            <Image
              src="/logo.png"
              width={70}
              height={70}
              alt="Trust Logo"
              priority
              style={{ width: "70px", height: "auto" }}
            />

            <div>

              <h1 className="font-bold text-xl text-blue-900">
                Om Sree Ayyan Seva Trust
              </h1>

              <p className="text-sm text-gray-500">
                Serving Humanity with Compassion
              </p>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">

            {menus.map((menu) => (

              <Link
                key={menu.name}
                href={menu.href}
                className={`transition font-medium ${
                  pathname === menu.href
                    ? "text-blue-900 font-bold"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                {menu.name}
              </Link>

            ))}

            <Link
              href="/volunteer"
              className="bg-blue-900 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Become Volunteer
            </Link>

            <button className="border px-4 py-2 rounded-full hover:bg-gray-100 transition">
              🇬🇧 EN | 🇮🇳 தமிழ்
            </button>

          </nav>

          {/* Mobile Menu Button */}

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Navigation */}

      {open && (

        <div className="lg:hidden bg-white shadow-lg">

          {menus.map((menu) => (

            <Link
              key={menu.name}
              href={menu.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 border-b transition ${
                pathname === menu.href
                  ? "bg-blue-50 text-blue-900 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {menu.name}
            </Link>

          ))}

          <div className="p-6">

            <Link
              href="/volunteer"
              onClick={() => setOpen(false)}
              className="block text-center w-full bg-blue-900 text-white py-3 rounded-full hover:bg-blue-700 transition"
            >
              Become Volunteer
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}