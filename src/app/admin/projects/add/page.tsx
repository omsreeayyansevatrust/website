"use client";

import ProjectForm from "@/components/admin/projects/ProjectForm";

export default function AddProjectPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <ProjectForm mode="add" />
    </div>
  );
}