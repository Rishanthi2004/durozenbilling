"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Receipt,
  Boxes,
  Printer,
  Store,
  Activity,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import AnimatedHeroWords from "@/components/AnimatedHeroWords";
import { DUROZEN_PRODUCTS } from "@/data/products";

export default function FeaturesPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const flagship = DUROZEN_PRODUCTS[0];

  const iconMap: Record<string, React.ReactNode> = {
    Receipt: <Receipt className="w-7 h-7" />,
    Boxes: <Boxes className="w-7 h-7" />,
    Printer: <Printer className="w-7 h-7" />,
    Store: <Store className="w-7 h-7" />,
    Activity: <Activity className="w-7 h-7" />,
    BarChart3: <BarChart3 className="w-7 h-7" />,
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col selection:bg-durozen-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-white/30 backdrop-blur-xs border-b border-slate-200/60 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-4 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-durozen-500" />
              <span>Full Capabilities Matrix</span>
            </div>
            <AnimatedHeroWords
              title="Enterprise Billing Capabilities"
              subtitle="Engineered with extreme focus on speed, stock accuracy, and universal hardware compatibility for high-volume retail."
            />
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="py-16 sm:py-24 bg-white/40 backdrop-blur-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flagship.features.map((feat) => (
                <div
                  key={feat.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-durozen-50 text-durozen-600 flex items-center justify-center">
                        {iconMap[feat.iconName] || <Cpu className="w-7 h-7" />}
                      </div>
                      {feat.badge && (
                        <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded-full bg-durozen-50 text-durozen-700 border border-durozen-200/60">
                          {feat.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {feat.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Included Features:
                      </span>
                      {feat.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-durozen-600">
                    <span>{feat.highlightMetric}</span>
                    <Link
                      href={`/products/${flagship.slug}`}
                      className="text-slate-600 hover:text-durozen-600 flex items-center gap-1 font-sans font-bold"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Hardware compatibility section */}
            <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-durozen-600">
                  Hardware Compatibility
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  Plug-and-Play With Your Existing POS Hardware
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  No proprietary lock-in. Durozen POS interfaces directly with industry-standard POS peripherals.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <Printer className="w-6 h-6 text-durozen-600 mx-auto mb-2" />
                  <span className="font-bold text-slate-900 block">Thermal Printers</span>
                  <span className="text-[10px] text-slate-500">ESC/POS 58mm & 80mm</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <Zap className="w-6 h-6 text-durozen-600 mx-auto mb-2" />
                  <span className="font-bold text-slate-900 block">Barcode Scanners</span>
                  <span className="text-[10px] text-slate-500">1D / 2D / QR Handheld & Orbit</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <Boxes className="w-6 h-6 text-durozen-600 mx-auto mb-2" />
                  <span className="font-bold text-slate-900 block">Weighing Scales</span>
                  <span className="text-[10px] text-slate-500">RS-232 / USB Serial Sync</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <span className="font-bold text-slate-900 block">Cash Drawers</span>
                  <span className="text-[10px] text-slate-500">RJ11 12V/24V Auto-Kick</span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-xl font-bold text-xs text-white bg-durozen-500 hover:bg-durozen-600 transition-all shadow-md shadow-durozen-500/25"
                >
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>Check Hardware Compatibility with Our Engineers</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
