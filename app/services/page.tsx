import Image from "next/image";
import Ribbon from "@/components/Ribbon";

const services = [
  {
    name: "Land Survey & Site Inspection",
    image: 1,
    description:
      "Accurate boundary mapping and site assessment before you break ground.",
  },
  {
    name: "Soil Testing",
    image: 2,
    description:
      "Lab-based soil analysis to determine foundation type and load-bearing capacity.",
  },
  {
    name: "Architecture & House Design",
    image: 3,
    description:
      "Custom architectural plans tailored to your plot, budget, and lifestyle.",
  },
  {
    name: "Structural Engineering",
    image: 4,
    description:
      "Structural design and safety analysis for durable, code-compliant buildings.",
  },
  {
    name: "Building Approval & Documentation",
    image: 5,
    description:
      "End-to-end help with municipal permits and construction paperwork.",
  },
  {
    name: "Project Management",
    image: 6,
    description:
      "On-site coordination and scheduling to keep your build on track.",
  },
  {
    name: "Vaastu Consultation",
    image: 7,
    description: "Vaastu-compliant layout guidance for a harmonious home.",
  },
  {
    name: "Fencing",
    image: 8,
    description:
      "Boundary fencing solutions for security and property definition.",
  },
  {
    name: "Bhumi Pooja",
    image: 9,
    description:
      "Traditional ground-breaking ceremony arrangements before construction begins.",
  },
  {
    name: "Civil Construction",
    image: 10,
    description:
      "Full civil construction services from foundation to finishing.",
  },
  {
    name: "Materials Supply",
    image: 11,
    description:
      "Reliable sourcing and delivery of quality construction materials.",
  },
  {
    name: "Water Boring",
    image: 12,
    description: "Borewell drilling and groundwater access for your property.",
  },
  {
    name: "Plumbing",
    image: 13,
    description:
      "Complete plumbing installation and repair for homes and offices.",
  },
  {
    name: "Electrical Services",
    image: 14,
    description:
      "Safe, code-compliant electrical wiring and fixture installation.",
  },
  {
    name: "Truss Roofing",
    image: 15,
    description:
      "Durable truss roofing solutions built for Nepal\u2019s climate.",
  },
  {
    name: "Waterproofing",
    image: 16,
    description: "Leak-proofing treatments for roofs, walls, and basements.",
  },
  {
    name: "uPVC Doors & Windows",
    image: 17,
    description: "Energy-efficient uPVC doors and windows, custom fitted.",
  },
  {
    name: "Glass Works",
    image: 18,
    description:
      "Glass partitions, railings, and facades for modern interiors.",
  },
  {
    name: "Tiling",
    image: 19,
    description:
      "Precision tile installation for floors, walls, and bathrooms.",
  },
  {
    name: "Parqueting",
    image: 20,
    description: "Elegant wooden parquet flooring installation and finishing.",
  },
  {
    name: "Painting",
    image: 21,
    description:
      "Interior and exterior painting with premium, long-lasting finishes.",
  },
  {
    name: "Woodwork",
    image: 22,
    description:
      "Custom carpentry and woodwork for doors, frames, and fittings.",
  },
  {
    name: "Custom Furniture",
    image: 23,
    description: "Bespoke furniture designed and built to match your space.",
  },
  {
    name: "Modular Kitchen",
    image: 24,
    description: "Space-efficient modular kitchens with modern fittings.",
  },
  {
    name: "Bathroom Setup",
    image: 25,
    description: "Complete bathroom fitting, fixtures, and finishing.",
  },
  {
    name: "Interior Designing",
    image: 26,
    description: "Full interior design service from concept to execution.",
  },
  {
    name: "Wall Decoration",
    image: 27,
    description: "Decorative wall finishes, textures, and accent designs.",
  },
  {
    name: "Gardening & Landscaping",
    image: 28,
    description: "Landscape design and garden setup for outdoor spaces.",
  },
  {
    name: "Water Filter Setup",
    image: 29,
    description:
      "Installation of home water filtration and purification systems.",
  },
  {
    name: "AC Services",
    image: 30,
    description:
      "AC installation, servicing, and repair for year-round comfort.",
  },
  {
    name: "Electronics Setup (TV / Geyser / Fridge)",
    image: 31,
    description:
      "Professional setup and mounting of home appliances and electronics.",
  },
  {
    name: "CCTV Camera Installation",
    image: 32,
    description: "Home and office security camera installation and setup.",
  },
  {
    name: "Home Automation",
    image: 33,
    description:
      "Smart home automation for lighting, security, and appliances.",
  },
  {
    name: "Wi-Fi Access Point Installation",
    image: 34,
    description: "Reliable whole-home Wi-Fi coverage setup.",
  },
  {
    name: "Solar Panel Installation",
    image: 35,
    description: "Rooftop solar panel installation for sustainable energy.",
  },
  {
    name: "Car Porch & Garage Setup",
    image: 36,
    description: "Car porch and garage construction tailored to your property.",
  },
  {
    name: "EV Charger Installation",
    image: 37,
    description: "Home EV charging point installation for electric vehicles.",
  },
  {
    name: "Lift & Elevator Installation",
    image: 38,
    description: "Residential lift and elevator installation and servicing.",
  },
  {
    name: "Fire Safety Systems",
    image: 39,
    description:
      "Fire detection and safety system installation for your property.",
  },
  {
    name: "Griha Pravesh Puja",
    image: 40,
    description:
      "Traditional housewarming ceremony arrangements for your new home.",
  },
  {
    name: "Packing & Moving",
    image: 41,
    description: "Safe and efficient packing and moving services.",
  },
  {
    name: "Annual Home Maintenance",
    image: 42,
    description:
      "Scheduled upkeep and maintenance to keep your home in top shape.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative">
      <Ribbon
        name="Professional Building Services in Nepal"
        description="From site inspection to home automation one team for every stage of
          your property, across Nepal."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {services.map((service) => (
            <div
              key={service.name}
              className="card rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                height={600}
                width={800}
                src={`/services/${service.image}.jpg`}
                alt={service.name}
                className="w-full h-56 object-cover"
              />
              <div className="px-4 py-5 card2">
                <h2 className="text-lg font-medium">{service.name}</h2>
                <p className="card2 text-sm mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
