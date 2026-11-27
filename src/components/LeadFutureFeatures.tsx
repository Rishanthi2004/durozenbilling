"use client";

import React from "react";
import {
  Layers,
  Globe2,
  CreditCard,
  FileText,
  BarChart2,
  Printer,
} from "lucide-react";

const FEATURES_LIST = [
  {
    icon: <Layers className="w-6 h-6 text-emerald-600" />,
    title: "Complete Business Ecosystem",
    description:
      "Manage your business from a single platform with billing software, inventory, accounting, POS, reporting, and tracking.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-emerald-600" />,
    title: "Multi-Language Support",
    description:
      "Send invoices and handle global transactions effortlessly with localized receipt headers and multi-language support.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-emerald-600" />,
    title: "Multi-Currency & Payments",
    description:
      "Handle split tender payments and process customer transactions internationally with built-in multi-currency support.",
  },
  {
    icon: <FileText className="w-6 h-6 text-emerald-600" />,
    title: "Simplified GST & Tax Management",
    description:
      "Automate your tax invoicing, generate compliant e-way bills, and access ready-to-use tax reports to simplify filings.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-emerald-600" />,
    title: "Smart Business Reports",
    description:
      "Monitor Profit & Loss, Balance Sheet, Cash Flow, and inventory aging to gain a clear understanding of your business performance.",
  },
  {
    icon: <Printer className="w-6 h-6 text-emerald-600" />,
    title: "Customizable Thermal Invoices",
    description:
      "Design thermal receipts and invoices your way with custom headers, company logos, and QR codes to match your brand.",
  },
];

export default function LeadFutureFeatures() {
  return (
    <section className="py-20 sm:py-28 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading (Screenshot 2) */}
        <div className="text-left max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
            We create features that Lead the Future of Business
          </h2>
        </div>

        {/* 6-Grid Feature Cards (Screenshot 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {FEATURES_LIST.map((feat, idx) => (
            <div key={idx} className="space-y-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-durozen-50 flex items-center justify-center">
                {feat.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
