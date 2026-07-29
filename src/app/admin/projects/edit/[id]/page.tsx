"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ProjectForm from "@/components/admin/projects/ProjectForm";
import { getProject } from "@/services/projectService";
import { Project } from "@/types/project";

export default function EditProjectPage() {
  const params = useParams();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const data = await getProject(params.id as string);

        if (data) {
          setProject(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProject();
  }, [params]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        Loading project...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-20">
        Project not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <ProjectForm
        mode="edit"
        project={project}
      />
    </div>
  );
}