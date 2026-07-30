"use client";

import { useEffect, useState } from "react";
import {
  Users,
  GraduationCap,
  Trees,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";

import { getProjects } from "@/services/projectService";
import { getEvents } from "@/services/eventService";
import { getAllGalleries } from "@/services/galleryService";
import { getTrustees } from "@/services/trusteeService";

export default function Impact() {
  const [stats, setStats] = useState([
    {
      icon: Users,
      number: 0,
      title: "Projects",
      color: "text-blue-700",
      bg: "bg-blue-100",
    },
    {
      icon: GraduationCap,
      number: 0,
      title: "Events",
      color: "text-green-700",
      bg: "bg-green-100",
    },
    {
      icon: Trees,
      number: 0,
      title: "Gallery",
      color: "text-emerald-700",
      bg: "bg-emerald-100",
    },
    {
      icon: HeartHandshake,
      number: 0,
      title: "Trustees",
      color: "text-yellow-700",
      bg: "bg-yellow-100",
    },
  ]);

  useEffect(() => {
    loadStatistics();
  }, []);

  async function loadStatistics() {
    try {
      const [
        projects,
        events,
        galleries,
        trustees,
      ] = await Promise.all([
        getProjects(),
        getEvents(),
        getAllGalleries(),
        getTrustees(),
      ]);

      setStats([
        {
          icon: Users,
          number: projects.length,
          title: "Projects",
          color: "text-blue-700",
          bg: "bg-blue-100",
        },
        {
          icon: GraduationCap,
          number: events.length,
          title: "Events",
          color: "text-green-700",
          bg: "bg-green-100",
        },
        {
          icon: Trees,
          number: galleries.length,
          title: "Gallery",
          color: "text-emerald-700",
          bg: "bg-emerald-100",
        },
        {
          icon: HeartHandshake,
          number: trustees.length,
          title: "Trustees",
          color: "text-yellow-700",
          bg: "bg-yellow-100",
        },
      ]);
    } catch (error) {
      console.error("Error loading impact statistics:", error);
    }
  }

  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 to-green-700 text-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-yellow-300 font-semibold">
            Our Impact
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Together We Create Positive Change
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg">
            Every contribution, every volunteer, and every initiative
            helps us build a stronger, healthier, and more compassionate
            society.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center"
              >
                <div
                  className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${item.bg}`}
                >
                  <Icon className={`w-10 h-10 ${item.color}`} />
                </div>

                <h3 className="text-5xl font-bold mt-6 text-gray-900">
                  {item.number}+
                </h3>

                <p className="text-gray-600 mt-4 font-medium">
                  {item.title}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}