"use client";

import { useEffect, useState } from "react";
import { Project } from "@/types/project";
import { getProjects } from "@/services/projectService";

export default function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  async function refresh() {
    setLoading(true);

    try {
      const data = await getProjects();
      setProjects(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  return {
    projects,
    loading,
    refresh,
  };
}