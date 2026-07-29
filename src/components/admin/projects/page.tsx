"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, FolderOpen } from "lucide-react";
import { getProjects } from "@/services/projectService";
import { Project } from "@/types/project";
// import ProjectTable from "@/components/admin/projects/ProjectTable";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadProjects() {
    try {
      setLoading(true);

      const data = await getProjects();

      setProjects(data);
      setFilteredProjects(data);
    } catch (error) {
      console.error("Unable to load projects", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setFilteredProjects(projects);
      return;
    }

    const keyword = search.toLowerCase();

    const result = projects.filter((project) => {
      return (
        project.title.toLowerCase().includes(keyword) ||
        project.category.toLowerCase().includes(keyword) ||
        project.location.toLowerCase().includes(keyword)
      );
    });

    setFilteredProjects(result);
  }, [search, projects]);

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Projects
          </h1>

          <p className="text-gray-500 mt-1">
            Manage NGO projects and activities
          </p>
        </div>

        <Link
          href="/admin/projects/add"
          className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-lg font-medium transition"
        >
          <Plus size={18} />
          Add Project
        </Link>
      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5">
        <input
          type="text"
          placeholder="Search by title, category or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      {/* Content */}

      <div className="bg-white rounded-xl shadow">

        {loading ? (
          <div className="p-10 text-center">
            Loading projects...
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="p-12 flex flex-col items-center">

            <FolderOpen
              size={70}
              className="text-gray-300"
            />

            <h2 className="mt-4 text-xl font-semibold">
              No Projects Found
            </h2>

            <p className="text-gray-500 mt-2">
              Create your first NGO project.
            </p>

            <Link
              href="/admin/projects/add"
              className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg"
            >
              Add Project
            </Link>

          </div>
        ) : (
          <div className="overflow-x-auto">
            {/* Replace this with ProjectTable in next step */}

            <table className="w-full">

              <thead className="bg-gray-100">
                <tr>

                  <th className="text-left p-4">Title</th>
                  <th className="text-left p-4">Category</th>
                  <th className="text-left p-4">Location</th>
                  <th className="text-left p-4">Beneficiaries</th>
                  <th className="text-left p-4">Status</th>

                </tr>
              </thead>

              <tbody>

                {filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium">
                      {project.title}
                    </td>

                    <td className="p-4">
                      {project.category}
                    </td>

                    <td className="p-4">
                      {project.location}
                    </td>

                    <td className="p-4">
                      {project.beneficiaries}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          project.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>
          </div>
        )}

      </div>
    </div>
  );
}