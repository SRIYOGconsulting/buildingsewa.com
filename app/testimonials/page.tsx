import type { Metadata } from "next";
import Image from "next/image";
import Ribbon from "@/components/Ribbon";

export const metadata: Metadata = {
  title: "Testimonials | Building Sewa",
  description:
    "Read what our clients say about their experience with Building Sewa.",
};

const testimonials = [
  {
    name: "Smarika Karki",
    image: "/testimonials/1.png",
    text: "I contacted Building Sewa for our construction project, and I am very satisfied with their service. Their team understood our requirements and guided us throughout the process.",
  },
  {
    name: "Gurpreet Singh",
    image: "/testimonials/2.png",
    text: "Building Sewa helped us with our renovation project. Their team was professional, easy to work with, and delivered the project with great attention to detail.",
  },
  {
    name: "Bikash Adhikari",
    image: "/testimonials/3.png",
    text: "The engineering service from Building Sewa was excellent. Their team provided practical solutions and helped us understand the technical requirements of our project.",
  },
  {
    name: "Sanjay Pandey",
    image: "/testimonials/4.png",
    text: "Building Sewa provided reliable construction support from planning to execution. Their team maintained good communication and paid attention to quality.",
  },
  {
    name: "Prakash Thapa",
    image: "/testimonials/5.png",
    text: "I was looking for professional support for my building project and Building Sewa made the process much easier. Their team provided useful guidance throughout the project.",
  },
  {
    name: "Dipesh Thapa",
    image: "/testimonials/6.png",
    text: "The interior design and finishing support from Building Sewa exceeded my expectations. They understood our preferences and helped create a practical space.",
  },
  {
    name: "Amit Poudel",
    image: "/testimonials/7.png",
    text: "Building Sewa provided excellent support for our residential project. Their team was responsive and professional throughout the planning and construction process.",
  },
  {
    name: "Niraj Bhandari",
    image: "/testimonials/8.png",
    text: "The team at Building Sewa helped us manage different aspects of our construction project efficiently. Their communication and technical knowledge made the experience easier.",
  },
  {
    name: "Kiran Basnet",
    image: "/testimonials/9.png",
    text: "Building Sewa provided comprehensive support for our property project. Their team helped us with planning and technical aspects while maintaining professional communication.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white mb-30">
      <Ribbon
        name="Testimonials"
        description="See what our clients have to say about their experience with Building Sewa and our construction, design, and engineering services."
      />

      {/* Testimonials */}
      <section className="px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="group bg-white flex flex-col justify-center items-center rounded-2xl sm:rounded-3xl min-h-[500px] p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                {/* Decorative circle */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#0E4541]/5 rounded-full translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-500" />

                {/* Quote icon */}
                <div className="absolute top-5 right-5 text-[#0E4541]/70">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Image */}
                <div className="relative z-10 mb-5 sm:mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={192}
                    height={192}
                    className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg border-4 border-white group-hover:border-[#E8F2F0] transition-all duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Name */}
                <h2 className="relative z-10 text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-center mb-4">
                  {testimonial.name}
                </h2>

                {/* Testimonial */}
                <p className="relative z-10 text-sm sm:text-base text-gray-600 leading-relaxed text-center italic">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}