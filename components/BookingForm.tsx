"use client";

import { FormEvent, useState } from "react";
import { bookService } from "@/lib/services";
import type { Service } from "@/data/services";

type BookingFormProps = {
  services: Service[];
  selectedServiceSlug?: string;
};

type BookingStatus = "idle" | "submitting" | "success" | "error";

export default function BookingForm({
  services,
  selectedServiceSlug,
}: BookingFormProps) {
  const [serviceSlug, setServiceSlug] = useState(
    selectedServiceSlug ?? ""
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [notes, setNotes] = useState("");

  const [status, setStatus] = useState<BookingStatus>("idle");
  const [message, setMessage] = useState("");

  const selectedService = services.find(
    (service) => service.slug === serviceSlug
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!serviceSlug) {
      setMessage("Please select a service.");
      setStatus("error");
      return;
    }

    try {
      setStatus("submitting");
      setMessage("");

      const result = await bookService({
        serviceSlug,
        name,
        phone,
        email,
        address,
        preferredDate,
        notes,
      });

      if (!result.success) {
        throw new Error("Booking failed");
      }

      setMessage(result.message);
      setStatus("success");

      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
      setPreferredDate("");
      setNotes("");
    } catch {
      setMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const inputStyles =
    "w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm text2 outline-none transition focus:border-[#0E4541]";

  return (
    <div className="card rounded-2xl p-6 shadow-md md:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text2">
          Booking Details
        </h2>

        <p className="mt-2 text-sm text">
          Fill in your details and submit your service booking request.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-lg border border-green-200 p-5">
          <h3 className="font-semibold text2">
            Booking Request Submitted
          </h3>

          <p className="mt-2 text-sm text">{message}</p>

          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setMessage("");
            }}
            className="mt-5 cursor-pointer rounded-lg bg-[#0E4541] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Service */}
          <div>
            <label
              htmlFor="service"
              className="mb-2 block text-sm font-medium text2"
            >
              Select Service *
            </label>

            <select
              id="service"
              required
              value={serviceSlug}
              onChange={(event) => setServiceSlug(event.target.value)}
              className={inputStyles}
            >
              <option value="">Select a service</option>

              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text2"
            >
              Full Name *
            </label>

            <input
              id="name"
              type="text"
              required
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={inputStyles}
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text2"
            >
              Phone Number *
            </label>

            <input
              id="phone"
              type="tel"
              required
              placeholder="Enter your phone number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className={inputStyles}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text2"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={inputStyles}
            />
          </div>

          {/* Selected Service */}
          {selectedService && (
            <div>
              <label
                htmlFor="selected-service"
                className="mb-2 block text-sm font-medium text2"
              >
                Selected Service
              </label>

              <input
                id="selected-service"
                type="text"
                value={selectedService.name}
                readOnly
                className={`${inputStyles} cursor-not-allowed opacity-80`}
              />
            </div>
          )}

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-medium text2"
            >
              Service Address *
            </label>

            <input
              id="address"
              type="text"
              required
              placeholder="Enter the address where service is required"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className={inputStyles}
            />
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="date"
              className="mb-2 block text-sm font-medium text2"
            >
              Preferred Date *
            </label>

            <input
              id="date"
              type="date"
              required
              min={new Date().toISOString().split("T")[0]}
              value={preferredDate}
              onChange={(event) => setPreferredDate(event.target.value)}
              className={inputStyles}
            />
          </div>

          {/* Notes */}
          <div>
            <label
              htmlFor="notes"
              className="mb-2 block text-sm font-medium text2"
            >
              Additional Details{" "}
              <span className="text">(Optional)</span>
            </label>

            <textarea
              id="notes"
              rows={5}
              placeholder="Tell us more about your requirements..."
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              className={`${inputStyles} resize-none`}
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-600">{message}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full cursor-pointer rounded-lg bg-[#0E4541] py-3 text-sm font-medium text-white transition-colors duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "submitting"
              ? "Submitting Request..."
              : "Request Booking"}
          </button>

          <p className="text-center text-xs text">
            Your booking request will be reviewed and our team may contact you
            to confirm availability, requirements, and pricing.
          </p>
        </form>
      )}
    </div>
  );
}