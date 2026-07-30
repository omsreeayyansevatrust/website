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
import { Volunteer } from "@/types/volunteer";

const COLLECTION = "volunteers";

export async function getVolunteers(): Promise<Volunteer[]> {
  const q = query(
    collection(db, COLLECTION),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...(document.data() as Omit<Volunteer, "id">),
  }));
}

export async function getVolunteer(id: string) {
  const snapshot = await getDoc(doc(db, COLLECTION, id));

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Volunteer, "id">),
  };
}

export async function createVolunteer(
  volunteer: Omit<
    Volunteer,
    "id" | "createdAt" | "updatedAt"
  >
) {
  return addDoc(collection(db, COLLECTION), {
    ...volunteer,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateVolunteer(
  id: string,
  volunteer: Partial<Volunteer>
) {
  return updateDoc(doc(db, COLLECTION, id), {
    ...volunteer,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteVolunteer(id: string) {
  return deleteDoc(doc(db, COLLECTION, id));
}