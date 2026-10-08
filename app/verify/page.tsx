"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function VerifyPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!/^\d{6}$/.test(code)) {
      setError("Enter the 6-digit verification code.");
      return;
    }

    setError("");

    // Connect OTP verification API here.
    console.log({ code });
  };

  return (
    <main className="auth-page min-h-screen px-4 py-10 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-lg items-center">
        <div className="auth-card w-full rounded-2xl border p-7 text-center shadow-xl sm:p-10">
          <Link href="/" className="text-2xl font-bold text-[#0D5D59]">
            Building Sewa
          </Link>

          <h1 className="text2 mt-10 text-3xl font-bold">
            Verify your account
          </h1>

          <p className="text mt-3 leading-7">
            Enter the 6-digit verification code sent to your registered phone
            number or email.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8">
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={code}
              onChange={(event) =>
                setCode(event.target.value.replace(/\D/g, ""))
              }
              placeholder="000000"
              className={`auth-input rounded-lg px-4 py-3 text-center text-2xl tracking-[0.5em] ${
                error ? "auth-error" : ""
              }`}
            />

            {error && (
              <p className="auth-error-message mt-2 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-[#0D5D59] px-5 py-3.5 font-semibold text-white transition hover:bg-[#0E4541]"
            >
              Verify Account
            </button>
          </form>

          <button
            type="button"
            className="mt-5 text-sm font-semibold text-[#0D5D59] hover:underline"
          >
            Resend verification code
          </button>

          <p className="text mt-6 text-sm">
            <Link href="/login" className="font-semibold text-[#0D5D59]">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
