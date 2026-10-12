import type { MetadataRoute } from "next";
import { getServices } from "@/lib/services";
import { blogPosts } from "@/data/blogPosts";

const baseUrl = "https://www.buildingsewa.com";

const staticRoutes = [
  "", "about", "aipolicy", "services", "team", "contact", "career", "vmgo",
  "history", "why", "certificates", "timeline", "gallery", "qr",
  "glossary", "message", "calendar", "faq", "payment", "internship",
  "videos", "location", "refund", "cookie", "privacy",
  "disclaimer", "tos", "feedback", "testimonials", "blog", "products",
  "events",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services = await getServices();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: route === "" ? baseUrl : `${baseUrl}/${route}`,
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

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}