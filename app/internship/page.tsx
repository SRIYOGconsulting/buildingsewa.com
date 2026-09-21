import type { Metadata } from "next";
import InternshipClient from "@/components/InternshipClient";

export const metadata: Metadata = {
  title: "Internship | Building Sewa",
  description:
    "Apply for an internship with Sriyog Consulting's Building Sewa team.",
};

export default function FeedbackPage() {
  return <InternshipClient />;
}
