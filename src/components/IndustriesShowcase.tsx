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
} from "lucide-react";
import { INDUSTRIES, DUROZEN_PRODUCTS } from "@/data/products";

export default function IndustriesShowcase() {
  const iconMap: Record<string, React.ReactNode> = {
    supermarket: <ShoppingCart className="w-6 h-6" />,
    apparel: <ShoppingBag className="w-6 h-6" />,
    restaurant: <Utensils className="w-6 h-6" />,
    electronics: <Cpu className="w-6 h-6" />,
    wholesale: <Truck className="w-6 h-6" />,
    pharmacy: <HeartPulse className="w-6 h-6" />,
  };

  const flagshipProduct = DUROZEN_PRODUCTS[0];

  return (
    <section className="py-20 sm:py-28 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-durozen-500" />
              <span>Tailored Industry Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Software Built for Your Business Sector
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Explore how Durozen POS adapts seamlessly to the demanding workflows of modern supermarkets, retail chains, dining outlets, and distributors.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-bold text-sm text-durozen-600 hover:text-durozen-700 transition-colors group"
          >
            <span>View all industry workflows</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-durozen-300 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top color gradient bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${ind.accentColor}`}
              />

              <div>
                {/* Category & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-durozen-50 text-durozen-600 flex items-center justify-center border border-durozen-100 group-hover:scale-105 group-hover:bg-durozen-500 group-hover:text-white transition-all duration-300">
                    {iconMap[ind.imageType] || <ShoppingCart className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                    {ind.category}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 group-hover:text-durozen-600 transition-colors tracking-tight">
                  {ind.name}
                </h3>
                <p className="text-xs font-semibold text-durozen-600 mt-1">
                  {ind.headline}
                </p>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {ind.description}
                </p>

                {/* Key Solutions preview */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Tailored Capabilities:
                  </span>
                  {ind.solutions.slice(0, 2).map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Solution Link */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Compatible Software</span>
                  <span className="text-xs font-bold text-slate-800">
                    {flagshipProduct.name}
                  </span>
                </div>

                <Link
                  href={`/products/${flagshipProduct.slug}`}
                  className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-durozen-500 hover:text-white transition-all flex items-center justify-center group-hover:translate-x-0.5"
                  aria-label={`Explore solution for ${ind.name}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
