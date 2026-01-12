// types/admission.ts
export interface AdmissionData {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  grade: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  submittedAt: any;
}

export interface FormResponse {
  success: boolean;
  id?: string;
  error?: string;
}