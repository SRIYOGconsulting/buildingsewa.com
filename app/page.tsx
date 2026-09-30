import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import TopServices from "@/components/TopServices";
import LatestBlogs from "@/components/LatestBlogs";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Building Sewa | Construction Management in Nepal",
  description:
    "End-to-end construction management connecting homeowners with verified architects, engineers, and contractors across Nepal.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <TopServices />
      <LatestBlogs />
    </>
  );
}