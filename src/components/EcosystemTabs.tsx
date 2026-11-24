"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import EcosystemIllustration from "./EcosystemIllustration";

interface TabData {
  id: string;
  name: string;
  title: string;
  headline: string;
  bullets: string[];
  graphicType: "billing" | "accounting" | "inventory" | "pos" | "tax";
}

const ECOSYSTEM_TABS: TabData[] = [
  {
    id: "billing",
    name: "Billing & Invoicing",
    title: "Billing & Invoicing",
    headline: "Generate professional bills and receipts in under 1.5 seconds.",
    bullets: [
      "Sub-second touch and barcode scanning input",
      "Split tender support across Cash, Card, UPI, and Store Credit",
      "Dynamic customer discount and loyalty point redemption",
      "Offline billing buffer with zero interruption",
      "Direct auto-cut thermal receipt printing",
    ],
    graphicType: "billing",
  },
  {
    id: "accounting",
    name: "Accounting",
    title: "Financial Accounting & Ledger",
    headline: "Keep your books balanced with automatic double-entry posting.",
    bullets: [
      "Automatic journal entry creation upon bill commit",
      "Customer credit ledger and aging reports",
      "Cash drawer physical shift balancing",
      "Supplier purchase invoices and payment status",
      "One-click Profit & Loss balance sheet export",
    ],
    graphicType: "accounting",
  },
  {
    id: "inventory",
    name: "Inventory",
    title: "Inventory Reconciliation & Stock Control",
    headline: "Eliminate stock shrinkage with real-time deduction upon sale.",
    bullets: [
      "Live stock decrement directly from POS cashier lanes",
      "Batch, lot, and expiry date warning alerts",
      "Automated Purchase Orders upon minimum threshold",
      "Multi-warehouse inter-store stock transfers",
      "Damage, wastage, and returns audit logs",
    ],
    graphicType: "inventory",
  },
  {
    id: "pos",
    name: "Advanced POS",
    title: "Advanced POS Counter Terminal",
    headline: "High-throughput terminal built for intense peak rush hours.",
    bullets: [
      "Keyboard hotkey fast lane navigation (zero mouse lag)",
      "Universal barcode scanner and RFID tag integration",
      "Weighing scale RS-232 / USB live weight sync",
      "Hold, recall, and multi-ticket simultaneous processing",
      "Role-based cashier permissions and supervisor overrides",
    ],
    graphicType: "pos",
  },
  {
    id: "tax",
    name: "GST & Tax Reporting",
    title: "GST & Tax Reporting",
    headline: "Handle tax filings and audit logs with accuracy and zero stress.",
    bullets: [
      "Generate GSTR-1, 2A, 2B, 3B compliant records",
      "Automated GST calculation and HSN/SAC code mapping",
      "Input Tax Credit (ITC) reconciliation",
      "Error-free tax bracket validations",
      "Export filing reports directly to Excel, CSV, and PDF",
    ],
    graphicType: "tax",
  },
];

export default function EcosystemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>("billing");
  const activeTab = ECOSYSTEM_TABS.find((t) => t.id === activeTabId) || ECOSYSTEM_TABS[0];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading (Screenshot 1 & 3) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Run Your Entire Business Ecosystem Seamlessly with Durozen
          </h2>
        </div>

        {/* Horizontal Pill Tab Bar (Screenshot 1 & 3) */}
        <div className="bg-slate-100/90 rounded-2xl p-1.5 flex flex-wrap items-center justify-between gap-1 mb-12 border border-slate-200/80">
          {ECOSYSTEM_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all text-center relative cursor-pointer ${
                  isActive
                    ? "bg-white text-slate-900 shadow-md shadow-slate-900/5 border border-slate-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                <span>{tab.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-durozen-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display (Screenshot 3 Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Software UI Graphic Card (Screenshot 3 & User Attachment) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-lg relative overflow-hidden flex items-center justify-center min-h-[380px]">
            <EcosystemIllustration type={activeTab.graphicType} />
          </div>

          {/* Right Column: Title, Description, Checkmarks (Screenshot 3) */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {activeTab.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {activeTab.headline}
            </p>

            <ul className="space-y-3 pt-2">
              {activeTab.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/products/durozen-pos-billing-tracking"
                className="inline-flex items-center gap-2 text-xs font-bold text-durozen-600 hover:text-durozen-700 underline"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
