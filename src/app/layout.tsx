import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Durozen Technologies | Power Your Business with Smarter Technology",
  description:
    "One Powerful Platform for Billing, Inventory, Sales, and Business Operations by Durozen Technologies. Sub-second thermal printing and multi-store management.",
  keywords: [
    "Durozen Technologies",
    "Billing Software",
    "POS Billing System and Tracking",
    "Point of Sale",
    "Thermal Printing Software",
    "Inventory Reconciliation",
    "Multi-store Billing",
    "Enterprise Retail SaaS",
  ],
  authors: [{ name: "Durozen Technologies" }],
  icons: {
    icon: "/durozen-logo.png",
    shortcut: "/durozen-logo.png",
    apple: "/durozen-logo.png",
  },
  openGraph: {
    title: "Durozen Technologies - Intelligent Billing & POS Software",
    description: "Smarter Billing. Simpler Business. Discover enterprise POS, real-time inventory tracking, and 0.4s thermal printing.",
    type: "website",
    locale: "en_US",
    siteName: "Durozen Technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-900 relative min-h-screen`}
      >
        {/* Fixed Ambient Design Background Pattern */}
        <div
          className="fixed inset-0 pointer-events-none -z-10 bg-cover bg-center bg-no-repeat bg-fixed opacity-95"
          style={{ backgroundImage: "url('/background-design.jpg')" }}
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}
