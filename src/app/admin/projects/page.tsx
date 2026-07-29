"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FolderOpen, Plus, Search } from "lucide-react";

import ProjectTable from "@/components/admin/projects/ProjectTable";

import {
  getProjects,
  deleteProject,
} from "@/services/projectService";

import { Project } from "@/types/project";

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
      console.error(error);
      alert("Unable to load projects.");
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

    const filtered = projects.filter((project) => {
      return (
        project.title.toLowerCase().includes(keyword) ||
        project.category.toLowerCase().includes(keyword) ||
        project.location.toLowerCase().includes(keyword) ||
        project.shortDescription.toLowerCase().includes(keyword)
      );
    });

    setFilteredProjects(filtered);
  }, [search, projects]);

  async function handleDelete(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    try {
      await deleteProject(id);

      await loadProjects();

      alert("Project deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("Unable to delete project.");
    }
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Projects
          </h1>

          <p className="text-gray-500 mt-1">
            Manage NGO Projects
          </p>
        </div>

        <Link
          href="/admin/projects/add"
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-lg transition"
        >
          <Plus size={18} />
          Add Project
        </Link>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5">

        <div className="relative">

          <Search
            className="absolute left-4 top-3.5 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search by title, category or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-orange-500 outline-none"
          />

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

        <div className="bg-white rounded-xl shadow p-5">

          <h3 className="text-gray-500">
            Total Projects
          </h3>

          <p className="text-3xl font-bold mt-2">
            {projects.length}
          </p>

        </div>

        <div className="bg-white rounded-xl shadow p-5">

          <h3 className="text-gray-500">
            Active
          </h3>

          <p className="text-3xl font-bold text-green-600 mt-2">
            {
              projects.filter(
                (p) => p.status === "Active"
              ).length
            }
          </p>

        </div>

        <div className="bg-white rounded-xl shadow p-5">

          <h3 className="text-gray-500">
            Completed
          </h3>

          <p className="text-3xl font-bold text-blue-600 mt-2">
            {
              projects.filter(
                (p) => p.status === "Completed"
              ).length
            }
          </p>

        </div>

        <div className="bg-white rounded-xl shadow p-5">

          <h3 className="text-gray-500">
            Featured
          </h3>

          <p className="text-3xl font-bold text-yellow-500 mt-2">
            {
              projects.filter(
                (p) => p.featured
              ).length
            }
          </p>

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        {loading ? (

          <div className="py-20 text-center">

            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>

            <p className="mt-5 text-gray-500">
              Loading projects...
            </p>

          </div>

        ) : filteredProjects.length === 0 ? (

          <div className="py-20 flex flex-col items-center">

            <FolderOpen
              size={80}
              className="text-gray-300"
            />

            <h2 className="text-2xl font-semibold mt-6">
              No Projects Found
            </h2>

            <p className="text-gray-500 mt-2">
              Start by creating your first project.
            </p>

            <Link
              href="/admin/projects/add"
              className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg"
            >
              Add Project
            </Link>

          </div>

        ) : (

          <ProjectTable
            projects={filteredProjects}
            onDelete={handleDelete}
          />

        )}

      </div>

    </div>
  );
}