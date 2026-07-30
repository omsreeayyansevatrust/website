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
import { Trustee } from "@/types/trustee";

const COLLECTION = "trustees";

/**
 * Get all trustees
 */
export async function getTrustees(): Promise<Trustee[]> {
  const q = query(
    collection(db, COLLECTION),
    orderBy("displayOrder", "asc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Trustee),
  }));
}

/**
 * Get trustee by id
 */
export async function getTrustee(id: string): Promise<Trustee | null> {
  const ref = doc(db, COLLECTION, id);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Trustee),
  };
}

/**
 * Create trustee
 */
export async function createTrustee(
  trustee: Omit<Trustee, "id" | "createdAt" | "updatedAt">
) {
  await addDoc(collection(db, COLLECTION), {
    ...trustee,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

/**
 * Update trustee
 */
export async function updateTrustee(
  id: string,
  trustee: Partial<Trustee>
) {
  const ref = doc(db, COLLECTION, id);

  await updateDoc(ref, {
    ...trustee,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Delete trustee
 */
export async function deleteTrustee(id: string) {
  const ref = doc(db, COLLECTION, id);

  await deleteDoc(ref);
}