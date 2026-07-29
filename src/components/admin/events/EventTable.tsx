"use client";

import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2, Star } from "lucide-react";
import { Event } from "@/types/event";

interface Props {
  events: Event[];
  onDelete: (id: string) => void;
}

export default function EventTable({
  events,
  onDelete,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">

      <table className="min-w-full divide-y divide-gray-200">

        <thead className="bg-gray-50">

          <tr>

            <th className="px-6 py-3 text-left">Banner</th>

            <th className="px-6 py-3 text-left">Event</th>

            <th className="px-6 py-3 text-left">Category</th>

            <th className="px-6 py-3 text-left">Venue</th>

            <th className="px-6 py-3 text-center">Date</th>

            <th className="px-6 py-3 text-center">Participants</th>

            <th className="px-6 py-3 text-center">Featured</th>

            <th className="px-6 py-3 text-center">Status</th>

            <th className="px-6 py-3 text-center">Actions</th>

          </tr>

        </thead>

        <tbody className="divide-y divide-gray-100">

          {events.map((event) => (

            <tr key={event.id} className="hover:bg-gray-50">

              <td className="px-6 py-4">

                {event.bannerUrl ? (

                  <Image
                    src={event.bannerUrl}
                    alt={event.title}
                    width={80}
                    height={60}
                    unoptimized
                    className="rounded-lg object-cover"
                  />

                ) : (

                  <div className="w-20 h-14 bg-gray-200 rounded flex items-center justify-center text-xs">
                    No Image
                  </div>

                )}

              </td>

              <td className="px-6 py-4">

                <div className="font-semibold">
                  {event.title}
                </div>

                <div className="text-sm text-gray-500">
                  {event.shortDescription}
                </div>

              </td>

              <td className="px-6 py-4">
                {event.category}
              </td>

              <td className="px-6 py-4">
                {event.venue}
              </td>

              <td className="px-6 py-4 text-center">
                {event.eventDate}
              </td>

              <td className="px-6 py-4 text-center">
                {event.participants}
              </td>

              <td className="px-6 py-4 text-center">

                {event.featured ? (
                  <Star
                    size={18}
                    fill="currentColor"
                    className="text-yellow-500 inline"
                  />
                ) : (
                  "-"
                )}

              </td>

              <td className="px-6 py-4 text-center">

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    event.status === "Upcoming"
                      ? "bg-blue-100 text-blue-700"
                      : event.status === "Ongoing"
                      ? "bg-green-100 text-green-700"
                      : event.status === "Completed"
                      ? "bg-gray-200 text-gray-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {event.status}
                </span>

              </td>

              <td className="px-6 py-4">

                <div className="flex justify-center gap-2">

                  <Link
                    href={`/admin/events/edit/${event.id}`}
                    className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200"
                  >
                    <Pencil
                      size={18}
                      className="text-blue-700"
                    />
                  </Link>

                  <button
                    onClick={() => onDelete(event.id!)}
                    className="bg-red-100 p-2 rounded-lg hover:bg-red-200"
                  >
                    <Trash2
                      size={18}
                      className="text-red-700"
                    />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}