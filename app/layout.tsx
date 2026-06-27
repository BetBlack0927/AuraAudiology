import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AURA Audiology | Concierge Mobile Audiology in New York",
  description:
    "Premium mobile audiology care for homes, nursing homes, assisted living communities, and private concierge settings across New York.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AURA Audiology | Concierge Mobile Audiology in New York",
    description:
      "Expert hearing care brought to homes, nursing homes, assisted living communities, and private concierge settings.",
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
