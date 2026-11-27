"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS_LEFT: FaqItem[] = [
  {
    q: "What is billing software and why does my business need it?",
    a: "Billing software helps you generate invoices, record sales, track customer payments, and calculate taxes automatically. It eliminates human manual calculation errors, accelerates counter checkout speeds, and keeps your financial records completely organized for tax filings.",
  },
  {
    q: "How do I choose the best GST/VAT billing software?",
    a: "Look for speed, offline reliability, direct thermal printer compatibility, real-time inventory deduction, and automated tax reporting. Durozen POS combines all these into one platform with sub-second execution.",
  },
  {
    q: "Is invoicing software for small retail businesses really necessary?",
    a: "Yes. Invoicing software prevents phantom inventory shrinkage, accelerates checkout lanes by 65%, and provides clear customer receipts with automated tax breakdowns, preventing revenue leakage.",
  },
  {
    q: "Can I use free invoicing software for long-term business operations?",
    a: "Free generic tools often lack direct thermal printer drivers, offline buffering, multi-store sync, and high-speed barcode scanning. An enterprise POS like Durozen guarantees durability, security, and continuous uptime.",
  },
  {
    q: "What features should modern POS billing software include?",
    a: "Key features include fast barcode/touch intake, split-tender payments (Cash, Card, UPI), automatic stock deduction, thermal printing support, cashier shift balancing, and daily Z-report closings.",
  },
];

const FAQS_RIGHT: FaqItem[] = [
  {
    q: "What is thermal printing and why is ESC/POS important?",
    a: "ESC/POS is the universal industry-standard protocol for thermal receipt printers. Durozen utilizes direct native byte drivers to communicate with USB, LAN, and Bluetooth thermal printers, triggering auto-cuts in 0.4 seconds without heavy print dialogs.",
  },
  {
    q: "What makes Durozen different from other accounting software?",
    a: "Unlike generic accounting software that requires dozens of clicks, Durozen is engineered specifically for fast-paced retail checkout counters with zero-latency barcode scanning and instant inventory reconciliation.",
  },
  {
    q: "Is Durozen suitable for growing and multi-location businesses?",
    a: "Yes. All branch stores communicate with Durozen's centralized cloud database. You can push master catalog price updates across all stores in 1 click and review consolidated branch revenue in real time.",
  },
  {
    q: "How can billing software reduce errors in tax calculation?",
    a: "Durozen automatically applies configured GST or VAT percentages based on item HSN codes and customer tax rules, eliminating manual calculation slips and ensuring 100% audit-ready invoices.",
  },
  {
    q: "How does automated inventory control improve business margins?",
    a: "By locking and reducing stock levels the moment an invoice commits, Durozen gives you true inventory counts, flags low-stock items before shelves empty, and prevents costly stockouts.",
  },
];

export default function TwoColumnFaq() {
  const [openLeft, setOpenLeft] = useState<number | null>(0);
  const [openRight, setOpenRight] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading (Screenshot 8) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Question
          </h2>
        </div>

        {/* Two-Column FAQ Grid (Screenshot 8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          {/* Left Column */}
          <div className="space-y-3">
            {FAQS_LEFT.map((faq, idx) => {
              const isOpen = openLeft === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenLeft(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 hover:text-durozen-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 text-slate-400">
                      {isOpen ? <Minus className="w-4 h-4 text-durozen-600" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            {FAQS_RIGHT.map((faq, idx) => {
              const isOpen = openRight === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenRight(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 hover:text-durozen-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 text-slate-400">
                      {isOpen ? <Minus className="w-4 h-4 text-durozen-600" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
