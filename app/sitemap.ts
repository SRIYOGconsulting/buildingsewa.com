import type { MetadataRoute } from "next";
import { getServices } from "@/lib/services";

const staticRoutes = [
  "", "about", "services", "team", "contact", "career", "vmgo",
  "history", "why", "certificates", "timeline", "gallery", "qr",
  "glossary", "message", "calendar", "faq", "payment", "internship",
  "download", "videos", "location", "refund", "cookie", "privacy",
  "disclaimer", "tos", "feedback", "testimonials", "blog", "products",
  "events", "book",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.buildingsewa.com";
  const services = await getServices();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries];
}