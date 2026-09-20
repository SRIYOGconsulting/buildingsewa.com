import type { Metadata } from "next";
import FaqClient from "@/components/FaqClient";

export const metadata: Metadata = {
  title: "FAQ | Building Sewa",
  description: "Answers to common questions about Building Sewa's construction services, booking process, and coverage areas.",
};

export default function FaqPage() {
  return <FaqClient />;
}