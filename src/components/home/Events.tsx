"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

import { getEvents } from "@/services/eventService";
import { Event } from "@/types/event";

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  async function loadEvents() {
    try {
      const data = await getEvents();

      const homepageEvents = data
        .filter(
          (item) =>
            item.featured &&
            (item.status === "Upcoming" || item.status === "Ongoing")
        )
        .sort(
          (a, b) =>
            new Date(a.eventDate).getTime() -
            new Date(b.eventDate).getTime()
        )
        .slice(0, 3);

      setEvents(homepageEvents);
    } catch (error) {
      console.error("Failed to load events", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase text-blue-700 font-semibold tracking-widest">
            Latest Events
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Recent Activities
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest community service activities,
            awareness programs and upcoming initiatives.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500">
            Loading events...
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No upcoming events available.
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">

            {events.map((event) => (

              <div
                key={event.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white border"
              >

                <div className="relative h-52">

                  {event.bannerUrl ? (
                    <Image
                      src={event.bannerUrl}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-blue-700 to-green-600 flex items-center justify-center">
                      <CalendarDays className="w-20 h-20 text-white" />
                    </div>
                  )}

                </div>

                <div className="p-8">

                  <div className="flex items-center gap-2 text-blue-700 mb-4">
                    <CalendarDays size={18} />

                    <span>
                      {new Date(event.eventDate).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>

                  </div>

                  <h3 className="text-2xl font-bold">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7 line-clamp-3">
                    {event.shortDescription}
                  </p>

                  <Link
                    href={`/events/${event.id}`}
                    className="mt-8 inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-4 transition-all"
                  >
                    Read More
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </section>
  );
}