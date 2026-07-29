export interface Project {
  id?: string;

  title: string;

  category: string;

  shortDescription: string;

  description: string;

  location: string;

  beneficiaries: number;

  eventDate: string;

  imageUrl: string;

  featured: boolean;

  status: "Active" | "Completed";

  createdAt?: any;

  updatedAt?: any;
}