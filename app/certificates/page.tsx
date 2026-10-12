import type { Metadata } from "next";
import CertificateClient from "@/components/CertificateClient";

export const metadata: Metadata = {
  title: "Certificates | Building Sewa",
  description: "Building Sewa's professional certifications and accreditations.",
};

export default function CertificatesPage() {
  return <CertificateClient />;
}