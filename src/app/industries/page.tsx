"use client";

import React from "react";
import Link from "next/link";
import {
  ShoppingCart,
  ShoppingBag,
  Utensils,
  Cpu,
  Truck,
  HeartPulse,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedHeroWords from "@/components/AnimatedHeroWords";
import { INDUSTRIES, DUROZEN_PRODUCTS } from "@/data/products";

export default function IndustriesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    supermarket: <ShoppingCart className="w-8 h-8" />,
    apparel: <ShoppingBag className="w-8 h-8" />,
    restaurant: <Utensils className="w-8 h-8" />,
    electronics: <Cpu className="w-8 h-8" />,
    wholesale: <Truck className="w-8 h-8" />,
    pharmacy: <HeartPulse className="w-8 h-8" />,
  };

  const flagshipProduct = DUROZEN_PRODUCTS[0];

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-durozen-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-durozen-50/40 via-white to-white border-b border-slate-100 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-durozen-500" />
              <span>Tailored Industry Deployments</span>
            </div>
            <AnimatedHeroWords
              title="Software Solutions by Industry"
              subtitle="Every retail vertical faces unique counter bottlenecks. Discover how Durozen POS streamlines operations for your specific commercial sector."
            />
          </div>
        </section>

        {/* Detailed Industry Solutions */}
        <section className="py-16 sm:py-24 bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                id={ind.slug}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Sector Header & Description */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-durozen-50 text-durozen-600 flex items-center justify-center">
                        {iconMap[ind.imageType]}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          {ind.category}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          {ind.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-durozen-600">
                      {ind.headline}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-xs text-slate-400 block">Benchmark Metric</span>
                      <span className="text-xl font-black text-slate-900 font-mono">
                        {ind.stats.value}
                      </span>
                      <span className="text-xs text-slate-500 block">{ind.stats.label}</span>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/products/${flagshipProduct.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold text-white bg-durozen-500 hover:bg-durozen-600 px-4 py-2.5 rounded-xl transition-all shadow-sm"
                      >
                        <span>Explore {flagshipProduct.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Pain Points vs. Durozen Solution */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Pain Points */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4" /> Traditional Pain Points
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {ind.painPoints.map((p, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-rose-500 font-bold">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Durozen Solutions */}
                    <div className="p-5 rounded-2xl bg-durozen-50/60 border border-durozen-200/80 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-durozen-700 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" /> Durozen POS Solution
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {ind.solutions.map((s, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
