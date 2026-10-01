"use client";

import { FormEvent, useState } from "react";
import { bookService } from "@/lib/services";

type BookingFormProps = {
  serviceSlug: string;
  serviceName: string;
};

type BookingStatus = "idle" | "submitting" | "success" | "error";

export default function BookingForm({
  serviceSlug,
  serviceName,
}: BookingFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [notes, setNotes] = useState("");

  const [status, setStatus] = useState<BookingStatus>("idle");

  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setStatus("submitting");

      const result = await bookService({
        serviceSlug,
        name,
        phone,
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
    <div className="card rounded-xl p-6 shadow-md">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text2">Book This Service</h2>

        <p className="text-sm text mt-2">
          Request a booking for{" "}
          <span className="font-medium text2">{serviceName}</span>.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-lg border border-green-200 p-5">
          <h3 className="font-semibold text2">Booking Request Submitted</h3>

          <p className="text-sm text mt-2">{message}</p>

          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setMessage("");
            }}
            className="mt-5 rounded-lg bg-[#0E4541] px-5 py-2.5 text-sm font-medium text-white"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text2 mb-2"
            >
              Full Name
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

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text2 mb-2"
            >
              Phone Number
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

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text2 mb-2"
            >
              Service Address
            </label>

            <input
              id="address"
              type="text"
              required
              placeholder="Enter your address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className={inputStyles}
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text2 mb-2"
            >
              Preferred Date
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

          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text2 mb-2"
            >
              Additional Details <span className="text">(Optional)</span>
            </label>

            <textarea
              id="notes"
              rows={4}
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
            className="w-full rounded-lg bg-[#0E4541] py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer transition-colors duration-200"
          >
            {status === "submitting"
              ? "Submitting Request..."
              : "Request Booking"}
          </button>

          <p className="text-center text-xs text">
            Submitting this form currently creates a demo booking request.
          </p>
        </form>
      )}
    </div>
  );
}
