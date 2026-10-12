import Image from "next/image";
import Link from "next/link";
import Ribbon from "@/components/Ribbon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery | Building Sewa",
  description:
    "View our work quality across homes, offices, and commercial spaces.",
};

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
}

const constructionProjects: Project[] = [
  { id: 1, name: "Residential Construction", description: "Complete residential construction services focused on quality, durability, and modern design.", image: "/gallery/1.jpg" },
  { id: 2, name: "Modern Home Design", description: "Modern architectural and construction solutions designed around the client's lifestyle and requirements.", image: "/gallery/2.jpg" },
  { id: 3, name: "Commercial Building", description: "Professional commercial construction services delivering functional and durable spaces.", image: "/gallery/3.jpg" },
  { id: 6, name: "Structural Construction", description: "Reliable structural construction services following professional engineering and safety standards.", image: "/gallery/6.jpg" },
  { id: 21, name: "House Extension", description: "Building extension services that add useful living space while maintaining structural integrity.", image: "/gallery/21.jpg" },
];

const interiorProjects: Project[] = [
  { id: 4, name: "Interior Development", description: "Complete interior development with practical layouts, quality finishes, and modern aesthetics.", image: "/gallery/4.jpg" },
  { id: 5, name: "Renovation Project", description: "Renovation and remodeling solutions that improve the functionality and appearance of existing spaces.", image: "/gallery/5.jpg" },
  { id: 7, name: "Residential Interior", description: "Thoughtfully designed residential interiors combining comfort, functionality, and contemporary style.", image: "/gallery/7.jpg" },
  { id: 8, name: "Office Development", description: "Professional office spaces designed to create productive, comfortable, and efficient work environments.", image: "/gallery/8.jpg" },
  { id: 9, name: "Kitchen Design", description: "Custom kitchen planning and installation focused on functionality, storage, and modern aesthetics.", image: "/gallery/9.jpg" },
  { id: 10, name: "Bathroom Renovation", description: "Modern bathroom renovation solutions using practical layouts and quality finishing materials.", image: "/gallery/10.jpg" },
  { id: 11, name: "Building Finishing", description: "Professional finishing services that give buildings a polished, durable, and complete appearance.", image: "/gallery/11.jpg" },
];

const exteriorProjects: Project[] = [
  { id: 12, name: "Exterior Development", description: "Exterior construction and improvement services designed to enhance both appearance and functionality.", image: "/gallery/12.webp" },
  { id: 13, name: "Landscaping Project", description: "Outdoor landscaping solutions that create attractive, functional, and welcoming environments.", image: "/gallery/13.jpg" },
  { id: 14, name: "Roofing Project", description: "Professional roofing solutions focused on durability, weather protection, and long-term performance.", image: "/gallery/14.jpg" },
  { id: 15, name: "Electrical Installation", description: "Safe and reliable electrical installation services for residential and commercial buildings.", image: "/gallery/15.jpg" },
  { id: 16, name: "Plumbing Installation", description: "Complete plumbing installation and maintenance solutions for modern building requirements.", image: "/gallery/16.jpg" },
  { id: 17, name: "Waterproofing Project", description: "Professional waterproofing solutions helping protect buildings from moisture and water damage.", image: "/gallery/17.jpg" },
  { id: 18, name: "Solar Installation", description: "Solar installation services providing sustainable and efficient energy solutions for buildings.", image: "/gallery/18.jpg" },
  { id: 19, name: "CCTV Installation", description: "Security camera installation solutions for improved monitoring of homes, offices, and commercial spaces.", image: "/gallery/19.jpg" },
  { id: 20, name: "Smart Home Setup", description: "Smart home technology integration designed to improve convenience, security, and energy efficiency.", image: "/gallery/20.jpg" },
];

const sections = [
  { title: "Construction Projects", items: constructionProjects },
  { title: "Interior & Renovation", items: interiorProjects },
  { title: "Exterior & Systems", items: exteriorProjects },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative h-72 w-full overflow-hidden rounded-xl shadow-md">
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <p className="mt-1 text-sm text-gray-200 leading-5">{project.description}</p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Ribbon
        name="Gallery"
        description="Explore Building Sewa's portfolio of construction, renovation, design, and building service projects across Nepal."
      />

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-16">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-6 text-2xl font-bold text-[#0E4541]">{section.title}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="relative my-12 flex h-[350px] w-full items-center justify-center text-white">
        <Image
          src="/gallery/1.jpg"
          alt="Building Sewa project"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Visit our FAQ page</h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-200">
            Get answers to common service questions save time and stay informed.
          </p>
          <Link
            href="/faq"
            className="inline-block rounded-full bg-[#0E4541] px-8 py-3 font-semibold text-white transition hover:bg-[#0B3936]"
          >
            View FAQ
          </Link>
        </div>
      </div>
    </main>
  );
}