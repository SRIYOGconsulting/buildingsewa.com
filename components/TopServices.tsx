import Image from "next/image";

const topServices = [
  {
    title: "Architecture & House Design",
    description: "Custom architectural plans tailored to your site and vision.",
    img: "/home/topservices/1.jpg",
  },
  {
    title: "Electrical Services",
    description: "Safe, code-compliant electrical wiring and fixture installation.",
    img: "/home/topservices/2.jpg",
  },
  {
    title: "Interior Designing",
    description: "Detailed finishing work that brings your space to life.",
    img: "/home/topservices/3.jpg",
  },
];

export default function TopServices() {
  return (
    <section className="py-16 max-w-[1200px] mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Top Services
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {topServices.map((service) => (
          <div
            key={service.title}
            className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center text-center"
          >
            <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
              <Image
                src={service.img}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}