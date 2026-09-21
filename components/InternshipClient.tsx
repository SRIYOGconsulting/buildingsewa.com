"use client";

import { FormEvent, useState } from "react";
import Ribbon from "@/components/Ribbon";

const categories = [
  {
    title: "Civil Engineering & Site Supervision",
    description:
      "Assist with site inspections, structural checks, and on-ground project coordination.",
    icon: "🏗️",
  },
  {
    title: "Architecture & Design",
    description:
      "Work on house designs, floor plans, and 3D visualizations with our design team.",
    icon: "📐",
  },
  {
    title: "Interior Design",
    description:
      "Help design and plan interiors, material selection, and space planning for client homes.",
    icon: "🛋️",
  },
  {
    title: "Project Management",
    description:
      "Support scheduling, vendor coordination, and project tracking.",
    icon: "📋",
  },
  {
    title: "Web & Software Development",
    description:
      "Work on web applications, digital platforms, and technology solutions.",
    icon: "💻",
  },
  {
    title: "Digital Marketing",
    description:
      "Support content creation, social media, and digital marketing activities.",
    icon: "📣",
  },
];

export default function Internship() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Backend / Airtable integration can be added later.
    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Ribbon
        name="Internship at Building Sewa"
        description="Explore internship opportunities and gain practical experience while working on real projects."
      />

      {/* Internship Categories */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">
          Internship Categories
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Choose the area that matches your academic background, interests,
          and skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-gray-200 p-6 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mb-4 text-xl">
                {cat.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {cat.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Apply for an Internship
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete the application form with your personal, academic,
              and internship preference details.
            </p>
          </div>

          {submitted && (
            <div className="mb-8 rounded-lg border border-green-200 bg-green-50 px-5 py-4 text-green-700">
              <h3 className="font-semibold mb-1">
                Application submitted successfully!
              </h3>

              <p className="text-sm">
                Thank you for your interest in an internship with Building
                Sewa. We will review your application and get back to you.
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8"
          >
            {/* Personal Information */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current City / Location *
                  </label>

                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g. Kathmandu"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Education
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    College / University *
                  </label>

                  <input
                    type="text"
                    name="college"
                    required
                    placeholder="Enter your college or university"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Degree / Program *
                  </label>

                  <input
                    type="text"
                    name="degree"
                    required
                    placeholder="e.g. BIM, BE Civil, B.Arch"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Semester / Year *
                  </label>

                  <input
                    type="text"
                    name="semester"
                    required
                    placeholder="e.g. 6th Semester"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Graduation Year
                  </label>

                  <input
                    type="number"
                    name="graduationYear"
                    placeholder="e.g. 2027"
                    min="2020"
                    max="2100"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>
              </div>
            </div>

            {/* Internship Preferences */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Internship Preferences
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Internship Category *
                  </label>

                  <select
                    name="category"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>

                    {categories.map((cat) => (
                      <option key={cat.title} value={cat.title}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Duration *
                  </label>

                  <select
                    name="duration"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  >
                    <option value="" disabled>
                      Select duration
                    </option>
                    <option value="1 Month">1 Month</option>
                    <option value="2 Months">2 Months</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Work Mode *
                  </label>

                  <select
                    name="workMode"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  >
                    <option value="" disabled>
                      Select work mode
                    </option>
                    <option value="On-site">On-site</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Available Start Date *
                  </label>

                  <input
                    type="date"
                    name="startDate"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Skills & Experience
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Skills *
                  </label>

                  <input
                    type="text"
                    name="skills"
                    required
                    placeholder="e.g. AutoCAD, Revit, Next.js, Photoshop"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Software / Tools You Know
                  </label>

                  <input
                    type="text"
                    name="tools"
                    placeholder="e.g. AutoCAD, Revit, Figma, Git, VS Code"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Projects or Experience
                  </label>

                  <textarea
                    name="experience"
                    rows={4}
                    placeholder="Briefly describe any relevant projects, training, or experience."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio / GitHub / LinkedIn
                  </label>

                  <input
                    type="url"
                    name="portfolio"
                    placeholder="https://..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>
              </div>
            </div>

            {/* Application Questions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Application Details
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to intern with Building Sewa? *
                  </label>

                  <textarea
                    name="whyBuildingSewa"
                    required
                    rows={5}
                    placeholder="Tell us why you are interested in this internship."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What do you hope to learn during the internship? *
                  </label>

                  <textarea
                    name="learningGoals"
                    required
                    rows={5}
                    placeholder="Tell us about your learning goals."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Anything else you would like us to know?"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 rounded-lg bg-teal-700 text-white font-semibold hover:bg-teal-800 transition-colors duration-200"
              >
                Submit Internship Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}