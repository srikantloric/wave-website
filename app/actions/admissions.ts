// app/actions/admissions.ts
'use server'

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { AdmissionData } from "@/types/admission";

export async function submitAdmission(formData: FormData) {
  try {
    const data: Omit<AdmissionData, 'submittedAt'> = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      dob: formData.get("dob") as string,
      gender: formData.get("gender") as string,
      grade: formData.get("grade") as string,
      parentName: formData.get("parentName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      zip: formData.get("zip") as string,
    };

    await addDoc(collection(db, "admissions"), {
      ...data,
      submittedAt: serverTimestamp(),
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to submit application." };
  }
}