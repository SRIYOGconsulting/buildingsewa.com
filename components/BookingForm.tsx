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
  propertyType?: string;
  province?: string;
  district?: string;
  address?: string;
  preferredDate?: string;
  preferredTime?: string;
  budget?: string;
  projectDetails?: string;
};

const provinces = [
  "Koshi Province",
  "Madhesh Province",
  "Bagmati Province",
  "Gandaki Province",
  "Lumbini Province",
  "Karnali Province",
  "Sudurpashchim Province",
];

const propertyTypes = [
  "House",
  "Apartment",
  "Office",
  "Commercial Building",
  "Land",
  "Other",
];

const timeSlots = [
  "Morning (8 AM - 12 PM)",
  "Afternoon (12 PM - 4 PM)",
  "Evening (4 PM - 7 PM)",
];

const budgetRanges = [
  "Below NPR 50,000",
  "NPR 50,000 - 1 Lakh",
  "NPR 1 Lakh - 5 Lakhs",
  "NPR 5 Lakhs - 10 Lakhs",
  "NPR 10 Lakhs - 25 Lakhs",
  "NPR 25 Lakhs - 50 Lakhs",
  "Above NPR 50 Lakhs",
  "Not sure yet",
];

export default function BookingForm({
  services,
  selectedServiceSlug,
}: BookingFormProps) {
  const [serviceSlug, setServiceSlug] = useState(selectedServiceSlug ?? "");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [propertyType, setPropertyType] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");

  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  const [budget, setBudget] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const [siteVisit, setSiteVisit] = useState(false);
  const [urgentService, setUrgentService] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  /*
   * Theme-aware input styling.
   *
   * Light mode:
   *   White background
   *
   * Dark mode:
   *   Global CSS controls the background/color through
   *   body.dark input, body.dark textarea and body.dark select.
   */
  const inputStyles =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition duration-200 placeholder:text-gray-400 focus:border-[#0E4541] focus:ring-2 focus:ring-[#0E4541]/10";

  const labelStyles = "mb-2 block text-sm font-semibold text2";

  const errorStyles = "mt-1.5 text-xs font-medium text-red-600";

  const getToday = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    /*
     * Service
     */
    if (!serviceSlug) {
      newErrors.service = "Please select a service.";
    } else if (!services.some((service) => service.slug === serviceSlug)) {
      newErrors.service = "Please select a valid service.";
    }

    /*
     * Full Name
     */
    const trimmedName = name.trim();

    if (!trimmedName) {
      newErrors.name = "Full name is required.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (trimmedName.length > 80) {
      newErrors.name = "Name must be less than 80 characters.";
    } else if (!/^[A-Za-zÀ-ÿ\u0900-\u097F\s.'-]+$/.test(trimmedName)) {
      newErrors.name = "Please enter a valid name.";
    }

    /*
     * Phone
     */
    const trimmedPhone = phone.trim();

    if (!trimmedPhone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^9[678]\d{8}$/.test(trimmedPhone)) {
      newErrors.phone = "Please enter a valid 10-digit Nepal mobile number.";
    }

    /*
     * Email
     *
     * Optional, but validated when entered.
     */
    const trimmedEmail = email.trim();

    if (trimmedEmail) {
      if (trimmedEmail.length > 120) {
        newErrors.email = "Email must be less than 120 characters.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    /*
     * Property Type
     */
    if (!propertyType) {
      newErrors.propertyType = "Please select a property type.";
    }

    /*
     * Province
     */
    if (!province) {
      newErrors.province = "Please select your province.";
    }

    /*
     * District / City
     */
    const trimmedDistrict = district.trim();

    if (!trimmedDistrict) {
      newErrors.district = "District or city is required.";
    } else if (trimmedDistrict.length < 2) {
      newErrors.district = "Please enter a valid district or city.";
    } else if (trimmedDistrict.length > 80) {
      newErrors.district = "District or city must be less than 80 characters.";
    }

    /*
     * Address
     */
    const trimmedAddress = address.trim();

    if (!trimmedAddress) {
      newErrors.address = "Service address is required.";
    } else if (trimmedAddress.length < 5) {
      newErrors.address = "Please enter a complete service address.";
    } else if (trimmedAddress.length > 300) {
      newErrors.address = "Address must be less than 300 characters.";
    }

    /*
     * Preferred Date
     */
    if (!preferredDate) {
      newErrors.preferredDate = "Please select a preferred date.";
    } else if (preferredDate < getToday()) {
      newErrors.preferredDate = "Please select today or a future date.";
    }

    /*
     * Preferred Time
     */
    if (!preferredTime) {
      newErrors.preferredTime = "Please select your preferred time.";
    }

    /*
     * Budget
     */
    if (!budget) {
      newErrors.budget = "Please select an estimated budget.";
    }

    /*
     * Project Details
     */
    const trimmedDetails = projectDetails.trim();

    if (!trimmedDetails) {
      newErrors.projectDetails =
        "Please describe your project or requirements.";
    } else if (trimmedDetails.length < 15) {
      newErrors.projectDetails =
        "Please provide at least 15 characters about your requirement.";
    } else if (trimmedDetails.length > 1500) {
      newErrors.projectDetails =
        "Project details must be less than 1500 characters.";
    }

    return newErrors;
  };

  const clearError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: undefined,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage("");

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      /*
       * Keep the existing bookService() API.
       *
       * The additional marketplace information is combined
       * into the existing notes field so the backend does not
       * need to be changed immediately.
       */
      const bookingNotes = [
        `Property Type: ${propertyType}`,
        `Province: ${province}`,
        `District/City: ${district.trim()}`,
        `Preferred Time: ${preferredTime}`,
        `Estimated Budget: ${budget}`,
        `Site Visit Required: ${siteVisit ? "Yes" : "No"}`,
        `Urgent Service: ${urgentService ? "Yes" : "No"}`,
        "",
        "Project Requirements:",
        projectDetails.trim(),
      ].join("\n");

      const result = await bookService({
        serviceSlug,
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim() || undefined,
        address: address.trim(),
        preferredDate,
        notes: bookingNotes,
      });

      if (result.success) {
        setMessage(result.message);

        /*
         * Reset form
         */
        setServiceSlug(selectedServiceSlug ?? "");
        setName("");
        setPhone("");
        setEmail("");
        setPropertyType("");
        setProvince("");
        setDistrict("");
        setAddress("");
        setPreferredDate("");
        setPreferredTime("");
        setBudget("");
        setProjectDetails("");
        setSiteVisit(false);
        setUrgentService(false);
        setErrors({});
      } else {
        setMessage(result.message);
      }
    } catch {
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card rounded-3xl border border-gray-200 p-6 shadow-xl md:p-10"
    >
      {/* =====================================================
          SERVICE INFORMATION
      ====================================================== */}

      <div className="mb-7">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0E4541] text-sm font-bold text-white">
            1
          </span>

          <div>
            <h2 className="text2 text-lg font-bold md:text-xl">
              Service Information
            </h2>

            <p className="text mt-0.5 text-sm">
              Select the service and property type.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2">
        {/* Service */}
        <div>
          <label htmlFor="service" className={labelStyles}>
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
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">Select a service</option>

            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </select>

          {errors.service && <p className={errorStyles}>{errors.service}</p>}
        </div>

        {/* Property Type */}
        <div>
          <label htmlFor="propertyType" className={labelStyles}>
            Property Type <span className="text-red-600">*</span>
          </label>

          <select
            id="propertyType"
            value={propertyType}
            onChange={(event) => {
              setPropertyType(event.target.value);
              clearError("propertyType");
            }}
            className={inputStyles}
            aria-invalid={Boolean(errors.propertyType)}
          >
            <option value="">Select property type</option>

            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {errors.propertyType && (
            <p className={errorStyles}>{errors.propertyType}</p>
          )}
        </div>
      </div>

      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}

      <div className="mb-7 mt-12">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0E4541] text-sm font-bold text-white">
            2
          </span>

          <div>
            <h2 className="text2 text-lg font-bold md:text-xl">
              Contact Information
            </h2>

            <p className="text mt-0.5 text-sm">
              Provide your contact and service location.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className={labelStyles}>
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
            maxLength={80}
            autoComplete="name"
            className={inputStyles}
            aria-invalid={Boolean(errors.name)}
          />

          {errors.name && <p className={errorStyles}>{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelStyles}>
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
            autoComplete="tel"
            className={inputStyles}
            aria-invalid={Boolean(errors.phone)}
          />

          {errors.phone && <p className={errorStyles}>{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelStyles}>
            Email Address{" "}
            <span className="text-xs font-normal text-gray-500">
              (Optional)
            </span>
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
            maxLength={120}
            autoComplete="email"
            className={inputStyles}
            aria-invalid={Boolean(errors.email)}
          />

          {errors.email && <p className={errorStyles}>{errors.email}</p>}
        </div>

        {/* Province */}
        <div>
          <label htmlFor="province" className={labelStyles}>
            Province <span className="text-red-600">*</span>
          </label>

          <select
            id="province"
            value={province}
            onChange={(event) => {
              setProvince(event.target.value);
              clearError("province");
            }}
            className={inputStyles}
            aria-invalid={Boolean(errors.province)}
          >
            <option value="">Select province</option>

            {provinces.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          {errors.province && <p className={errorStyles}>{errors.province}</p>}
        </div>

        {/* District */}
        <div>
          <label htmlFor="district" className={labelStyles}>
            District / City <span className="text-red-600">*</span>
          </label>

          <input
            id="district"
            type="text"
            value={district}
            onChange={(event) => {
              setDistrict(event.target.value);
              clearError("district");
            }}
            placeholder="e.g. Kathmandu"
            maxLength={80}
            autoComplete="address-level2"
            className={inputStyles}
            aria-invalid={Boolean(errors.district)}
          />

          {errors.district && <p className={errorStyles}>{errors.district}</p>}
        </div>

        {/* Full Address */}
        <div>
          <label htmlFor="address" className={labelStyles}>
            Full Service Address <span className="text-red-600">*</span>
          </label>

          <input
            id="address"
            type="text"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
              clearError("address");
            }}
            placeholder="Street, area, landmark..."
            maxLength={300}
            autoComplete="street-address"
            className={inputStyles}
            aria-invalid={Boolean(errors.address)}
          />

          {errors.address && <p className={errorStyles}>{errors.address}</p>}
        </div>
      </div>

      {/* =====================================================
          PROJECT DETAILS
      ====================================================== */}

      <div className="mb-7 mt-12">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0E4541] text-sm font-bold text-white">
            3
          </span>

          <div>
            <h2 className="text2 text-lg font-bold md:text-xl">
              Project Details
            </h2>

            <p className="text mt-0.5 text-sm">
              Tell us when you need the service and about your project.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2">
        {/* Preferred Date */}
        <div>
          <label htmlFor="preferredDate" className={labelStyles}>
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
            aria-invalid={Boolean(errors.preferredDate)}
          />

          {errors.preferredDate && (
            <p className={errorStyles}>{errors.preferredDate}</p>
          )}
        </div>

        {/* Preferred Time */}
        <div>
          <label htmlFor="preferredTime" className={labelStyles}>
            Preferred Time <span className="text-red-600">*</span>
          </label>

          <select
            id="preferredTime"
            value={preferredTime}
            onChange={(event) => {
              setPreferredTime(event.target.value);
              clearError("preferredTime");
            }}
            className={inputStyles}
            aria-invalid={Boolean(errors.preferredTime)}
          >
            <option value="">Select preferred time</option>

            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>

          {errors.preferredTime && (
            <p className={errorStyles}>{errors.preferredTime}</p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className={labelStyles}>
            Estimated Budget <span className="text-red-600">*</span>
          </label>

          <select
            id="budget"
            value={budget}
            onChange={(event) => {
              setBudget(event.target.value);
              clearError("budget");
            }}
            className={inputStyles}
            aria-invalid={Boolean(errors.budget)}
          >
            <option value="">Select budget range</option>

            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>

          {errors.budget && <p className={errorStyles}>{errors.budget}</p>}
        </div>

        {/* Site Visit */}
        <div>
          <label className={labelStyles}>Do you need a site visit?</label>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setSiteVisit(true)}
              className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                siteVisit
                  ? "border-[#0E4541] bg-[#0E4541] text-white"
                  : "border-gray-300 bg-white text2 hover:border-[#0E4541]"
              }`}
            >
              Yes
            </button>

            <button
              type="button"
              onClick={() => setSiteVisit(false)}
              className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                !siteVisit
                  ? "border-[#0E4541] bg-[#0E4541] text-white"
                  : "border-gray-300 bg-white text2 hover:border-[#0E4541]"
              }`}
            >
              No
            </button>
          </div>
        </div>

        {/* Project Description */}
        <div className="md:col-span-2">
          <label htmlFor="projectDetails" className={labelStyles}>
            Tell Us About Your Project <span className="text-red-600">*</span>
          </label>

          <textarea
            id="projectDetails"
            value={projectDetails}
            onChange={(event) => {
              setProjectDetails(event.target.value);
              clearError("projectDetails");
            }}
            placeholder="Describe your project, requirements, approximate size, construction stage, design requirements, or anything else our team should know..."
            rows={6}
            maxLength={1500}
            className={`${inputStyles} resize-y`}
            aria-invalid={Boolean(errors.projectDetails)}
          />

          <div className="mt-1 flex justify-between text-xs text-gray-400">
            <span>Minimum 15 characters</span>

            <span>{projectDetails.length}/1500</span>
          </div>

          {errors.projectDetails && (
            <p className={errorStyles}>{errors.projectDetails}</p>
          )}
        </div>

        {/* Urgent Service */}
        <div className="md:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-[#0E4541] dark:border-gray-700">
            <input
              type="checkbox"
              checked={urgentService}
              onChange={(event) => setUrgentService(event.target.checked)}
              className="mt-1 h-4 w-4 accent-[#0E4541]"
            />

            <span>
              <span className="text2 block text-sm font-semibold">
                I need this service urgently
              </span>

              <span className="text mt-1 block text-xs leading-5">
                Let our team know if you need faster assistance than your
                selected schedule.
              </span>
            </span>
          </label>
        </div>

        {/* =================================================
            MESSAGE
        ================================================== */}

        {message && (
          <div
            className={`md:col-span-2 rounded-xl border p-4 text-sm leading-6 ${
              message.toLowerCase().includes("success")
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
            role="status"
          >
            {message}
          </div>
        )}

        {/* =================================================
            SUBMIT
        ================================================== */}

        <div className="md:col-span-2 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0E4541] px-6 py-4 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b3936] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Submitting Booking...
              </>
            ) : (
              <>
                Submit Booking
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </>
            )}
          </button>

          <p className="mt-3 text-center text-xs leading-5 text-gray-500">
            Our team will review your request and contact you to confirm the
            service details and schedule.
          </p>
        </div>
      </div>
    </form>
  );
}
