import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { contactInfo } from "@/lib/contact";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || contactInfo.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AURA Audiology | Mobile Audiology Care in New York",
  description:
    "Premium mobile audiology care for homes, nursing homes, assisted living communities, and private concierge settings across New York.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AURA Audiology | Mobile Audiology Care in New York",
    description:
      "Expert hearing care brought to homes, nursing homes, assisted living communities, and private concierge settings.",
    url: siteUrl,
    siteName: contactInfo.businessName,
    images: ["/aura-logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
