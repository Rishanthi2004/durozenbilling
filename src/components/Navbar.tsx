"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, LayoutGrid, MonitorSmartphone, Printer, Sparkles } from "lucide-react";
import NirvagamLogo from "./NirvagamLogo";
import DemoModal from "./DemoModal";
import { DUROZEN_PRODUCTS, INDUSTRIES } from "@/data/products";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setIndustriesDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full pt-3 pb-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Floating Pill Container (Inspired by Raseed's signature rounded navbar) */}
          <div className="bg-white/95 backdrop-blur-md rounded-full sm:rounded-2xl lg:rounded-full border border-slate-200/90 shadow-lg shadow-slate-900/5 px-4 sm:px-6 py-2.5 flex items-center justify-between">
            {/* Left: App Grid Icon + Durozen Logo */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="hidden xl:flex items-center justify-center w-8 h-8 rounded-lg text-slate-500 hover:text-durozen-600 hover:bg-slate-100 transition-colors"
                aria-label="App Hub"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>

              <NirvagamLogo />
            </div>

            {/* Middle: Navigation Links with Dropdowns */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold text-slate-700">
              <Link
                href="/"
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  pathname === "/" ? "text-durozen-600 bg-durozen-50 font-bold" : "hover:text-durozen-600 hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIndustriesDropdownOpen(true)}
                onMouseLeave={() => setIndustriesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIndustriesDropdownOpen(!industriesDropdownOpen)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors ${
                    pathname.startsWith("/industries") ? "text-durozen-600 bg-durozen-50 font-bold" : "hover:text-durozen-600 hover:bg-slate-50"
                  }`}
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${industriesDropdownOpen ? "rotate-180 text-durozen-500" : "text-slate-400"}`} />
                </button>

                {industriesDropdownOpen && (
                  <div className="absolute left-0 top-full pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 ring-1 ring-black/5">
                      <div className="px-3 py-1.5 mb-1 border-b border-slate-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        <span>Commercial Sectors</span>
                        <span className="text-durozen-600">6 Verticals</span>
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {INDUSTRIES.map((ind) => (
                          <Link
                            key={ind.id}
                            href={`/industries#${ind.slug}`}
                            className="flex items-center justify-between p-2 rounded-xl hover:bg-durozen-50/70 transition-colors text-xs font-medium text-slate-800 hover:text-durozen-600"
                          >
                            <span>{ind.name}</span>
                            <span className="text-[10px] text-slate-400 font-mono">{ind.category}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions / Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors ${
                    pathname.startsWith("/products") ? "text-durozen-600 bg-durozen-50 font-bold" : "hover:text-durozen-600 hover:bg-slate-50"
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsDropdownOpen ? "rotate-180 text-durozen-500" : "text-slate-400"}`} />
                </button>

                {productsDropdownOpen && (
                  <div className="absolute left-0 top-full pt-2 w-96 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3.5 ring-1 ring-black/5">
                      <div className="px-3 py-1.5 mb-2 border-b border-slate-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        <span>Confirmed Products</span>
                        <span className="text-emerald-600 bg-durozen-50 px-2 py-0.5 rounded-full font-sans">Active &amp; Tested</span>
                      </div>

                      {DUROZEN_PRODUCTS.map((prod) => (
                        <Link
                          key={prod.id}
                          href={`/products/${prod.slug}`}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-durozen-50/80 transition-colors border border-transparent hover:border-durozen-200/60"
                        >
                          <div className="w-9 h-9 rounded-xl bg-durozen-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                            <MonitorSmartphone className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">{prod.name}</h4>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{prod.tagline}</p>
                            <span className="text-[10px] font-bold text-durozen-600 flex items-center gap-1 mt-1">
                              Explore details <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </Link>
                      ))}

                      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-3">
                        <span>Universal Thermal Drivers</span>
                        <Link href="/products" className="font-bold text-durozen-600 hover:underline">
                          View full catalog
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/features"
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  pathname === "/features" ? "text-durozen-600 bg-durozen-50 font-bold" : "hover:text-durozen-600 hover:bg-slate-50"
                }`}
              >
                Features
              </Link>

              <Link
                href="/about"
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  pathname === "/about" ? "text-durozen-600 bg-durozen-50 font-bold" : "hover:text-durozen-600 hover:bg-slate-50"
                }`}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  pathname === "/contact" ? "text-durozen-600 bg-durozen-50 font-bold" : "hover:text-durozen-600 hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right: Buy Hardware link + Free Demo Pill Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/features"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1.5 px-3 py-1.5"
              >
                <Printer className="w-3.5 h-3.5 text-emerald-600" />
                <span>Buy Hardware</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-bold text-xs text-white bg-durozen-500 hover:bg-durozen-600 transition-all shadow-sm shadow-durozen-500/25 active:scale-98 cursor-pointer"
              >
                <span>Free Demo</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="text-xs font-bold px-3 py-1 rounded-full bg-durozen-500 text-white shadow-xs"
              >
                Free Demo
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-slate-700 hover:text-durozen-600 rounded-lg focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-3xl border border-slate-200 shadow-xl p-5 space-y-4 animate-in slide-in-from-top-2 duration-150">
            <div className="space-y-1 text-sm font-semibold text-slate-800">
              <Link href="/" className="block p-2 rounded-xl hover:bg-slate-50">
                Home
              </Link>
              <Link href="/products" className="block p-2 rounded-xl hover:bg-slate-50">
                Products &amp; Solutions
              </Link>
              <Link href="/industries" className="block p-2 rounded-xl hover:bg-slate-50">
                Industries
              </Link>
              <Link href="/features" className="block p-2 rounded-xl hover:bg-slate-50">
                Features &amp; Thermal Hardware
              </Link>
              <Link href="/about" className="block p-2 rounded-xl hover:bg-slate-50">
                About Us
              </Link>
              <Link href="/contact" className="block p-2 rounded-xl hover:bg-slate-50">
                Contact
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/features"
                className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-emerald-800 bg-durozen-50 border border-durozen-200 flex items-center justify-center gap-1.5"
              >
                <Printer className="w-4 h-4 text-emerald-600" />
                <span>Buy Hardware Suite</span>
              </Link>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsDemoModalOpen(true);
                }}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-center text-white bg-durozen-500 shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book a Free Demo</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Book a Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
