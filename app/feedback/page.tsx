"use client";

import React, { useState } from "react";
import Ribbon from "@/components/Ribbon";

type ContactForm = {
  firstname: string;
  middlename: string;
  lastname: string;
  organization: string;
  designation: string;
  phone: string;
  email: string;
  country: string;
  headshot: File | null;
  service: string;
  message: string;
};

const initialFormData: ContactForm = {
  firstname: "",
  middlename: "",
  lastname: "",
  organization: "",
  designation: "",
  phone: "",
  email: "",
  country: "",
  headshot: null,
  service: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>(initialFormData);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    setFormData((prev) => ({
      ...prev,
      headshot: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Contact form submitted:", formData);

    setSubmitted(true);

    setFormData(initialFormData);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <Ribbon
        name="Contact Us"
        description="Get in touch with us. We would love to hear from you and discuss how we can help."
      />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 pt-10 pb-16">
        {/* Introduction */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 leading-7">
            Have a question, suggestion, or need assistance with our services?
            Fill out the form below and our team will get back to you.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-6 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-center text-green-700">
            Thank you for contacting us! Your message has been submitted
            successfully.
          </div>
        )}

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm"
        >
          {/* First Name */}
          <div className="flex flex-col">
            <label
              htmlFor="firstname"
              className="mb-2 font-medium text-gray-800"
            >
              First Name <span className="text-red-500">*</span>
            </label>

            <input
              id="firstname"
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Your First Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
            />
          </div>

          {/* Middle Name */}
          <div className="flex flex-col">
            <label
              htmlFor="middlename"
              className="mb-2 font-medium text-gray-800"
            >
              Middle Name
            </label>

            <input
              id="middlename"
              type="text"
              name="middlename"
              value={formData.middlename}
              onChange={handleChange}
              placeholder="Your Middle Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label
              htmlFor="lastname"
              className="mb-2 font-medium text-gray-800"
            >
              Last Name <span className="text-red-500">*</span>
            </label>

            <input
              id="lastname"
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Your Last Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label htmlFor="country" className="mb-2 font-medium text-gray-800">
              Country <span className="text-red-500">*</span>
            </label>

            <input
              id="country"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Your Country"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
            />
          </div>

          {/* Organization */}
          <div className="flex flex-col">
            <label
              htmlFor="organization"
              className="mb-2 font-medium text-gray-800"
            >
              Organization <span className="text-red-500">*</span>
            </label>

            <input
              id="organization"
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Organization Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
            />
          </div>

          {/* Designation */}
          <div className="flex flex-col">
            <label
              htmlFor="designation"
              className="mb-2 font-medium text-gray-800"
            >
              Designation <span className="text-red-500">*</span>
            </label>

            <input
              id="designation"
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Your Designation"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 font-medium text-gray-800">
              Phone <span className="text-red-500">*</span>
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium text-gray-800">
              Email <span className="text-red-500">*</span>
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
            />
          </div>

          {/* Headshot */}
          <div className="flex flex-col">
            <label
              htmlFor="headshot"
              className="mb-2 font-medium text-gray-800"
            >
              Headshot
            </label>

            <input
              id="headshot"
              type="file"
              name="headshot"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full h-[50px] px-3 py-2 border border-gray-300 rounded-md
                file:border-none
                file:mr-3
                file:py-1
                file:px-3
                file:rounded-md
                file:cursor-pointer
                file:bg-red-50
                file:text-red-600
                file:hover:bg-red-100
                focus:ring-2
                focus:ring-teal-700
                focus:outline-none"
            />
          </div>

          {/* Service */}
          <div className="flex flex-col">
            <label htmlFor="service" className="mb-2 font-medium text-gray-800">
              Service <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="appearance-none w-full h-[50px] px-4 pr-10 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-teal-700 focus:outline-none"
              >
                <option value="">Select a service</option>

                <option value="Website Development">Website Development</option>

                <option value="Mobile App Development">
                  Mobile App Development
                </option>

                <option value="Social Media Marketing">
                  Social Media Marketing
                </option>

                <option value="SEO & Digital Marketing">
                  SEO & Digital Marketing
                </option>

                <option value="IT Consultation">IT Consultation</option>
              </select>

              {/* Dropdown Icon */}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#4b4b4b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="message" className="mb-2 font-medium text-gray-800">
              Message <span className="text-red-500">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={6}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-teal-700 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center pt-3">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
