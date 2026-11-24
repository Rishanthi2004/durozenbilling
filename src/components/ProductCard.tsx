"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, MonitorSmartphone, Printer, Boxes, Activity } from "lucide-react";
import { Product } from "@/data/products";
import DemoModal from "./DemoModal";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <div
        className={`group relative bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
          featured
            ? "border-durozen-200 shadow-xl shadow-emerald-500/5 ring-1 ring-durozen-500/20"
            : "border-slate-200 shadow-card hover:shadow-card-hover hover:border-durozen-300"
        }`}
      >
        {/* Top subtle highlight gradient matching 4-color logo */}
        <div className="absolute top-0 left-0 right-0 h-1.5 durozen-brand-bar opacity-90" />

        <div className="p-6 sm:p-8">
          {/* Header Row: Badge & Category */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-durozen-700 bg-durozen-50 border border-durozen-200/80 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-durozen-500 animate-pulse" />
              {product.statusBadge}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {product.category}
            </span>
          </div>

          {/* Product Icon & Title */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-durozen-500 to-durozen-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-durozen-500/20 group-hover:scale-105 transition-transform duration-300">
              <MonitorSmartphone className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-durozen-600 transition-colors tracking-tight">
                {product.name}
              </h3>
              <p className="text-xs font-semibold text-slate-500 mt-1">
                {product.tagline}
              </p>
            </div>
          </div>

          {/* Short Description */}
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {product.shortDescription}
          </p>

          {/* Interactive Visual Dashboard Preview Mockup */}
          <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 overflow-hidden relative group-hover:bg-durozen-50/20 transition-colors">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200 text-xs">
              <span className="font-mono font-bold text-slate-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Live Terminal Preview
              </span>
              <span className="text-[11px] font-mono text-durozen-600 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
                0.4s Thermal Cut
              </span>
            </div>

            {/* Mockup Mini Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center mb-3">
              {product.heroStats.map((stat, idx) => (
                <div key={idx} className="bg-white p-2 rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="text-[10px] text-slate-500 font-medium block truncate">{stat.label}</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 font-mono block mt-0.5">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Quick feature tags inside preview */}
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
              <span className="bg-white border border-slate-200 px-2 py-1 rounded-md flex items-center gap-1 font-medium">
                <Printer className="w-3 h-3 text-durozen-500" /> ESC/POS Thermal 80mm
              </span>
              <span className="bg-white border border-slate-200 px-2 py-1 rounded-md flex items-center gap-1 font-medium">
                <Boxes className="w-3 h-3 text-durozen-500" /> Auto Stock Sync
              </span>
              <span className="bg-white border border-slate-200 px-2 py-1 rounded-md flex items-center gap-1 font-medium">
                <Activity className="w-3 h-3 text-durozen-500" /> Multi-Store
              </span>
            </div>
          </div>

          {/* Key Features List */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-durozen-500" />
              Verified Core Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
            <Link
              href={`/products/${product.slug}`}
              className="w-full sm:w-1/2 py-3 px-5 rounded-xl font-bold text-sm text-center text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5 group/btn"
            >
              <span>Explore Product</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={() => setIsDemoOpen(true)}
              className="w-full sm:w-1/2 py-3 px-5 rounded-xl font-bold text-sm text-center text-white bg-gradient-to-r from-durozen-500 to-durozen-600 hover:from-durozen-600 hover:to-durozen-700 shadow-md shadow-durozen-500/20 hover:shadow-lg hover:shadow-durozen-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>Request Demo</span>
            </button>
          </div>
        </div>
      </div>

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        productName={product.name}
      />
    </>
  );
}
