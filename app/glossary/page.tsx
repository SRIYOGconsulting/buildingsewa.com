import type { Metadata } from "next";
import GlossaryClient from "@/components/GlossaryClient";

export const metadata: Metadata = {
  title: "Glossary | Building Sewa",
  description: "Construction and building terminology explained.",
};

export default function GlossaryPage() {
  return <GlossaryClient />;
}