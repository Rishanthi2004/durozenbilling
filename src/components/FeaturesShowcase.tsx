"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Receipt,
  Boxes,
  Printer,
  Store,
  Activity,
  BarChart3,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { DUROZEN_PRODUCTS } from "@/data/products";

export default function FeaturesShowcase() {
  const flagship = DUROZEN_PRODUCTS[0];
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>("thermal-printing");

  const iconMap: Record<string, React.ReactNode> = {
    Receipt: <Receipt className="w-6 h-6" />,
    Boxes: <Boxes className="w-6 h-6" />,
    Printer: <Printer className="w-6 h-6" />,
    Store: <Store className="w-6 h-6" />,
    Activity: <Activity className="w-6 h-6" />,
    BarChart3: <BarChart3 className="w-6 h-6" />,
  };

  const activeFeature =
    flagship.features.find((f) => f.id === selectedFeatureId) || flagship.features[0];

  return (
    <section className="py-20 sm:py-28 bg-white/40 backdrop-blur-xs border-y border-slate-200/60 relative overflow-hidden">
      {/* Background soft grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-durozen-500" />
            <span>Verified Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Engineered for High-Velocity Retail Counters
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every feature in Durozen POS is purpose-built to eliminate checkout latency, stop inventory discrepancies, and guarantee uninterrupted operations.
          </p>
        </div>

        {/* Interactive Feature Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 5 cols: Feature selection cards */}
          <div className="lg:col-span-5 space-y-3">
            {flagship.features.map((feat) => {
              const isSelected = feat.id === selectedFeatureId;
              return (
                <button
                  key={feat.id}
                  onClick={() => setSelectedFeatureId(feat.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border flex items-start gap-4 cursor-pointer ${
                    isSelected
                      ? "bg-white border-durozen-500 shadow-md ring-1 ring-durozen-500/20"
                      : "bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected
                        ? "bg-gradient-to-br from-durozen-500 to-durozen-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {iconMap[feat.iconName] || <Cpu className="w-6 h-6" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isSelected ? "text-durozen-600" : "text-slate-900"
                        }`}
                      >
                        {feat.title}
                      </h3>
                      {feat.badge && (
                        <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-durozen-50 text-durozen-700 border border-durozen-200/60 flex-shrink-0">
                          {feat.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right 7 cols: Interactive Deep Dive Display */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 durozen-brand-bar" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-durozen-50 text-durozen-600 flex items-center justify-center">
                    {iconMap[activeFeature.iconName]}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Feature Deep Dive
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {activeFeature.title}
                    </h3>
                  </div>
                </div>

                {activeFeature.highlightMetric && (
                  <div className="px-3.5 py-1.5 rounded-xl bg-durozen-50 border border-durozen-200 text-durozen-700 font-mono font-bold text-xs">
                    {activeFeature.highlightMetric}
                  </div>
                )}
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {activeFeature.description}
              </p>

              {/* Verified Feature Capabilities list */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Technical Specifications & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeFeature.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual simulated feature widget based on active feature */}
              {activeFeature.id === "thermal-printing" && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700 font-mono">
                    <span className="text-slate-400">ESC/POS High-Speed Driver</span>
                    <span className="text-emerald-400 font-bold">0.4s Print Execution</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-[11px]">
                    <div>
                      <span className="text-slate-400 block">Paper Width</span>
                      <span className="font-bold">58mm & 80mm</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Interfaces</span>
                      <span className="font-bold">USB, Ethernet, Bluetooth, Wi-Fi</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Cash Drawer</span>
                      <span className="font-bold text-emerald-400">Auto-Kick Trigger</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.id === "inventory-reconciliation" && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700 font-mono">
                    <span className="text-slate-400">Inventory Status Telemetry</span>
                    <span className="text-emerald-400 font-bold">Zero Stock Variance</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-[11px]">
                    <div>
                      <span className="text-slate-400 block">Stock Deduction</span>
                      <span className="font-bold">Instant upon bill save</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Lot Tracking</span>
                      <span className="font-bold">Batch & Expiry Warnings</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">PO Generation</span>
                      <span className="font-bold text-durozen-400">Automated Re-Order</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.id === "multi-store-support" && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700 font-mono">
                    <span className="text-slate-400">Centralized Cloud Sync</span>
                    <span className="text-emerald-400 font-bold">Multi-Terminal Mesh</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-[11px]">
                    <div>
                      <span className="text-slate-400 block">Price Push</span>
                      <span className="font-bold">1-Click Global Update</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Branch Transfers</span>
                      <span className="font-bold">In-Transit Verification</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Staff Security</span>
                      <span className="font-bold text-emerald-400">Role-Based Matrix</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.id === "billing-invoicing" && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700 font-mono">
                    <span className="text-slate-400">Billing Engine Benchmark</span>
                    <span className="text-emerald-400 font-bold">&lt; 1.5s Checkout Velocity</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-[11px]">
                    <div>
                      <span className="text-slate-400 block">Payment Split</span>
                      <span className="font-bold">Cash + Card + UPI</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Offline Mode</span>
                      <span className="font-bold text-emerald-400">Local Buffer Sync</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Tax Compliance</span>
                      <span className="font-bold">Automated GST / VAT</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.id === "sales-tracking" && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700 font-mono">
                    <span className="text-slate-400">Live Counter Tracking</span>
                    <span className="text-emerald-400 font-bold">Real-time Telemetry</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-[11px]">
                    <div>
                      <span className="text-slate-400 block">Fulfillment</span>
                      <span className="font-bold">Bill → Pack → Dispatch</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Shift Balancing</span>
                      <span className="font-bold">Cash Drawer Audit</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Security Alert</span>
                      <span className="font-bold text-amber-400">Instant Void Flagging</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.id === "reports-analytics" && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700 font-mono">
                    <span className="text-slate-400">Executive Reporting Suite</span>
                    <span className="text-emerald-400 font-bold">30+ Standard Reports</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-[11px]">
                    <div>
                      <span className="text-slate-400 block">Daily Z-Report</span>
                      <span className="font-bold">One-click shift close</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Export Formats</span>
                      <span className="font-bold">Excel, CSV, Audit PDF</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Inventory Aging</span>
                      <span className="font-bold text-durozen-400">Fast vs Slow Moving</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
