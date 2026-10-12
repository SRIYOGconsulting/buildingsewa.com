import type { Metadata } from "next";
import FeedbackClient from "@/components/FeedbackClient";

export const metadata: Metadata = {
  title: "Feedback | Building Sewa",
  description: "Share your experience with Building Sewa's construction services.",
};

export default function FeedbackPage() {
  return <FeedbackClient />;
}