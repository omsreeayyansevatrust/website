export interface Event {
  id?: string;

  title: string;

  category: string;

  shortDescription: string;

  description: string;

  venue: string;

  eventDate: string;

  eventTime: string;

  organizer: string;

  contactNumber: string;

  participants: number;

  bannerUrl: string;

  featured: boolean;

  status: "Upcoming" | "Ongoing" | "Completed" | "Cancelled";

  createdAt?: any;

  updatedAt?: any;
}