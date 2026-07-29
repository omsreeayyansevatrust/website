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
import { Event } from "@/types/event";

const COLLECTION = "events";

/**
 * Get all events
 */
export async function getEvents(): Promise<Event[]> {
  const q = query(
    collection(db, COLLECTION),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...(document.data() as Omit<Event, "id">),
  }));
}

/**
 * Get single event
 */
export async function getEvent(
  id: string
): Promise<Event | null> {
  const documentRef = doc(db, COLLECTION, id);

  const snapshot = await getDoc(documentRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Event, "id">),
  };
}

/**
 * Create Event
 */
export async function createEvent(
  event: Omit<Event, "id" | "createdAt" | "updatedAt">
) {
  return await addDoc(collection(db, COLLECTION), {
    ...event,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

/**
 * Update Event
 */
export async function updateEvent(
  id: string,
  event: Partial<Event>
) {
  const documentRef = doc(db, COLLECTION, id);

  return await updateDoc(documentRef, {
    ...event,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Delete Event
 */
export async function deleteEvent(id: string) {
  const documentRef = doc(db, COLLECTION, id);

  return await deleteDoc(documentRef);
}