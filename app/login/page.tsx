"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormErrors = {
  identifier?: string;
  password?: string;
  form?: string;
};

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateIdentifier = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed) {
      return "Email or phone number is required.";
    }

    // Email validation
    if (trimmed.includes("@")) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(trimmed)) {
        return "Please enter a valid email address.";
      }

      return "";
    }

    // Nepal phone validation
    const phone = trimmed.replace(/\s+/g, "");

    if (!/^9[678]\d{8}$/.test(phone)) {
      return "Enter a valid Nepal phone number, e.g. 98XXXXXXXX.";
    }

    return "";
  };

  const validatePassword = (value: string) => {
    if (!value) {
      return "Password is required.";
    }

    if (value.length < 8) {
      return "Password must be at least 8 characters.";
    }

    return "";
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const identifierError = validateIdentifier(identifier);
    const passwordError = validatePassword(password);

    const newErrors: FormErrors = {};

    if (identifierError) {
      newErrors.identifier = identifierError;
    }

    if (passwordError) {
      newErrors.password = passwordError;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Temporary message until backend authentication is connected.
      setErrors({
        form: "Login validation passed. Connect your authentication API to complete sign in.",
      });
    } catch {
      setErrors({
        form: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-10 transition-colors duration-300 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1440px] items-center justify-center">
        <div className="grid w-full max-w-[1280px] overflow-hidden rounded-2xl border border-gray-200 bg-[var(--background)] shadow-xl dark:border-gray-700 lg:grid-cols-2">
          {/* LEFT - LOGIN FORM */}
          <section className="card flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="mx-auto w-full max-w-[560px]">
              {/* Brand */}
              <div className="mb-10">
                <Link
                  href="/"
                  className="inline-block text-2xl font-bold tracking-tight text-[#0D5D59] transition-opacity hover:opacity-80"
                >
                  Building Sewa
                </Link>
              </div>

              {/* Heading */}
              <div className="mb-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0D5D59]">
                  Welcome back
                </p>

                <h1 className="text2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Sign in to your account
                </h1>

                <p className="text mt-3 text-base leading-7">
                  Access your Building Sewa account to manage projects, service
                  requests, and professional connections.
                </p>
              </div>

              {/* Form-level error */}
              {errors.form && (
                <div
                  role="alert"
                  className="mb-6 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800 dark:border-amber-700 dark:bg-amber-950/30 dark:text-amber-200"
                >
                  {errors.form}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Email / Phone */}
                <div>
                  <label
                    htmlFor="identifier"
                    className="text2 mb-2 block text-sm font-semibold"
                  >
                    Email or phone number
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    id="identifier"
                    name="identifier"
                    type="text"
                    value={identifier}
                    onChange={(event) => {
                      setIdentifier(event.target.value);

                      if (errors.identifier || errors.form) {
                        setErrors((previous) => ({
                          ...previous,
                          identifier: undefined,
                          form: undefined,
                        }));
                      }
                    }}
                    placeholder="you@example.com or 98XXXXXXXX"
                    autoComplete="username"
                    aria-invalid={Boolean(errors.identifier)}
                    aria-describedby={
                      errors.identifier ? "identifier-error" : undefined
                    }
                    className={`w-full rounded-lg border bg-transparent px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#0D5D59] focus:ring-2 focus:ring-[#0D5D59]/15 dark:placeholder:text-gray-500 ${
                      errors.identifier
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  />

                  {errors.identifier && (
                    <p
                      id="identifier-error"
                      className="mt-2 text-sm text-red-500"
                    >
                      {errors.identifier}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <label
                      htmlFor="password"
                      className="text2 block text-sm font-semibold"
                    >
                      Password
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-sm font-medium text-[#0D5D59] transition-opacity hover:opacity-75"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);

                        if (errors.password || errors.form) {
                          setErrors((previous) => ({
                            ...previous,
                            password: undefined,
                            form: undefined,
                          }));
                        }
                      }}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      aria-invalid={Boolean(errors.password)}
                      aria-describedby={
                        errors.password ? "password-error" : undefined
                      }
                      className={`w-full rounded-lg border bg-transparent px-4 py-3.5 pr-16 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#0D5D59] focus:ring-2 focus:ring-[#0D5D59]/15 dark:placeholder:text-gray-500 ${
                        errors.password
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[#0D5D59] transition-opacity hover:opacity-75"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>

                  {errors.password && (
                    <p
                      id="password-error"
                      className="mt-2 text-sm text-red-500"
                    >
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-[#0D5D59] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0B514D] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </button>
              </form>

              {/* Create account */}
              <div className="mt-8 text-center">
                <p className="text text-sm">
                  Don't have a Building Sewa account?{" "}
                  <Link
                    href="/signup"
                    className="font-semibold text-[#0D5D59] transition-opacity hover:opacity-75"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* RIGHT - BUILDING SEWA MARKETPLACE INFORMATION  */}
          <section className="flex flex-col justify-center bg-[#0D5D59] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
            <div className="mx-auto w-full max-w-[600px]">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white/75">
                Building Sewa
              </p>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Build. Connect. Grow.
              </h2>

              <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg">
                Whether you need a construction professional or want to offer
                your expertise, Building Sewa helps connect the right people for
                construction and home-service needs.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-5">
                <Benefit>
                  Find construction and home-service professionals
                </Benefit>

                <Benefit>Manage your projects and service requests</Benefit>

                <Benefit>
                  Build a professional presence and reach customers
                </Benefit>
              </div>

              {/* Account Types */}
              <div className="mt-10 space-y-4">
                <Link
                  href="/signup/customer"
                  className="group block rounded-xl border border-white/20 bg-white px-5 py-5 text-[#0D5D59] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold">Join as a Customer</h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Find and connect with professionals for your project.
                      </p>
                    </div>

                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>

                <Link
                  href="/signup/professional"
                  className="group block rounded-xl border border-white/30 bg-white/10 px-5 py-5 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold">
                        Join as a Professional
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-white/80">
                        Showcase your expertise and connect with potential
                        customers.
                      </p>
                    </div>

                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </div>

              {/* Account explanation */}
              <p className="mt-6 text-center text-sm leading-6 text-white/70">
                Looking for construction or home services?{" "}
                <Link
                  href="/signup/customer"
                  className="font-semibold text-white underline-offset-4 hover:underline"
                >
                  Join as a Customer
                </Link>
                {" · "}
                Providing professional services?{" "}
                <Link
                  href="/signup/professional"
                  className="font-semibold text-white underline-offset-4 hover:underline"
                >
                  Join as a Professional
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/* 
   BENEFIT COMPONENT
*/

function Benefit({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white">
        ✓
      </span>

      <p className="text-sm leading-6 text-white/90 sm:text-base">{children}</p>
    </div>
  );
}
