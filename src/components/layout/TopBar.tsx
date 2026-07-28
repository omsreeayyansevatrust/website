"use client";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function TopBar() {
  return (
    <div className="bg-blue-900 text-white">

      <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">

        <div className="flex gap-6">

          <div className="flex items-center gap-2">

            <PhoneIcon className="w-4 h-4" />

            +91 97105 27964

          </div>

          <div className="hidden md:flex items-center gap-2">

            <EnvelopeIcon className="w-4 h-4" />

            omsreeayyansevatrust@gmail.com

          </div>

        </div>

        <div>

          <button className="hover:text-yellow-300">
            English | தமிழ்
          </button>

        </div>

      </div>

    </div>
  );
}