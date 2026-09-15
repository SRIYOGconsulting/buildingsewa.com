import Image from "next/image";
import Ribbon from "@/components/Ribbon";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Residential Construction",
    description:
      "Complete residential construction services focused on quality, durability, and modern design.",
    image: "/gallery/1.jpg",
  },
  {
    id: 2,
    name: "Modern Home Design",
    description:
      "Modern architectural and construction solutions designed around the client's lifestyle and requirements.",
    image: "/gallery/2.jpg",
  },
  {
    id: 3,
    name: "Commercial Building",  
    description:
      "Professional commercial construction services delivering functional and durable spaces.",
    image: "/gallery/3.jpg",
  },
  {
    id: 4,
    name: "Interior Development",
    description:
      "Complete interior development with practical layouts, quality finishes, and modern aesthetics.",
    image: "/gallery/4.jpg",
  },
  {
    id: 5,
    name: "Renovation Project",
    description:
      "Renovation and remodeling solutions that improve the functionality and appearance of existing spaces.",
    image: "/gallery/5.jpg",
  },
  {
    id: 6,
    name: "Structural Construction",
    description:
      "Reliable structural construction services following professional engineering and safety standards.",
    image: "/gallery/6.jpg",
  },
  {
    id: 7,
    name: "Residential Interior",
    description:
      "Thoughtfully designed residential interiors combining comfort, functionality, and contemporary style.",
    image: "/gallery/7.jpg",
  },
  {
    id: 8,
    name: "Office Development",
    description:
      "Professional office spaces designed to create productive, comfortable, and efficient work environments.",
    image: "/gallery/8.jpg",
  },
  {
    id: 9,
    name: "Kitchen Design",
    description:
      "Custom kitchen planning and installation focused on functionality, storage, and modern aesthetics.",
    image: "/gallery/9.jpg",
  },
  {
    id: 10,
    name: "Bathroom Renovation",
    description:
      "Modern bathroom renovation solutions using practical layouts and quality finishing materials.",
    image: "/gallery/10.jpg",
  },
  {
    id: 11,
    name: "Building Finishing",
    description:
      "Professional finishing services that give buildings a polished, durable, and complete appearance.",
    image: "/gallery/11.jpg",
  },
  {
    id: 12,
    name: "Exterior Development",
    description:
      "Exterior construction and improvement services designed to enhance both appearance and functionality.",
    image: "/gallery/12.webp",
  },
  {
    id: 13,
    name: "Landscaping Project",
    description:
      "Outdoor landscaping solutions that create attractive, functional, and welcoming environments.",
    image: "/gallery/13.jpg",
  },
  {
    id: 14,
    name: "Roofing Project",
    description:
      "Professional roofing solutions focused on durability, weather protection, and long-term performance.",
    image: "/gallery/14.jpg",
  },
  {
    id: 15,
    name: "Electrical Installation",
    description:
      "Safe and reliable electrical installation services for residential and commercial buildings.",
    image: "/gallery/15.jpg",
  },
  {
    id: 16,
    name: "Plumbing Installation",
    description:
      "Complete plumbing installation and maintenance solutions for modern building requirements.",
    image: "/gallery/16.jpg",
  },
  {
    id: 17,
    name: "Waterproofing Project",
    description:
      "Professional waterproofing solutions helping protect buildings from moisture and water damage.",
    image: "/gallery/17.jpg",
  },
  {
    id: 18,
    name: "Solar Installation",
    description:
      "Solar installation services providing sustainable and efficient energy solutions for buildings.",
    image: "/gallery/18.jpg",
  },
  {
    id: 19,
    name: "CCTV Installation",
    description:
      "Security camera installation solutions for improved monitoring of homes, offices, and commercial spaces.",
    image: "/gallery/19.jpg",
  },
  {
    id: 20,
    name: "Smart Home Setup",
    description:
      "Smart home technology integration designed to improve convenience, security, and energy efficiency.",
    image: "/gallery/20.jpg",
  },
  
  {
    id: 21,
    name: "House Extension",
    description:
      "Building extension services that add useful living space while maintaining structural integrity.",
    image: "/gallery/22.jpg",
  },
  
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Ribbon
        name="Our Projects"
        description="Explore Building Sewa's portfolio of construction, renovation, design, and building service projects across Nepal."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-68 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h2 className="mb-3 text-xl font-semibold text-[#0E4541]">
                  {project.name}
                </h2>

                <p className="leading-7 text-gray-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
