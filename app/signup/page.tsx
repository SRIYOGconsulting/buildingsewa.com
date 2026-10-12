import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="auth-page min-h-screen px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center">
        <div className="auth-card w-full rounded-2xl border p-6 shadow-xl sm:p-10 lg:p-14">
          <div className="mx-auto max-w-3xl text-center">
            <Link href="/" className="text-2xl font-bold text-[#0D5D59]">
              Building Sewa
            </Link>

            <h1 className="text2 mt-8 text-3xl font-bold sm:text-4xl">
              Create your Building Sewa account
            </h1>

            <p className="text mt-3 leading-7">
              Choose how you want to use Building Sewa.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {/* CUSTOMER */}
            <Link
              href="/signup/customer"
              className="card group rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:border-[#0D5D59] hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D5D59]/10 text-xl text-[#0D5D59]">
                👤
              </div>

              <h2 className="text2 mt-6 text-2xl font-bold">
                Join as a Customer
              </h2>

              <p className="text mt-3 leading-7">
                You need construction, design, engineering, maintenance, or
                other professional services.
              </p>

              <ul className="text mt-6 space-y-3 text-sm">
                <li>✓ Request services</li>
                <li>✓ Connect with professionals</li>
                <li>✓ Manage your projects</li>
              </ul>

              <span className="mt-7 inline-flex font-semibold text-[#0D5D59]">
                Create Customer Account →
              </span>
            </Link>

            {/* PROFESSIONAL */}
            <Link
              href="/signup/professional"
              className="group rounded-2xl border border-[#0D5D59] bg-[#0D5D59] p-7 text-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-xl">
                🛠️
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Join as a Professional
              </h2>

              <p className="mt-3 leading-7 text-white/80">
                You provide construction, design, engineering, repair,
                maintenance, or other professional services.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-white/90">
                <li>✓ Create your professional profile</li>
                <li>✓ Showcase your expertise</li>
                <li>✓ Connect with potential customers</li>
              </ul>

              <span className="mt-7 inline-flex font-semibold">
                Register as Professional →
              </span>
            </Link>
          </div>

          <p className="text mt-10 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#0D5D59] hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
