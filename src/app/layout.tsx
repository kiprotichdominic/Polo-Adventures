import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Polo Adventures — Safari & Travel Kenya",
    template: "%s | Polo Adventures",
  },
  description:
    "A premier tour and travel company based in Nairobi, Kenya. Curating exceptional safari packages, beach vacations, mountain climbing, and personalized travel experiences across Africa & Asia.",
  keywords: ["Kenya safari", "African safari", "Nairobi tours", "Maasai Mara", "Zanzibar holidays", "adventure travel Kenya"],
  openGraph: {
    title: "Polo Adventures — Safari & Travel Kenya",
    description: "Explore amazing destinations across Africa & Asia with Polo Adventures.",
    siteName: "Polo Adventures",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface-base text-ink-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
