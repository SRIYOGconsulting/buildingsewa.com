'use client';

import React from "react";
// import Ribbon from "../../components/Ribbon";
import Image from "next/image";

const Payment = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Payment", path: "/payment" },
  ];

  return (
    <div>

      {/* Page Header */}
      {/* <Ribbon name="Payment" showfont={false}/> */}

      {/* Main Payment Section */}
      <section className=" flex flex-col justify-center items-center px-4 sm:px-0 py-8 sm:py-10">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* ===== Left: Bank Details ===== */}
          <div className=" space-y-3 text-center lg:text-left">
            <Image
              width={600}
              height={800}
              src="/images/payment/image.webp"
              alt="Sriyog Consulting Logo"
              className="w-60 sm:w-56 mb-5 mx-auto lg:mx-0"
            />

            <p className="flex flex-col text-xl">
              <span>Account Name:</span> <span className="font-semibold">Sriyog Consulting Pvt Ltd.</span>
            </p>
            <p className="text-xl">
              Account number: 00701017502051
            </p>
            <p className="text-xl">
              Branch: Kathmandu
            </p>
            <p className="text-xl">
              SWIFT CODE: NARBNPKA
            </p>
            <p className="text-xl">
              URL:{" "}
              <a
                href="https://www.nabilbank.com"
                target="_blank"
                rel="noreferrer"
                className=" underline"
              >
                www.nabilbank.com
              </a>
            </p>
            <p className="pt-8 text-2xl ">
              VAT Number: 606683203
            </p>
          </div>

          {/* ===== Right: QR Code Section ===== */}
          <div className="card flex flex-col justify-center items-center border  rounded-3xl w-full max-w-sm mx-auto shadow-sm">
            {/* <img
              src="/images/payment/image.webp"
              alt="Sriyog Consulting Logo"
              className="w-48 sm:w-60 mb-4 object-contain"
            /> */}
           <Image
              width={600}
              height={800}
              src="/images/payment/image2.webp"
              alt="Payment QR"
              className="w-full h-full rounded-3xl object-contain "
            />

            {/* <div className="text-center  font-semibold space-y-2 text-sm sm:text-base">
              <p className="text-lg sm:text-xl">Sriyog Consulting Pvt Ltd.</p>
              <p>Account No: 00701017502051</p>
              <p>Branch: Kathmandu</p>
              <p>Bank: Nabil Bank Ltd.</p>

              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="flex items-center gap-2">
                  <img src="/icons/phone.svg" alt="Phone" className="w-4 h-4" />
                  <a href="tel:9779851160868">+977 9851160868</a>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/icons/email.svg" alt="Mail" className="w-4 h-4" />
                  <a href="mailto:info@sriyog.com.np">info@sriyog.com.np</a>
                </div>
              </div>

              <a
                href="https://www.sriyogconsulting.com"
                target="_blank"
                rel="noreferrer"
                className="underline block pt-2 font-medium"
              >
                www.sriyogconsulting.com
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
