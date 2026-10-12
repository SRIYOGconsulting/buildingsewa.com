import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import RoadBlock from "@/components/Roadblock";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Building Sewa",
  description: "Next Js Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >   
      <body className="min-h-full flex flex-col">
        <Navbar />
        <Header />
        <main className="flex-1">{children}</main>
         <FloatingContactButtons />
        <Footer />
        <CookieConsent />
        <RoadBlock />
      </body>
    </html>
  );
}
