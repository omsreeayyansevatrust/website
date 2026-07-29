"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Project } from "@/types/project";
import { getProjects } from "@/services/projectService";

export default function RecentProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const data = await getProjects();
    setProjects(data.slice(0, 5));
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between mb-5">
        <h2 className="font-bold text-lg">
          Recent Projects
        </h2>

        <Link
          href="/admin/projects"
          className="text-orange-600"
        >
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center gap-4"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={70}
              height={70}
              className="rounded-lg object-cover"
              unoptimized
            />

            <div>
              <h3 className="font-semibold">
                {project.title}
              </h3>

              <p className="text-sm text-gray-500">
                {project.location}
              </p>

              <p className="text-xs text-gray-400">
                {project.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}