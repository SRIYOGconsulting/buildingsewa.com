"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ForgotPasswordPage() {
  const [identifier, setIdentifier] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = identifier.trim();

    if (!value) {
      setError("Email or phone number is required.");
      return;
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isPhone = /^9[678]\d{8}$/.test(value);

    if (!isEmail && !isPhone) {
      setError("Enter a valid email or 10-digit Nepal phone number.");
      return;
    }

    setError("");

    // Connect password recovery API here.
    console.log({
      identifier: value,
    });

    setSubmitted(true);
  };

  return (
    <main className="auth-page min-h-screen px-4 py-10 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-lg items-center">
        <div className="auth-card w-full rounded-2xl border p-7 shadow-xl sm:p-10">
          {!submitted ? (
            <>
              {/* Back to login */}
              <Link
                href="/login"
                className="text-sm font-semibold text-[#0D5D59] transition-opacity hover:opacity-75"
              >
                ← Back to login
              </Link>

              {/* Heading */}
              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0D5D59]">
                  Account recovery
                </p>

                <h1 className="text2 mt-3 text-3xl font-bold">
                  Forgot your password?
                </h1>

                <p className="text mt-3 leading-7">
                  Enter the email address or phone number associated with your
                  Building Sewa account.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="mt-8">
                <label
                  htmlFor="identifier"
                  className="text2 mb-2 block text-sm font-semibold"
                >
                  Email or Phone Number
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <input
                  id="identifier"
                  name="identifier"
                  type="text"
                  value={identifier}
                  onChange={(event) => {
                    setIdentifier(event.target.value);

                    if (error) {
                      setError("");
                    }
                  }}
                  placeholder="you@example.com or 98XXXXXXXX"
                  autoComplete="username"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "identifier-error" : undefined}
                  className={`auth-input rounded-lg px-4 py-3 ${
                    error ? "auth-error" : ""
                  }`}
                />

                {error && (
                  <p
                    id="identifier-error"
                    className="auth-error-message mt-1.5 text-sm"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-[#0D5D59] px-5 py-3.5 font-semibold text-white transition hover:bg-[#0E4541] hover:shadow-md"
                >
                  Continue
                </button>
              </form>

              {/* Login reminder */}
              <p className="text mt-6 text-center text-sm">
                Remember your password?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#0D5D59] hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </>
          ) : (
            /* Success state */
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0D5D59]/10 text-xl text-[#0D5D59]">
                ✓
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#0D5D59]">
                Account recovery
              </p>

              <h1 className="text2 mt-3 text-2xl font-bold">
                Check your account
              </h1>

              <p className="text mt-3 leading-7">
                If an account exists with the information provided, you will
                receive instructions to reset your password.
              </p>

              <p className="text mt-3 text-sm leading-6">
                Please check your email or phone for the password recovery
                instructions.
              </p>

              <Link
                href="/login"
                className="mt-7 inline-flex font-semibold text-[#0D5D59] transition-opacity hover:opacity-75"
              >
                Return to login →
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
