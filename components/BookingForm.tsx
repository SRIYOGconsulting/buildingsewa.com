
"use client";

import { useState } from "react";
import { bookService } from "@/lib/services";
import type { Service } from "@/data/services";

type BookingFormProps = {
  services: Service[];
  selectedServiceSlug?: string;
};

type FormErrors = {
  service?: string;
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  preferredDate?: string;
};

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

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const inputStyles =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-[#0E4541] focus:ring-1 focus:ring-[#0E4541]";

  const errorStyles = "mt-1 text-sm text-red-600";

  const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Service
    if (!serviceSlug) {
      newErrors.service = "Please select a service.";
    }

    // Name
    const trimmedName = name.trim();

    if (!trimmedName) {
      newErrors.name = "Name is required.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    // Phone
    const trimmedPhone = phone.trim();

    if (!trimmedPhone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^9[678]\d{8}$/.test(trimmedPhone)) {
      newErrors.phone =
        "Please enter a valid 10-digit Nepal mobile number.";
    }

    // Email - optional
    const trimmedEmail = email.trim();

    if (
      trimmedEmail &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Address
    if (!address.trim()) {
      newErrors.address = "Address is required.";
    } else if (address.trim().length < 5) {
      newErrors.address = "Please enter a complete address.";
    }

    // Preferred date
    if (!preferredDate) {
      newErrors.preferredDate = "Please select a preferred date.";
    } else if (preferredDate < getToday()) {
      newErrors.preferredDate = "Please select today or a future date.";
    }

    return newErrors;
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setMessage("");

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await bookService({
        serviceSlug,
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim() || undefined,
        address: address.trim(),
        preferredDate,
        notes: notes.trim() || undefined,
      });

      if (result.success) {
        setMessage(result.message);

        setServiceSlug(selectedServiceSlug ?? "");
        setName("");
        setPhone("");
        setEmail("");
        setAddress("");
        setPreferredDate("");
        setNotes("");
        setErrors({});
      } else {
        setMessage(result.message);
      }
    } catch {
      setMessage(
        "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: undefined,
      }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card rounded-2xl p-6 shadow-md md:p-8"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text2 md:text-3xl">
          Book a Service
        </h2>

        <p className="mt-2 text text-sm leading-6 md:text-base">
          Fill in the details below and our team will contact you
          to confirm your booking.
        </p>
      </div>

      <div className="space-y-6">
        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-semibold text2"
          >
            Service <span className="text-red-600">*</span>
          </label>

          <select
            id="service"
            value={serviceSlug}
            onChange={(event) => {
              setServiceSlug(event.target.value);
              clearError("service");
            }}
            className={inputStyles}
          >
            <option value="">Select a service</option>

            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </select>

          {errors.service && (
            <p className={errorStyles}>{errors.service}</p>
          )}
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text2"
          >
            Full Name <span className="text-red-600">*</span>
          </label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              clearError("name");
            }}
            placeholder="Enter your full name"
            className={inputStyles}
          />

          {errors.name && (
            <p className={errorStyles}>{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text2"
          >
            Phone Number <span className="text-red-600">*</span>
          </label>

          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            value={phone}
            onChange={(event) => {
              const value = event.target.value.replace(/\D/g, "");

              if (value.length <= 10) {
                setPhone(value);
                clearError("phone");
              }
            }}
            placeholder="98XXXXXXXX"
            maxLength={10}
            className={inputStyles}
          />

          {errors.phone && (
            <p className={errorStyles}>{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text2"
          >
            Email <span className="text-xs font-normal text-gray-500">(Optional)</span>
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              clearError("email");
            }}
            placeholder="you@example.com"
            className={inputStyles}
          />

          {errors.email && (
            <p className={errorStyles}>{errors.email}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="mb-2 block text-sm font-semibold text2"
          >
            Service Address <span className="text-red-600">*</span>
          </label>

          <textarea
            id="address"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
              clearError("address");
            }}
            placeholder="Enter the location where the service is required"
            rows={3}
            className={inputStyles}
          />

          {errors.address && (
            <p className={errorStyles}>{errors.address}</p>
          )}
        </div>

        {/* Preferred Date */}
        <div>
          <label
            htmlFor="preferredDate"
            className="mb-2 block text-sm font-semibold text2"
          >
            Preferred Date <span className="text-red-600">*</span>
          </label>

          <input
            id="preferredDate"
            type="date"
            min={getToday()}
            value={preferredDate}
            onChange={(event) => {
              setPreferredDate(event.target.value);
              clearError("preferredDate");
            }}
            className={inputStyles}
          />

          {errors.preferredDate && (
            <p className={errorStyles}>
              {errors.preferredDate}
            </p>
          )}
        </div>

        {/* Notes */}
        <div>
          <label
            htmlFor="notes"
            className="mb-2 block text-sm font-semibold text2"
          >
            Additional Notes{" "}
            <span className="text-xs font-normal text-gray-500">
              (Optional)
            </span>
          </label>

          <textarea
            id="notes"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Tell us anything else about your requirements..."
            rows={4}
            className={inputStyles}
          />
        </div>

        {/* Message */}
        {message && (
          <div
            className={`rounded-lg p-4 text-sm ${
              message.includes("successfully")
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-[#0E4541] px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-teal-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Submit Booking"}
        </button>
      </div>
    </form>
  );
}

