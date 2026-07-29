import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Gallery } from "@/types/gallery";

const COLLECTION = "gallery";

export async function getAllGalleries(): Promise<Gallery[]> {
  const q = query(
    collection(db, COLLECTION),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...(document.data() as Omit<Gallery, "id">),
  }));
}

export async function getGalleryById(id: string) {
  const snapshot = await getDoc(doc(db, COLLECTION, id));

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Gallery, "id">),
  };
}

export async function createGallery(
  gallery: Omit<Gallery, "id" | "createdAt" | "updatedAt">
) {
  return addDoc(collection(db, COLLECTION), {
    ...gallery,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateGallery(
  id: string,
  gallery: Partial<Gallery>
) {
  return updateDoc(doc(db, COLLECTION, id), {
    ...gallery,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteGallery(id: string) {
  return deleteDoc(doc(db, COLLECTION, id));
}