import React from "react";
import Link from "next/link";
import { Mail, Phone, Globe, ArrowRight, ShieldCheck } from "lucide-react";
import DurozenLogo from "./DurozenLogo";
import { DUROZEN_PRODUCTS, COMPANY_STATS } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800">
          {/* Brand & Description (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white/10 hover:bg-white/15 backdrop-blur-sm p-3 rounded-2xl inline-block border border-white/15 transition-colors">
              <DurozenLogo size="md" variant="dark" />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Durozen Technologies builds enterprise-grade billing, point-of-sale, and real-time operations software. We empower retail businesses, supermarkets, and distributors with lightning-fast checkout, automated inventory reconciliation, and zero-latency thermal printing.
            </p>

            {/* Quick company strength tags */}
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700/80 text-durozen-300 font-medium">
                {COMPANY_STATS.projects} Projects
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700/80 text-durozen-300 font-medium">
                {COMPANY_STATS.clients} Clients
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700/80 text-durozen-300 font-medium">
                {COMPANY_STATS.countries} Countries
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700/80 text-durozen-300 font-medium">
                {COMPANY_STATS.engineers} Engineers
              </span>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Durozen Cloud & Terminal Systems Operational</span>
            </div>
          </div>

          {/* Software Products (Col 3) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Software Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {DUROZEN_PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="text-slate-400 hover:text-durozen-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{prod.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/features"
                  className="text-slate-400 hover:text-durozen-400 transition-colors"
                >
                  Thermal Printing Suite
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-slate-400 hover:text-durozen-400 transition-colors"
                >
                  Automated Stock Reconciliation
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-slate-400 hover:text-durozen-400 transition-colors"
                >
                  Multi-Store Cloud Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-durozen-400 font-semibold hover:text-durozen-300 transition-colors inline-flex items-center gap-1 mt-2 text-xs"
                >
                  <span>Explore Software Catalog</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries (Col 4) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-durozen-400 transition-colors">
                  Supermarkets & Groceries
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-durozen-400 transition-colors">
                  Fashion & Retail Apparel
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-durozen-400 transition-colors">
                  Restaurants & Cafes
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-durozen-400 transition-colors">
                  Electronics & Hardware
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-durozen-400 transition-colors">
                  Wholesale & Distribution
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-durozen-400 transition-colors">
                  Pharmacy & Healthcare
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Global Contacts (Col 5) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company & Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-durozen-400 transition-colors">
                  About Durozen Technologies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-durozen-400 transition-colors">
                  Contact Our Engineers
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-slate-400 hover:text-durozen-400 transition-colors">
                  Book a Live Demonstration
                </Link>
              </li>

              <li className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-durozen-400 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@durozen.in" className="hover:text-white transition-colors">
                    info@durozen.in
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-durozen-400 mt-0.5 flex-shrink-0" />
                  <a href="tel:+918122339694" className="hover:text-white transition-colors">
                    +91 81223 39694 / Technical Advisory
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Globe className="w-3.5 h-3.5 text-durozen-400 mt-0.5 flex-shrink-0" />
                  <span>HQ: Namakkal, Tamil Nadu, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Durozen Technologies. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Enterprise-Grade Security
            </span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
