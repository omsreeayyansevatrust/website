"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  createProject,
  updateProject,
} from "@/services/projectService";

import { Project } from "@/types/project";
import ImageUploader from "@/components/ui/ImageUploader";

interface ProjectFormProps {
  mode: "add" | "edit";
  project?: Project;
}

const categories = [
  "Medical",
  "Education",
  "Food Distribution",
  "Tree Plantation",
  "Women Empowerment",
  "Old Age Support",
  "Child Welfare",
  "Other",
];

const emptyForm: Project = {
  title: "",
  category: "",
  shortDescription: "",
  description: "",
  location: "",
  beneficiaries: 0,
  eventDate: "",
  imageUrl: "",
  featured: false,
  status: "Active",
};

export default function ProjectForm({
  mode,
  project,
}: ProjectFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<Project>(emptyForm);

  useEffect(() => {
    if (mode === "edit" && project) {
      setForm({
        ...project,
      });
    } else if (mode === "add") {
      setForm(emptyForm);
    }
  }, [mode, project]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "beneficiaries"
          ? Number(value)
          : value,
    }));
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Project title is required");
      return;
    }

    if (!form.category) {
      alert("Please select category");
      return;
    }

    if (!form.shortDescription.trim()) {
      alert("Short description is required");
      return;
    }

    if (!form.description.trim()) {
      alert("Description is required");
      return;
    }

    if (!form.location.trim()) {
      alert("Location is required");
      return;
    }

    if (form.beneficiaries <= 0) {
      alert("Beneficiaries should be greater than zero");
      return;
    }

    if (!form.eventDate) {
      alert("Please select event date");
      return;
    }

    if (!form.imageUrl) {
      alert("Please upload project image");
      return;
    }

    try {
      setLoading(true);

      if (mode === "add") {
        await createProject(form);

        alert("Project Added Successfully");
      } else {
        if (!project?.id) {
          throw new Error("Project ID missing");
        }

        await updateProject(project.id, form);

        alert("Project Updated Successfully");
      }

      router.push("/admin/projects");
    } catch (error) {
      console.error(error);
      alert("Unable to save project");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8 space-y-8"
    >
      <h2 className="text-2xl font-bold text-gray-800">
        {mode === "edit"
          ? "Edit Project"
          : "Add New Project"}
      </h2>

      {/* Image Upload */}

      <ImageUploader
        folder="projects"
        value={form.imageUrl}
        onUploadComplete={(url) =>
          setForm((prev) => ({
            ...prev,
            imageUrl: url,
          }))
        }
      />

      {/* Title */}

      <div>
        <label className="block font-semibold mb-2">
          Project Title
        </label>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Enter Project Title"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      {/* Category */}

      <div>
        <label className="block font-semibold mb-2">
          Category
        </label>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
        >
          <option value="">
            Select Category
          </option>

          {categories.map((cat) => (
            <option
              key={cat}
              value={cat}
            >
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Short Description */}

      <div>
        <label className="block font-semibold mb-2">
          Short Description
        </label>

        <textarea
          rows={3}
          name="shortDescription"
          value={form.shortDescription}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      {/* Description */}

      <div>
        <label className="block font-semibold mb-2">
          Description
        </label>

        <textarea
          rows={6}
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-2">
            Location
          </label>

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Beneficiaries
          </label>

          <input
            type="number"
            name="beneficiaries"
            value={form.beneficiaries}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-2">
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
          <label className="block font-semibold mb-2">
            Status
          </label>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="Active">
              Active
            </option>

            <option value="Completed">
              Completed
            </option>
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
          className="h-5 w-5"
        />

        <label className="font-semibold">
          Featured Project
        </label>
      </div>

      {form.imageUrl && (
        <div className="bg-green-50 border border-green-300 rounded-lg p-4">
          <p className="text-green-700 font-medium">
            ✓ Image uploaded successfully
          </p>

          <p className="text-xs text-gray-500 break-all mt-2">
            {form.imageUrl}
          </p>
        </div>
      )}

      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={() =>
            router.push("/admin/projects")
          }
          className="px-6 py-3 rounded-lg border hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg disabled:bg-gray-400"
        >
          {loading
            ? mode === "edit"
              ? "Updating..."
              : "Saving..."
            : mode === "edit"
            ? "Update Project"
            : "Save Project"}
        </button>
      </div>
    </form>
  );
}