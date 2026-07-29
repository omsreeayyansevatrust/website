"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import EventForm from "@/components/admin/events/EventForm";
import { getEvent } from "@/services/eventService";
import { Event } from "@/types/event";

export default function EditEventPage() {
  const params = useParams();

  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvent() {
      try {
        const data = await getEvent(params.id as string);

        if (data) {
          setEvent(data);
        }
      } finally {
        setLoading(false);
      }
    }

    loadEvent();
  }, [params]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        Loading Event...
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center py-20">
        Event not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <EventForm
        mode="edit"
        event={event}
      />
    </div>
  );
}