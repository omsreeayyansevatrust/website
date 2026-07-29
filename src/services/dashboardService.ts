import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface DashboardCounts {
  projects: number;
  events: number;
  gallery: number;
  volunteers: number;
  donations: number;
  messages: number;
}

export async function getDashboardCounts(): Promise<DashboardCounts> {
  const [
    projects,
    events,
    gallery,
    volunteers,
    donations,
    messages,
  ] = await Promise.all([
    getCountFromServer(collection(db, "projects")),
    getCountFromServer(collection(db, "events")),
    getCountFromServer(collection(db, "gallery")),
    getCountFromServer(collection(db, "volunteers")),
    getCountFromServer(collection(db, "donations")),
    getCountFromServer(collection(db, "messages")),
  ]);

  return {
    projects: projects.data().count,
    events: events.data().count,
    gallery: gallery.data().count,
    volunteers: volunteers.data().count,
    donations: donations.data().count,
    messages: messages.data().count,
  };
}