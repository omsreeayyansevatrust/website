export interface Gallery {
  id?: string;

  title: string;

  category: string;

  description: string;

  thumbnail: string;

  images: string[];

  eventDate: string;

  location: string;

  featured: boolean;

  status: "Published" | "Draft";

  createdAt?: any;

  updatedAt?: any;
}