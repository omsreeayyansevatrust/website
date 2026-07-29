"use client";

import {
  CalendarDays,
  Clock3,
  CheckCircle2,
  Star,
} from "lucide-react";

import { Event } from "@/types/event";

interface Props {
  events: Event[];
}

export default function EventStats({
  events,
}: Props) {
  const total = events.length;

  const upcoming = events.filter(
    (e) => e.status === "Upcoming"
  ).length;

  const ongoing = events.filter(
    (e) => e.status === "Ongoing"
  ).length;

  const completed = events.filter(
    (e) => e.status === "Completed"
  ).length;

  const featured = events.filter(
    (e) => e.featured
  ).length;

  const cards = [
    {
      title: "Total Events",
      value: total,
      icon: CalendarDays,
      bg: "bg-blue-100",
      color: "text-blue-700",
    },
    {
      title: "Upcoming",
      value: upcoming,
      icon: Clock3,
      bg: "bg-yellow-100",
      color: "text-yellow-700",
    },
    {
      title: "Completed",
      value: completed,
      icon: CheckCircle2,
      bg: "bg-green-100",
      color: "text-green-700",
    },
    {
      title: "Featured",
      value: featured,
      icon: Star,
      bg: "bg-orange-100",
      color: "text-orange-700",
    },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow p-6 flex justify-between items-center"
          >
            <div>
              <p className="text-gray-500 text-sm">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {card.value}
              </h2>
            </div>

            <div
              className={`${card.bg} ${card.color} p-4 rounded-full`}
            >
              <Icon size={28} />
            </div>
          </div>
        );
      })}
    </div>
  );
}