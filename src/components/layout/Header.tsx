"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const menus = [
  "Home",
  "About",
  "Projects",
  "Events",
  "Gallery",
  "Volunteer",
  "Contact",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="container mx-auto px-6">

        <div className="flex items-center justify-between h-24">

          {/* Logo */}

          <div className="flex items-center gap-4">

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

          </div>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {menus.map((item) => (
              <a
                key={item}
                href="#"
                className="font-medium text-gray-700 hover:text-blue-700 transition"
              >
                {item}
              </a>
            ))}

            <button className="bg-blue-900 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition">
              Become Volunteer
            </button>

            <button className="border px-4 py-2 rounded-full hover:bg-gray-100">
              🇬🇧 EN | 🇮🇳 தமிழ்
            </button>

          </nav>

          {/* Mobile Menu */}

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

      {open && (

        <div className="lg:hidden bg-white shadow-lg">

          {menus.map((item) => (

            <a
              key={item}
              href="#"
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >
              {item}
            </a>

          ))}

          <div className="p-6">

            <button className="w-full bg-blue-900 text-white py-3 rounded-full">
              Become Volunteer
            </button>

          </div>

        </div>

      )}

    </header>
  );
}