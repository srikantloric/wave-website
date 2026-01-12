// app/actions/contact.ts
'use server'

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function submitContact(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      submittedAt: serverTimestamp(),
    };

    await addDoc(collection(db, "contact_submissions"), data);
    return { success: true };
  } catch (error: any) {
    console.error("Contact Form Error:", error);
    return { success: false, error: error.message };
  }
}