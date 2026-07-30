export interface Trustee {
  id?: string;

  fullName: string;
  designation: string;

  photo: string;

  mobile: string;
  email: string;
  address: string;

  occupation: string;
  qualification: string;

  joiningDate: string;

  tenureFrom: string;
  tenureTo: string;

  responsibilities: string;
  biography: string;
  message: string;

  displayOrder: number;

  featured: boolean;

  status: "Active" | "Inactive";

  createdAt?: any;
  updatedAt?: any;
}