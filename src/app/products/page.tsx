"use client";

import React, { useState } from "react";
import {
  MonitorSmartphone,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import DemoModal from "@/components/DemoModal";
import AnimatedHeroWords from "@/components/AnimatedHeroWords";
import { DUROZEN_PRODUCTS } from "@/data/products";

export default function ProductsCatalogPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-durozen-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-durozen-50/40 via-white to-white border-b border-slate-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-4 shadow-2xs">
              <MonitorSmartphone className="w-3.5 h-3.5 text-durozen-500" />
              <span>Durozen Software Catalog</span>
            </div>

            <AnimatedHeroWords
              title="Software That Works for Your Business"
              subtitle="Explore Durozen Technologies' verified billing systems, point-of-sale suites, and inventory tracking engines built for modern enterprise retail."
            />
          </div>
        </section>

        {/* Product Catalog Grid */}
        <section className="py-16 sm:py-24 bg-slate-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {DUROZEN_PRODUCTS.map((prod) => (
              <ProductCard key={prod.id} product={prod} featured={true} />
            ))}

            {/* Extensible Architecture Notification */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center max-w-2xl mx-auto space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-durozen-50 text-durozen-600 flex items-center justify-center mx-auto">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Looking for Custom Enterprise Billing Modules?
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Durozen Technologies customizes billing flows, electronic weighing scale drivers, warehouse dispatch slips, and ERP integrations for regional enterprise retail chains.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-durozen-600 hover:text-durozen-700 underline"
                >
                  Discuss your enterprise requirements with our engineers →
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
