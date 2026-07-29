"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import GalleryImageUploader from "./GalleryImageUploader";

import {
  createGallery,
  updateGallery,
} from "@/services/galleryService";

import { Gallery } from "@/types/gallery";

interface GalleryFormProps {
  mode: "add" | "edit";
  gallery?: Gallery;
}

const categories = [
  "Medical Camp",
  "Annadhanam",
  "Education",
  "Blood Donation",
  "Tree Plantation",
  "Women Empowerment",
  "Temple Festival",
  "Old Age Home",
  "Orphanage",
  "Other",
];

const emptyForm: Gallery = {
  title: "",
  category: "",
  description: "",
  thumbnail: "",
  images: [],
  eventDate: "",
  location: "",
  featured: false,
  status: "Published",
};

export default function GalleryForm({
  mode,
  gallery,
}: GalleryFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] =
    useState<Gallery>(emptyForm);

  useEffect(() => {
    if (mode === "edit" && gallery) {
      setForm(gallery);
    } else {
      setForm(emptyForm);
    }
  }, [mode, gallery]);

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
      [name]: value,
    }));
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Album title is required");
      return;
    }

    if (!form.category) {
      alert("Select category");
      return;
    }

    if (form.images.length === 0) {
      alert("Upload at least one image");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...form,
        thumbnail: form.images[0],
      };

      if (mode === "add") {
        await createGallery(payload);

        alert("Gallery album created successfully.");
      } else {
        if (!gallery?.id) {
          throw new Error("Gallery ID missing");
        }

        await updateGallery(
          gallery.id,
          payload
        );

        alert("Gallery updated successfully.");
      }

      router.push("/admin/gallery");

    } catch (error) {
      console.error(error);

      alert("Unable to save gallery.");
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
        {mode === "add"
          ? "Create Gallery Album"
          : "Edit Gallery Album"}
      </h2>

      <GalleryImageUploader
        value={form.images}
        onChange={(images) =>
          setForm((prev) => ({
            ...prev,
            images,
          }))
        }
      />

      <div>
        <label className="block mb-2 font-semibold">
          Album Title
        </label>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">
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

          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-2 font-semibold">
          Description
        </label>

        <textarea
          rows={5}
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-semibold">
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
          <label className="block mb-2 font-semibold">
            Location
          </label>

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-semibold">
            Status
          </label>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="Published">
              Published
            </option>

            <option value="Draft">
              Draft
            </option>
          </select>
        </div>

        <div className="flex items-center gap-3 mt-9">

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

          <label>
            Featured Album
          </label>

        </div>

      </div>

      <div className="flex justify-end gap-4">

        <button
          type="button"
          onClick={() =>
            router.push("/admin/gallery")
          }
          className="border px-6 py-3 rounded-lg"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg"
        >
          {loading
            ? mode === "add"
              ? "Saving..."
              : "Updating..."
            : mode === "add"
            ? "Create Album"
            : "Update Album"}
        </button>

      </div>

    </form>
  );
}