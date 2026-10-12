import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Building Sewa",
  description: "Get in touch with Building Sewa for construction inquiries and support.",
};

export default function ContactPage() {
  return <ContactClient />;
}