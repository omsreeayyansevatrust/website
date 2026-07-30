"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { getWebsiteSettings } from "@/services/settingsService";
import { WebsiteSettings } from "@/types/settings";

export default function Hero() {
  const [settings, setSettings] = useState<WebsiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    try {
      const data = await getWebsiteSettings();
      setSettings(data);
    } catch (error) {
      console.error("Failed to load website settings:", error);
    } finally {
      setLoading(false);
    }
  }

  const hero = settings?.hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white">
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold mb-6">
              {loading
                ? "Loading..."
                : hero?.subtitle || "Registered Charitable Trust"}
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight whitespace-pre-line">
              {loading
                ? "Loading..."
                : hero?.title || "Om Sree Ayyan\nSeva Trust"}
            </h1>

            <p className="mt-8 text-xl text-blue-100 leading-9">
              {loading
                ? "Loading..."
                : hero?.description ||
                  "Serving Humanity through Education, Healthcare, Environmental Protection and Community Welfare."}
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href={hero?.buttonLink || "/volunteer"}
                className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition"
              >
                {hero?.buttonText || "Become Volunteer"}
              </a>

              <a
                href="/about"
                className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/logo.png"
              alt="Trust Logo"
              width={450}
              height={450}
              priority
              className="drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}