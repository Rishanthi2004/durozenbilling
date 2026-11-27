"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Printer,
  CheckCircle2,
} from "lucide-react";
import DemoModal from "./DemoModal";
import DurozenLogo from "./DurozenLogo";

const ROTATING_TECHNOLOGIES = [
  "Smarter Technology",
  "Intelligent POS Billing",
  "Real-Time Stock Tracking",
  "Direct Thermal Cut Systems",
  "Automated Retail Operations",
];

const CLIENT_BRANDS = [
  { name: "Craftsman Architects", label: "CRAFTSMAN" },
  { name: "Sree Amman Traders", label: "AMMAN TRADERS" },
  { name: "Meknay Retail", label: "MEHNAZ" },
  { name: "Blenda Internet", label: "BLENDA" },
  { name: "Herb & Spices Agro", label: "HERB-DE-HERBS" },
  { name: "Metro Hypermarket", label: "METRO MART" },
];

export default function HeroRaseedStyle() {
  const [sectorIndex, setSectorIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const currentWord = ROTATING_TECHNOLOGIES[sectorIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentWord) {
      // Pause when full word is typed before erasing
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1900);
    } else if (isDeleting && displayText === "") {
      // Switch to next word
      setIsDeleting(false);
      setSectorIndex((prev) => (prev + 1) % ROTATING_TECHNOLOGIES.length);
    } else {
      // Typing or deleting next character
      const speed = isDeleting ? 30 : 65;
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, sectorIndex]);

  return (
    <>
      <section className="relative pt-6 pb-16 sm:pt-10 sm:pb-24 overflow-hidden bg-transparent">

        {/* Floating Kinetic Moving Word Badges Orbiting the Hero */}
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden xl:flex items-center gap-2 absolute top-20 left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-lg text-xs font-bold text-slate-800 pointer-events-none select-none z-20"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>⚡ Sub-Second Fast Checkout</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], x: [0, -4, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="hidden xl:flex items-center gap-2 absolute bottom-44 left-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-lg text-xs font-bold text-slate-800 pointer-events-none select-none z-20"
        >
          <span className="w-2 h-2 rounded-full bg-durozen-500" />
          <span>📦 Automated Stock Reconciliation</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -9, 0], x: [0, -5, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="hidden xl:flex items-center gap-2 absolute top-24 right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-lg text-xs font-bold text-slate-800 pointer-events-none select-none z-20"
        >
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span>🖨️ 0.4s Direct ESC/POS Print Cut</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0], x: [0, 4, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
          className="hidden xl:flex items-center gap-2 absolute bottom-48 right-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-lg text-xs font-bold text-slate-800 pointer-events-none select-none z-20"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span>☁️ Multi-Branch Central Cloud Sync</span>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* 4-Color Brand Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-slate-800 text-xs font-bold mb-6 shadow-xs animate-in fade-in duration-300">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            </div>
            <span>Transform the Way You Grow</span>
          </div>

          {/* Headline with Dynamic Typewriter Cursor */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.16]">
              <span>Power Your Business with </span>
              <span className="text-durozen-600 font-black inline-block mt-2 sm:mt-0 relative">
                {displayText}
                <span className="inline-block w-1 sm:w-1.5 h-7 sm:h-11 lg:h-12 bg-durozen-600 ml-1.5 align-middle rounded-full animate-pulse" />
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mt-5 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              One Powerful Platform for Billing, Inventory, Sales, and Business Operations.
            </p>
          </div>

          {/* CTA & Rating Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="py-3.5 px-8 rounded-full font-extrabold text-sm text-white bg-durozen-600 hover:bg-durozen-700 transition-all shadow-lg shadow-durozen-600/30 hover:shadow-xl hover:shadow-durozen-600/40 active:scale-98 cursor-pointer"
            >
              Start Your Free Trial
            </button>

            {/* Rating Stars (Screenshot 5) */}
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <div className="flex items-center text-amber-500 text-sm tracking-tighter">
                ★★★★★
              </div>
              <span className="font-semibold text-slate-700">From 10+ Clients &amp; 35+ Projects</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* MULTI-DEVICE SOFTWARE SHOWCASE (SCREENSHOT 7)            */}
          {/* ========================================================= */}
          <div className="mt-14 relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Device: Hand-held Mobile Phone UI (Screenshot 7) */}
              <div className="lg:col-span-3 hidden sm:flex justify-center lg:justify-end">
                <div className="w-56 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-900/10 text-left text-xs font-sans">
                  {/* Phone Speaker Notch */}
                  <div className="w-20 h-3.5 bg-slate-800 rounded-full mx-auto mb-2" />

                  {/* Mobile App Header */}
                  <div className="bg-white rounded-[2rem] p-3.5 space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                      <div className="flex items-center">
                        <DurozenLogo size="xs" withLink={false} showSubtitle={false} />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-emerald-600 bg-durozen-50 px-1.5 py-0.5 rounded">
                        ONLINE
                      </span>
                    </div>

                    {/* Quick Metric Cards */}
                    <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                      <div className="bg-durozen-50 p-2 rounded-xl border border-durozen-100">
                        <span className="text-slate-400 block text-[8px] uppercase">Today&apos;s Sale</span>
                        <span className="font-black text-slate-900 text-xs">$8,492</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <span className="text-slate-400 block text-[8px] uppercase">Invoices</span>
                        <span className="font-black text-slate-900 text-xs">342 bills</span>
                      </div>
                    </div>

                    {/* Sparkline chart simulation */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex justify-between text-[9px] text-slate-500 mb-1">
                        <span>Total Sales Velocity</span>
                        <span className="text-emerald-600 font-bold">+28%</span>
                      </div>
                      <div className="h-10 flex items-end gap-1 pt-2">
                        {[40, 65, 50, 85, 60, 95, 75].map((h, i) => (
                          <div
                            key={i}
                            style={{ height: `${h}%` }}
                            className="flex-1 bg-durozen-500 rounded-t-sm"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-durozen-50 text-emerald-800 text-[10px] flex items-center justify-between font-semibold">
                      <span>Thermal Print Ready</span>
                      <span className="font-mono text-[9px]">0.4s</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Device: Sleek Tablet / Laptop with Keyboard (Screenshot 7) */}
              <div className="lg:col-span-6">
                <div className="bg-slate-900 rounded-3xl p-3 sm:p-4 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-900/10">
                  {/* Laptop / Tablet Screen */}
                  <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
                    {/* Software Title Bar */}
                    <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                        <div className="ml-2 pl-2 border-l border-slate-300 flex items-center gap-1.5">
                          <DurozenLogo size="xs" withLink={false} showSubtitle={false} />
                          <span className="text-[11px] font-bold text-slate-700">
                            Cloud POS v3.4
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 bg-durozen-50 px-2 py-0.5 rounded font-bold">
                        Terminal #01 Active
                      </span>
                    </div>

                    {/* Dashboard Workspace */}
                    <div className="p-3 sm:p-4 text-left">
                      {/* Metric Strip */}
                      <div className="grid grid-cols-4 gap-2 mb-3">
                        <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-center">
                          <span className="text-[9px] text-slate-400 uppercase font-bold block">Gross Sales</span>
                          <span className="text-xs sm:text-sm font-black text-slate-900 font-mono">$38,000</span>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-center">
                          <span className="text-[9px] text-slate-400 uppercase font-bold block">Payable Tax</span>
                          <span className="text-xs sm:text-sm font-black text-slate-900 font-mono">$2,450</span>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-center">
                          <span className="text-[9px] text-slate-400 uppercase font-bold block">Inventory Val</span>
                          <span className="text-xs sm:text-sm font-black text-slate-900 font-mono">$57,000</span>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-center">
                          <span className="text-[9px] text-slate-400 uppercase font-bold block">Active Users</span>
                          <span className="text-xs sm:text-sm font-black text-emerald-600 font-mono">12 Staff</span>
                        </div>
                      </div>

                      {/* Bar Graph Simulation */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-3">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 mb-2">
                          <span>Total Sales Telemetry</span>
                          <span className="text-durozen-600 font-mono text-xs">Peak: 12:30 PM</span>
                        </div>
                        <div className="h-16 flex items-end gap-1.5 pt-2">
                          {[30, 45, 60, 40, 80, 100, 65, 85, 70, 90, 50, 75].map((h, i) => (
                            <div
                              key={i}
                              style={{ height: `${h}%` }}
                              className={`flex-1 rounded-t-sm transition-all ${
                                i === 5 ? "bg-durozen-500" : "bg-slate-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Mini order status pills */}
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2 rounded-lg bg-durozen-50 border border-durozen-100 flex items-center justify-between">
                          <span className="font-bold text-slate-800">Counter Orders (Today)</span>
                          <span className="font-mono font-bold text-durozen-600">342 Bills</span>
                        </div>
                        <div className="p-2 rounded-lg bg-durozen-50 border border-durozen-100 flex items-center justify-between">
                          <span className="font-bold text-slate-800">Stock Discrepancy</span>
                          <span className="font-mono font-bold text-emerald-600">0.00%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Attached Keyboard Base (Screenshot 7 Keyboard motif) */}
                  <div className="mt-2 bg-slate-800 rounded-xl p-2 flex items-center justify-center">
                    <div className="w-16 h-1 bg-slate-600 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Right Device: Floating Dashboard / Invoicing Cards (Screenshot 7) */}
              <div className="lg:col-span-3 hidden sm:flex justify-center lg:justify-start">
                <div className="w-56 bg-white rounded-3xl p-4 shadow-xl border border-slate-200 text-left space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Simplify Your Billing
                    </span>
                    <Printer className="w-3.5 h-3.5 text-durozen-600" />
                  </div>

                  {/* Thermal Receipt Preview mini */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 font-mono text-[9px] space-y-1">
                    <div className="text-center font-bold text-slate-900 border-b border-dashed border-slate-300 pb-1">
                      DUROZEN RECEIPT
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Espresso Beans 500g</span>
                      <span>$14.50</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Organic Milk 1L</span>
                      <span>$4.25</span>
                    </div>
                    <div className="flex justify-between font-black text-slate-900 border-t border-dashed border-slate-300 pt-1">
                      <span>TOTAL</span>
                      <span>$18.75</span>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-durozen-50 text-emerald-800 text-[10px] flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Auto-Cut Completed in 0.4s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CLIENT BRANDS TICKER STRIP (SCREENSHOT 1 & 7)             */}
          {/* ========================================================= */}
          <div className="mt-16 pt-10 border-t border-slate-100">
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Growing confidently with <span className="font-bold text-slate-900">brands across</span> business sectors
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
              {CLIENT_BRANDS.map((brand, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 font-mono font-bold text-xs sm:text-sm text-slate-600 tracking-wider hover:text-durozen-600 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-[10px] text-slate-500 font-bold">
                    {brand.label.charAt(0)}
                  </div>
                  <span>{brand.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
