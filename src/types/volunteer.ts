export interface Volunteer {
  id?: string;

  fullName: string;
  photo: string;

  gender: "Male" | "Female" | "Other";

  dob: string;

  mobile: string;
  email: string;

  address: string;

  bloodGroup: string;

  occupation: string;

  skills: string;

  department: string;

  joiningDate: string;

  emergencyContact: string;

  aadhaarNumber: string;

  status: "Active" | "Inactive";

  createdAt?: any;
  updatedAt?: any;
}