import type { Metadata } from "next";
import EventsClient from "@/components/EventsClient";

export const metadata: Metadata = {
  title: "Events | Building Sewa",
  description:
    "Company events, workshops, and team milestones at Building Sewa.",
};

export default function EventsPage() {
  return <EventsClient />;
}
