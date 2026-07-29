import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Project } from "@/types/project";

const COLLECTION = "projects";

/**
 * Get all projects
 */
export async function getProjects(): Promise<Project[]> {
  const q = query(
    collection(db, COLLECTION),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...(document.data() as Omit<Project, "id">),
  }));
}

/**
 * Get a single project
 */
export async function getProject(
  id: string
): Promise<Project | null> {
  const documentRef = doc(db, COLLECTION, id);

  const snapshot = await getDoc(documentRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Project, "id">),
  };
}

/**
 * Create project
 */
export async function createProject(
  project: Omit<Project, "id" | "createdAt" | "updatedAt">
) {
  return await addDoc(collection(db, COLLECTION), {
    ...project,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

/**
 * Update project
 */
export async function updateProject(
  id: string,
  project: Partial<Project>
) {
  const documentRef = doc(db, COLLECTION, id);

  return await updateDoc(documentRef, {
    ...project,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Delete project
 */
export async function deleteProject(id: string) {
  const documentRef = doc(db, COLLECTION, id);

  return await deleteDoc(documentRef);
}