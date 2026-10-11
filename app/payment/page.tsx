import Image from "next/image";
import Ribbon from "@/components/Ribbon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment | Building Sewa",
  description: "Payment details and options for Building Sewa services.",
};

const Payment = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Payment", path: "/payment" },
  ];

  return (
    <div>
      {/* Page Header */}
      <Ribbon name="Payment" />

      {/* Main Payment Section */}
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left: Bank Details */}
          <div className="card flex flex-col justify-center rounded-2xl border border-gray-200 p-6 shadow-sm transition-colors duration-300 sm:p-8 lg:p-10">
            <div className="mb-8">
              <Image
                width={600}
                height={800}
                src="/payment/logo.webp"
                alt="Sriyog Consulting Logo"
                className="mx-auto mb-5 w-56 object-contain sm:mx-0 sm:w-60"
              />

              <h2 className="text2 mb-2 text-2xl font-bold">
                Bank Account Details
              </h2>

              <p className="text leading-7">
                Use the following details to make your payment.
              </p>
            </div>

            <div className="space-y-5">
              <div className="border-b border-gray-200 pb-4">
                <p className="text mb-1 text-sm">Account Name</p>
                <p className="text2 text-lg font-semibold">
                  Sriyog Consulting Pvt Ltd.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text mb-1 text-sm">Account Number</p>
                <p className="text2 break-all text-lg font-semibold">
                  00701017502051
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text mb-1 text-sm">Branch</p>
                <p className="text2 text-lg font-semibold">Kathmandu</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text mb-1 text-sm">SWIFT Code</p>
                <p className="text2 text-lg font-semibold">NARBNPKA</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text mb-1 text-sm">Bank Website</p>
                <a
                  href="https://www.nabilbank.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#0D5D59] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
                >
                  www.nabilbank.com
                </a>
              </div>

              <div className="rounded-xl bg-[#0D5D59]/5 p-4">
                <p className="text mb-1 text-sm">VAT Number</p>
                <p className="text2 text-xl font-bold">606683203</p>
              </div>
            </div>
          </div>

          {/* Right: QR Code Section */}
          <div className="card flex flex-col items-center justify-center rounded-2xl border border-gray-200 p-5 shadow-sm transition-colors duration-300 sm:p-8">
            <div className="mb-5 text-center">
              <h2 className="text2 text-2xl font-bold">
                Scan to Pay
              </h2>

              <p className="text mt-2 leading-7">
                Scan the payment QR code using your supported banking app.
              </p>
            </div>

            <div className="relative w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 p-2">
              <Image
                width={600}
                height={800}
                src="/payment/payment.webp"
                alt="Payment QR"
                className="h-auto w-full rounded-lg object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;