"use client";

import EventForm from "@/components/admin/events/EventForm";

export default function AddEventPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <EventForm mode="add" />
    </div>
  );
}