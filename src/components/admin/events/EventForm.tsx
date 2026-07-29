"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  createEvent,
  updateEvent,
} from "@/services/eventService";

import { Event } from "@/types/event";
import ImageUploader from "@/components/ui/ImageUploader";

interface EventFormProps {
  mode: "add" | "edit";
  event?: Event;
}

const categories = [
  "Medical",
  "Education",
  "Annadhanam",
  "Blood Donation",
  "Tree Plantation",
  "Women Empowerment",
  "Child Welfare",
  "Spiritual",
  "Awareness",
  "Other",
];

const emptyForm: Event = {
  title: "",
  category: "",
  shortDescription: "",
  description: "",
  venue: "",
  eventDate: "",
  eventTime: "",
  organizer: "",
  contactNumber: "",
  participants: 0,
  bannerUrl: "",
  featured: false,
  status: "Upcoming",
};

export default function EventForm({
  mode,
  event,
}: EventFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<Event>(emptyForm);

  useEffect(() => {
    if (mode === "edit" && event) {
      setForm(event);
    } else {
      setForm(emptyForm);
    }
  }, [mode, event]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "participants"
          ? Number(value)
          : value,
    }));
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Event Name is required");
      return;
    }

    if (!form.category) {
      alert("Please select category");
      return;
    }

    if (!form.venue.trim()) {
      alert("Venue is required");
      return;
    }

    if (!form.eventDate) {
      alert("Select Event Date");
      return;
    }

    if (!form.eventTime) {
      alert("Select Event Time");
      return;
    }

    if (!form.bannerUrl) {
      alert("Upload Banner");
      return;
    }

    try {
      setLoading(true);

      if (mode === "add") {
        await createEvent(form);
        alert("Event Created Successfully");
      } else {
        if (!event?.id) {
          throw new Error("Event ID Missing");
        }

        await updateEvent(event.id, form);
        alert("Event Updated Successfully");
      }

      router.push("/admin/events");
    } catch (err) {
      console.error(err);
      alert("Unable to save event");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8 space-y-8"
    >
      <h2 className="text-2xl font-bold">
        {mode === "edit"
          ? "Edit Event"
          : "Add New Event"}
      </h2>

      <ImageUploader
        folder="events"
        value={form.bannerUrl}
        onUploadComplete={(url) =>
          setForm((prev) => ({
            ...prev,
            bannerUrl: url,
          }))
        }
      />

      <div>
        <label className="font-semibold block mb-2">
          Event Name
        </label>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="font-semibold block mb-2">
          Category
        </label>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option value="">
            Select Category
          </option>

          {categories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="font-semibold block mb-2">
          Short Description
        </label>

        <textarea
          rows={3}
          name="shortDescription"
          value={form.shortDescription}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="font-semibold block mb-2">
          Description
        </label>

        <textarea
          rows={6}
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="font-semibold block mb-2">
            Venue
          </label>

          <input
            name="venue"
            value={form.venue}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="font-semibold block mb-2">
            Organizer
          </label>

          <input
            name="organizer"
            value={form.organizer}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div>
          <label className="font-semibold block mb-2">
            Event Date
          </label>

          <input
            type="date"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="font-semibold block mb-2">
            Event Time
          </label>

          <input
            type="time"
            name="eventTime"
            value={form.eventTime}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="font-semibold block mb-2">
            Participants
          </label>

          <input
            type="number"
            name="participants"
            value={form.participants}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="font-semibold block mb-2">
            Contact Number
          </label>

          <input
            name="contactNumber"
            value={form.contactNumber}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="font-semibold block mb-2">
            Status
          </label>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Upcoming</option>
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>

      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={form.featured}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              featured: e.target.checked,
            }))
          }
        />

        <label>Featured Event</label>
      </div>

      <div className="flex justify-end gap-4">

        <button
          type="button"
          onClick={() =>
            router.push("/admin/events")
          }
          className="border px-6 py-3 rounded-lg"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-600 text-white px-8 py-3 rounded-lg"
        >
          {loading
            ? mode === "edit"
              ? "Updating..."
              : "Saving..."
            : mode === "edit"
            ? "Update Event"
            : "Save Event"}
        </button>

      </div>

    </form>
  );
}