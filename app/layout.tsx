import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bornstellar Limited — Future-ready solutions for Africa's growth",
  description:
    "Bornstellar is a multi-division African company delivering integrated technology, infrastructure, energy, manufacturing, and advisory solutions that power sustainable development across the continent.",
  keywords: [
    "Bornstellar",
    "Africa",
    "Nigeria",
    "technology",
    "infrastructure",
    "renewable energy",
    "agriculture",
    "consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
