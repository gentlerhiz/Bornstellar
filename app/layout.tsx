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
    "Bornstellar is building the systems that power Africa's growth across technology, infrastructure, energy, and industry. Through specialized divisions operating in coordination, we deliver world-class solutions that unlock opportunity and scale impact. In partnership with AFTRACON, we are committed to empowering Africans and advancing sustainable development across the continent.",
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
  metadataBase: new URL("https://www.bornstellarltd.com"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Bornstellar Limited — Future-ready solutions for Africa's growth",
    description:
      "Bornstellar is building the systems that power Africa's growth across technology, infrastructure, energy, and industry.",
    url: "https://www.bornstellarltd.com/",
    siteName: "Bornstellar Limited",
    images: [
      {
        url: "/favicon.png",
        alt: "Bornstellar Limited logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bornstellar Limited — Future-ready solutions for Africa's growth",
    description:
      "Bornstellar is building the systems that power Africa's growth across technology, infrastructure, energy, and industry.",
    images: ["/favicon.png"],
  },
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
