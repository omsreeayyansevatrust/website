"use client";

import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2, Star } from "lucide-react";
import { Project } from "@/types/project";

interface Props {
  projects: Project[];
  onDelete: (id: string) => void;
}

export default function ProjectTable({
  projects,
  onDelete,
}: Props) {
  return (
    <div className="overflow-x-auto">

      <table className="min-w-full divide-y divide-gray-200">

        <thead className="bg-gray-50">
          <tr>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
              Image
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
              Project
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
              Category
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
              Location
            </th>

            <th className="px-6 py-3 text-center text-xs font-semibold uppercase">
              Beneficiaries
            </th>

            <th className="px-6 py-3 text-center text-xs font-semibold uppercase">
              Date
            </th>

            <th className="px-6 py-3 text-center text-xs font-semibold uppercase">
              Featured
            </th>

            <th className="px-6 py-3 text-center text-xs font-semibold uppercase">
              Status
            </th>

            <th className="px-6 py-3 text-center text-xs font-semibold uppercase">
              Actions
            </th>

          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">

          {projects.map((project) => (

            <tr
              key={project.id}
              className="hover:bg-gray-50 transition"
            >

              {/* Image */}

              <td className="px-6 py-4">

                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={70}
                    height={70}
                    className="rounded-lg object-cover border"
                  />
                ) : (
                  <div className="w-[70px] h-[70px] bg-gray-200 rounded-lg flex items-center justify-center">
                    No Image
                  </div>
                )}

              </td>

              {/* Project */}

              <td className="px-6 py-4">

                <h3 className="font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                  {project.shortDescription}
                </p>

              </td>

              {/* Category */}

              <td className="px-6 py-4">
                {project.category}
              </td>

              {/* Location */}

              <td className="px-6 py-4">
                {project.location}
              </td>

              {/* Beneficiaries */}

              <td className="px-6 py-4 text-center">
                {project.beneficiaries}
              </td>

              {/* Date */}

              <td className="px-6 py-4 text-center">
                {project.eventDate}
              </td>

              {/* Featured */}

              <td className="px-6 py-4 text-center">

                {project.featured ? (
                  <Star
                    className="text-yellow-500 inline"
                    size={20}
                    fill="currentColor"
                  />
                ) : (
                  "-"
                )}

              </td>

              {/* Status */}

              <td className="px-6 py-4 text-center">

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {project.status}
                </span>

              </td>

              {/* Actions */}

              <td className="px-6 py-4">

                <div className="flex justify-center gap-2">

                  <Link
                    href={`/admin/projects/edit/${project.id}`}
                    className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200"
                    title="Edit Project"
                  >
                    <Pencil
                      size={18}
                      className="text-blue-700"
                    />
                  </Link>

                  <button
                    onClick={() => {
                      if (
                        confirm(
                          "Are you sure you want to delete this project?"
                        )
                      ) {
                        onDelete(project.id!);
                      }
                    }}
                    className="p-2 rounded-lg bg-red-100 hover:bg-red-200"
                    title="Delete Project"
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