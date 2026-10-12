"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Errors = {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  province?: string;
  district?: string;
  terms?: string;
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

export default function CustomerSignupPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    province: "",
    district: "",
    terms: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field: keyof typeof form, value: string | boolean) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const validate = () => {
    const nextErrors: Errors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!/^9[678]\d{8}$/.test(form.phone.trim())) {
      nextErrors.phone = "Enter a valid 10-digit Nepal phone number.";
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (form.password.length < 8) {
      nextErrors.password = "Password must contain at least 8 characters.";
    }

    if (form.password !== form.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    if (!form.province) {
      nextErrors.province = "Please select your province.";
    }

    if (form.district.trim().length < 2) {
      nextErrors.district = "Please enter your district or city.";
    }

    if (!form.terms) {
      nextErrors.terms = "You must agree to the terms and conditions.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Connect your customer registration API here.
      console.log(form);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="auth-page min-h-screen px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-4xl">
        <Link href="/signup" className="text-sm font-semibold text-[#0D5D59]">
          ← Back to account type
        </Link>

        <div className="auth-card mt-6 rounded-2xl border p-6 shadow-xl sm:p-10 lg:p-12">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#0D5D59]">
              Customer Account
            </span>

            <h1 className="text2 mt-2 text-3xl font-bold">
              Create your Customer account
            </h1>

            <p className="text mt-3 max-w-3xl leading-7">
              Start by creating your account. You can provide project and
              service details when you request a service.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-7">
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Full Name"
                value={form.name}
                onChange={(value) => update("name", value)}
                error={errors.name}
                placeholder="Your full name"
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
              />

              <Select
                label="Province"
                value={form.province}
                onChange={(value) => update("province", value)}
                error={errors.province}
                options={provinces}
                required
              />

              <Field
                label="District / City"
                value={form.district}
                onChange={(value) => update("district", value)}
                error={errors.district}
                placeholder="Kathmandu"
                required
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
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
                placeholder="Re-enter your password"
                type="password"
                required
              />
            </div>

            <div>
              <label className="text flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={form.terms}
                  onChange={(event) => update("terms", event.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#0D5D59]"
                />

                <span>
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
                </span>
              </label>

              {errors.terms && (
                <p className="auth-error-message mt-2 text-sm">
                  {errors.terms}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-[#0D5D59] px-5 py-3.5 font-semibold text-white transition hover:bg-[#0E4541] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Creating account..." : "Create Customer Account"}
            </button>
          </form>

          <p className="text mt-7 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#0D5D59]">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
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
        <option value="">Select province</option>

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
