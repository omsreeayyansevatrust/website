"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import {
  getEvents,
  deleteEvent,
} from "@/services/eventService";

import { Event } from "@/types/event";
import EventTable from "@/components/admin/events/EventTable";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadEvents() {
    try {
      const data = await getEvents();
      setEvents(data);
      setFilteredEvents(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    const value = search.toLowerCase();

    setFilteredEvents(
      events.filter(
        (event) =>
          event.title.toLowerCase().includes(value) ||
          event.category.toLowerCase().includes(value) ||
          event.venue.toLowerCase().includes(value)
      )
    );
  }, [search, events]);

  async function handleDelete(id: string) {
    if (!confirm("Delete this event?")) return;

    await deleteEvent(id);
    loadEvents();
  }

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Events
          </h1>

          <p className="text-gray-500">
            Manage NGO Events
          </p>
        </div>

        <Link
          href="/admin/events/add"
          className="bg-orange-600 text-white px-5 py-3 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Event
        </Link>

      </div>

      <div className="grid grid-cols-4 gap-4">

        <div className="bg-white rounded-xl shadow p-5">
          <h3>Total Events</h3>
          <p className="text-3xl font-bold mt-2">
            {events.length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3>Upcoming</h3>
          <p className="text-3xl font-bold mt-2">
            {
              events.filter(
                (e) => e.status === "Upcoming"
              ).length
            }
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3>Completed</h3>
          <p className="text-3xl font-bold mt-2">
            {
              events.filter(
                (e) => e.status === "Completed"
              ).length
            }
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3>Featured</h3>
          <p className="text-3xl font-bold mt-2">
            {
              events.filter(
                (e) => e.featured
              ).length
            }
          </p>
        </div>

      </div>

      <input
        placeholder="Search Events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg p-3"
      />

      {loading ? (
        <div className="text-center py-10">
          Loading...
        </div>
      ) : (
        <EventTable
          events={filteredEvents}
          onDelete={handleDelete}
        />
      )}

    </div>
  );
}