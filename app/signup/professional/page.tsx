"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Errors = Record<string, string>;

const provinces = [
  "Koshi Province",
  "Madhesh Province",
  "Bagmati Province",
  "Gandaki Province",
  "Lumbini Province",
  "Karnali Province",
  "Sudurpashchim Province",
];

const professions = [
  "Architect",
  "Civil Engineer",
  "Structural Engineer",
  "Electrical Engineer",
  "Interior Designer",
  "Contractor",
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "Mason",
  "Land Surveyor",
  "Construction Consultant",
  "Other",
];

const employmentTypes = [
  "Independent Professional",
  "Company / Firm",
  "Freelancer",
  "Partnership",
];

const idTypes = ["Citizenship", "Passport", "Driving License"];

const qualifications = [
  "School Level",
  "Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "Professional Certification",
  "Other",
];

export default function ProfessionalSignupPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",

    profession: "",
    primaryService: "",
    otherServices: "",
    experience: "",
    employmentType: "",
    bio: "",

    companyName: "",
    registrationStatus: "",
    registrationNumber: "",
    panVat: "",

    province: "",
    district: "",
    municipality: "",
    ward: "",
    address: "",
    serviceAreas: "",

    qualification: "",
    institution: "",
    certifications: "",
    licenseNumber: "",

    idType: "",
    idNumber: "",

    website: "",
    portfolio: "",
    facebook: "",
    instagram: "",
    linkedin: "",

    availability: "",
    workingHours: "",
    startingRate: "",
    pricingMethod: "",

    terms: false,
    accuracy: false,
  });

  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  const [idDocument, setIdDocument] = useState<File | null>(null);

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof typeof form, value: string | boolean) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const next: Errors = {};

    if (form.firstName.trim().length < 2) {
      next.firstName = "First name is required.";
    }

    if (form.lastName.trim().length < 2) {
      next.lastName = "Last name is required.";
    }

    if (!/^9[678]\d{8}$/.test(form.phone.trim())) {
      next.phone = "Enter a valid 10-digit Nepal phone number.";
    }

    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }

    if (form.password.length < 8) {
      next.password = "Password must contain at least 8 characters.";
    }

    if (form.password !== form.confirmPassword) {
      next.confirmPassword = "Passwords do not match.";
    }

    if (!form.profession) {
      next.profession = "Select your profession.";
    }

    if (form.primaryService.trim().length < 2) {
      next.primaryService = "Enter your primary service.";
    }

    if (!form.experience) {
      next.experience = "Select your experience.";
    }

    if (!form.employmentType) {
      next.employmentType = "Select your work type.";
    }

    if (form.bio.trim().length < 50) {
      next.bio = "Professional bio should contain at least 50 characters.";
    }

    if (!form.province) {
      next.province = "Select your province.";
    }

    if (form.district.trim().length < 2) {
      next.district = "Enter your district.";
    }

    if (form.municipality.trim().length < 2) {
      next.municipality = "Enter your municipality/city.";
    }

    if (form.address.trim().length < 5) {
      next.address = "Enter your full address.";
    }

    if (!form.qualification) {
      next.qualification = "Select your qualification.";
    }

    if (form.institution.trim().length < 2) {
      next.institution = "Enter your institution.";
    }

    if (!form.idType) {
      next.idType = "Select an identification document.";
    }

    if (form.idNumber.trim().length < 4) {
      next.idNumber = "Enter your identification number.";
    }

    if (!idDocument) {
      next.idDocument = "Please upload your identification document.";
    }

    if (!form.availability) {
      next.availability = "Select your availability.";
    }

    if (!form.terms) {
      next.terms = "You must agree to the Terms & Conditions.";
    }

    if (!form.accuracy) {
      next.accuracy = "Please confirm that the information is accurate.";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Connect your professional registration API here.
      console.log({
        ...form,
        profilePhoto,
        idDocument,
      });

      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="auth-page min-h-screen px-4 py-10 sm:px-6">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl items-center">
          <div className="auth-card w-full rounded-2xl border p-8 text-center shadow-xl sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0D5D59]/10 text-2xl text-[#0D5D59]">
              ✓
            </div>

            <h1 className="text2 mt-6 text-3xl font-bold">
              Application Submitted
            </h1>

            <p className="text mx-auto mt-4 max-w-xl leading-7">
              Thank you for joining Building Sewa. Your professional application
              has been submitted for verification.
            </p>

            <div className="auth-muted mx-auto mt-8 max-w-xl rounded-xl p-5 text-left">
              <p className="text2 font-semibold">Application Status</p>

              <div className="mt-3 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-amber-500" />
                <span className="text font-medium">Under Review</span>
              </div>

              <p className="text mt-3 text-sm leading-6">
                Our team will review your professional information and
                verification documents. You can sign in to your account while
                your application is being reviewed.
              </p>
            </div>

            <Link
              href="/login"
              className="mt-8 inline-flex rounded-lg bg-[#0D5D59] px-6 py-3 font-semibold text-white transition hover:bg-[#0E4541]"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="auth-page min-h-screen px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/signup" className="text-sm font-semibold text-[#0D5D59]">
          ← Back to account type
        </Link>

        <div className="auth-card mt-6 rounded-2xl border shadow-xl">
          {/* HEADER */}
          <div className="border-b border-gray-200 p-6 sm:p-10 lg:p-12">
            <span className="text-sm font-bold uppercase tracking-wider text-[#0D5D59]">
              Professional Registration
            </span>

            <h1 className="text2 mt-2 text-3xl font-bold sm:text-4xl">
              Join Building Sewa as a Professional
            </h1>

            <p className="text mt-3 max-w-4xl leading-7">
              Create your professional profile and provide accurate information
              about your experience, services and qualifications. Your
              information may be reviewed before your profile becomes available
              to customers.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="p-6 sm:p-10 lg:p-12"
          >
            {/* PERSONAL INFORMATION */}
            <Section
              number="01"
              title="Personal Information"
              description="Tell us about yourself."
            >
              <Field
                label="First Name"
                value={form.firstName}
                onChange={(value) => update("firstName", value)}
                error={errors.firstName}
                placeholder="First name"
                required
              />

              <Field
                label="Last Name"
                value={form.lastName}
                onChange={(value) => update("lastName", value)}
                error={errors.lastName}
                placeholder="Last name"
                required
              />

              <Field
                label="Phone Number"
                value={form.phone}
                onChange={(value) => update("phone", value)}
                error={errors.phone}
                placeholder="98XXXXXXXX"
                required
              />

              <Field
                label="Email Address"
                value={form.email}
                onChange={(value) => update("email", value)}
                error={errors.email}
                placeholder="you@example.com"
                type="email"
                required
              />

              <Field
                label="Date of Birth"
                value={form.dateOfBirth}
                onChange={(value) => update("dateOfBirth", value)}
                error={errors.dateOfBirth}
                placeholder="MM-DD-Year"
                type="date"
              />

              <Select
                label="Gender"
                value={form.gender}
                onChange={(value) => update("gender", value)}
                options={["Male", "Female", "Other", "Prefer not to say"]}
              />

              <FileField
                label="Profile Photo"
                file={profilePhoto}
                onChange={setProfilePhoto}
                accept="image/png,image/jpeg,image/webp"
              />
            </Section>

            {/* ACCOUNT */}
            <Section
              number="02"
              title="Account Security"
              description="Create your login credentials."
            >
              <Field
                label="Password"
                value={form.password}
                onChange={(value) => update("password", value)}
                error={errors.password}
                placeholder="At least 8 characters"
                type="password"
                required
              />

              <Field
                label="Confirm Password"
                value={form.confirmPassword}
                onChange={(value) => update("confirmPassword", value)}
                error={errors.confirmPassword}
                placeholder="Re-enter password"
                type="password"
                required
              />
            </Section>

            {/* PROFESSIONAL PROFILE */}
            <Section
              number="03"
              title="Professional Profile"
              description="Tell customers what you do and what services you provide."
            >
              <Select
                label="Profession"
                value={form.profession}
                onChange={(value) => update("profession", value)}
                error={errors.profession}
                options={professions}
                required
              />

              <Field
                label="Primary Service"
                value={form.primaryService}
                onChange={(value) => update("primaryService", value)}
                error={errors.primaryService}
                placeholder="e.g. House Design"
                required
              />

              <Field
                label="Other Services"
                value={form.otherServices}
                onChange={(value) => update("otherServices", value)}
                placeholder="e.g. 3D Design, Renovation"
              />

              <Select
                label="Years of Experience"
                value={form.experience}
                onChange={(value) => update("experience", value)}
                error={errors.experience}
                options={[
                  "Less than 1 year",
                  "1–2 years",
                  "3–5 years",
                  "6–10 years",
                  "11–15 years",
                  "16+ years",
                ]}
                required
              />

              <Select
                label="Work Type"
                value={form.employmentType}
                onChange={(value) => update("employmentType", value)}
                error={errors.employmentType}
                options={employmentTypes}
                required
              />

              <Textarea
                label="Professional Bio"
                value={form.bio}
                onChange={(value) => update("bio", value)}
                error={errors.bio}
                placeholder="Describe your professional experience, specialties and the type of projects you handle."
                required
              />
            </Section>

            {/* BUSINESS */}
            <Section
              number="04"
              title="Business Information"
              description="Provide your business or company information if applicable."
            >
              <Field
                label="Company / Firm Name"
                value={form.companyName}
                onChange={(value) => update("companyName", value)}
                placeholder="Company or firm name"
              />

              <Select
                label="Registration Status"
                value={form.registrationStatus}
                onChange={(value) => update("registrationStatus", value)}
                options={[
                  "Registered Business",
                  "Individual Professional",
                  "Not Registered",
                ]}
              />

              <Field
                label="Business Registration Number"
                value={form.registrationNumber}
                onChange={(value) => update("registrationNumber", value)}
                placeholder="Registration number"
              />

              <Field
                label="PAN / VAT Number"
                value={form.panVat}
                onChange={(value) => update("panVat", value)}
                placeholder="PAN / VAT number"
              />
            </Section>

            {/* LOCATION */}
            <Section
              number="05"
              title="Location & Service Area"
              description="Tell customers where you are located and where you provide services."
            >
              <Select
                label="Province"
                value={form.province}
                onChange={(value) => update("province", value)}
                error={errors.province}
                options={provinces}
                required
              />

              <Field
                label="District"
                value={form.district}
                onChange={(value) => update("district", value)}
                error={errors.district}
                placeholder="Kathmandu"
                required
              />

              <Field
                label="Municipality / City"
                value={form.municipality}
                onChange={(value) => update("municipality", value)}
                error={errors.municipality}
                placeholder="Kathmandu Metropolitan City"
                required
              />

              <Field
                label="Ward Number"
                value={form.ward}
                onChange={(value) => update("ward", value)}
                placeholder="Ward number"
              />

              <Field
                label="Full Address"
                value={form.address}
                onChange={(value) => update("address", value)}
                error={errors.address}
                placeholder="Your full business or working address"
                required
              />

              <Field
                label="Service Areas"
                value={form.serviceAreas}
                onChange={(value) => update("serviceAreas", value)}
                placeholder="e.g. Kathmandu, Lalitpur, Bhaktapur"
              />
            </Section>

            {/* QUALIFICATIONS */}
            <Section
              number="06"
              title="Qualifications & Experience"
              description="Add your educational and professional qualifications."
            >
              <Select
                label="Highest Qualification"
                value={form.qualification}
                onChange={(value) => update("qualification", value)}
                error={errors.qualification}
                options={qualifications}
                required
              />

              <Field
                label="Institution"
                value={form.institution}
                onChange={(value) => update("institution", value)}
                error={errors.institution}
                placeholder="College / university / institution"
                required
              />

              <Field
                label="Certifications"
                value={form.certifications}
                onChange={(value) => update("certifications", value)}
                placeholder="Relevant certifications"
              />

              <Field
                label="Professional License / Registration Number"
                value={form.licenseNumber}
                onChange={(value) => update("licenseNumber", value)}
                placeholder="If applicable"
              />
            </Section>

            {/* VERIFICATION */}
            <Section
              number="07"
              title="Identity Verification"
              description="Provide identification information for professional verification."
            >
              <Select
                label="Identification Type"
                value={form.idType}
                onChange={(value) => update("idType", value)}
                error={errors.idType}
                options={idTypes}
                required
              />

              <Field
                label="Identification Number"
                value={form.idNumber}
                onChange={(value) => update("idNumber", value)}
                error={errors.idNumber}
                placeholder="Enter document number"
                required
              />

              <FileField
                label="Identification Document"
                file={idDocument}
                onChange={setIdDocument}
                error={errors.idDocument}
                accept="image/png,image/jpeg,application/pdf"
                required
              />
            </Section>

            {/* PORTFOLIO */}
            <Section
              number="08"
              title="Portfolio & Online Presence"
              description="Help customers learn more about your work."
            >
              <Field
                label="Website"
                value={form.website}
                onChange={(value) => update("website", value)}
                placeholder="https://example.com"
              />

              <Field
                label="Portfolio URL"
                value={form.portfolio}
                onChange={(value) => update("portfolio", value)}
                placeholder="https://..."
              />

              <Field
                label="Facebook"
                value={form.facebook}
                onChange={(value) => update("facebook", value)}
                placeholder="Facebook profile/page"
              />

              <Field
                label="Instagram"
                value={form.instagram}
                onChange={(value) => update("instagram", value)}
                placeholder="@username"
              />

              <Field
                label="LinkedIn"
                value={form.linkedin}
                onChange={(value) => update("linkedin", value)}
                placeholder="LinkedIn profile"
              />
            </Section>

            {/* AVAILABILITY */}
            <Section
              number="09"
              title="Availability & Pricing"
              description="Tell customers when and how you normally work."
            >
              <Select
                label="Availability"
                value={form.availability}
                onChange={(value) => update("availability", value)}
                error={errors.availability}
                options={[
                  "Available for new projects",
                  "Available with advance notice",
                  "Currently unavailable",
                ]}
                required
              />

              <Field
                label="Working Hours"
                value={form.workingHours}
                onChange={(value) => update("workingHours", value)}
                placeholder="e.g. 9 AM – 5 PM"
              />

              <Field
                label="Starting Rate"
                value={form.startingRate}
                onChange={(value) => update("startingRate", value)}
                placeholder="Optional"
              />

              <Select
                label="Pricing Method"
                value={form.pricingMethod}
                onChange={(value) => update("pricingMethod", value)}
                options={[
                  "Fixed Price",
                  "Hourly",
                  "Per Project",
                  "Depends on Scope",
                ]}
              />
            </Section>

            {/* AGREEMENT */}
            <Section
              number="10"
              title="Agreement & Confirmation"
              description="Review your information before submitting your application."
            >
              <div className="space-y-4 md:col-span-2">
                <Checkbox
                  checked={form.terms}
                  onChange={(value) => update("terms", value)}
                  error={errors.terms}
                >
                  I agree to the{" "}
                  <Link href="/terms" className="font-semibold text-[#0D5D59]">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-[#0D5D59]"
                  >
                    Privacy Policy
                  </Link>
                  .
                </Checkbox>

                <Checkbox
                  checked={form.accuracy}
                  onChange={(value) => update("accuracy", value)}
                  error={errors.accuracy}
                >
                  I confirm that the information and documents provided are
                  accurate and belong to me or my business.
                </Checkbox>
              </div>
            </Section>

            <div className="mt-10 border-t border-gray-200 pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-[#0D5D59] px-6 py-4 font-semibold text-white transition hover:bg-[#0E4541] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Submitting Application..."
                  : "Submit Professional Application"}
              </button>

              <p className="text mt-4 text-center text-sm">
                Already have a Building Sewa account?{" "}
                <Link href="/login" className="font-semibold text-[#0D5D59]">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

/* Reusable Components */

function Section({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-gray-200 py-8 first:pt-0 last:border-b-0">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D5D59]/10 text-xs font-bold text-[#0D5D59]">
            {number}
          </span>

          <h2 className="text2 text-xl font-bold">{title}</h2>
        </div>

        <p className="text mt-2 ml-11 text-sm leading-6">{description}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">{children}</div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text2 mb-2 block text-sm font-semibold">
        {label}

        {required && <span className="auth-required ml-1">*</span>}
      </label>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`auth-input rounded-lg px-4 py-3 ${
          error ? "auth-error" : ""
        }`}
      />

      {error && <p className="auth-error-message mt-1.5 text-sm">{error}</p>}
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
  error,
  placeholder,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="md:col-span-2">
      <label className="text2 mb-2 block text-sm font-semibold">
        {label}

        {required && <span className="auth-required ml-1">*</span>}
      </label>

      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={5}
        className={`auth-textarea resize-none rounded-lg px-4 py-3 ${
          error ? "auth-error" : ""
        }`}
      />

      {error && <p className="auth-error-message mt-1.5 text-sm">{error}</p>}
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  error,
  options,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="text2 mb-2 block text-sm font-semibold">
        {label}

        {required && <span className="auth-required ml-1">*</span>}
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`auth-select rounded-lg px-4 py-3 ${
          error ? "auth-error" : ""
        }`}
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && <p className="auth-error-message mt-1.5 text-sm">{error}</p>}
    </div>
  );
}

function FileField({
  label,
  file,
  onChange,
  error,
  accept,
  required = false,
}: {
  label: string;
  file: File | null;
  onChange: (file: File | null) => void;
  error?: string;
  accept: string;
  required?: boolean;
}) {
  return (
    <div className="md:col-span-2">
      <label className="text2 mb-2 block text-sm font-semibold">
        {label}

        {required && <span className="auth-required ml-1">*</span>}
      </label>

      <input
        type="file"
        accept={accept}
        onChange={(event) => onChange(event.target.files?.[0] ?? null)}
        className="auth-file"
      />

      {file && <p className="text mt-2 text-sm">Selected: {file.name}</p>}

      {error && <p className="auth-error-message mt-1.5 text-sm">{error}</p>}
    </div>
  );
}

function Checkbox({
  checked,
  onChange,
  error,
  children,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text flex items-start gap-3 text-sm leading-6">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[#0D5D59]"
        />

        <span>{children}</span>
      </label>

      {error && (
        <p className="auth-error-message mt-1.5 ml-7 text-sm">{error}</p>
      )}
    </div>
  );
}
