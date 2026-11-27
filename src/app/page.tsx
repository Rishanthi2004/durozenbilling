"use client";

import React, { useState } from "react";
import {
  Sparkles,
  MonitorSmartphone,
} from "lucide-react";
import TopAnnouncementBar from "@/components/TopAnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroRaseedStyle from "@/components/HeroRaseedStyle";
import EcosystemTabs from "@/components/EcosystemTabs";
import CentralVisualShowcase from "@/components/CentralVisualShowcase";
import LeadFutureFeatures from "@/components/LeadFutureFeatures";
import InteractivePOSDemo from "@/components/InteractivePOSDemo";
import ProductCard from "@/components/ProductCard";
import IndustriesShowcase from "@/components/IndustriesShowcase";
import StatsCounter from "@/components/StatsCounter";
import ReviewsSection from "@/components/ReviewsSection";
import TwoColumnFaq from "@/components/TwoColumnFaq";
import CtaBannerAndMultiPlatform from "@/components/CtaBannerAndMultiPlatform";
import DemoRequestForm from "@/components/DemoRequestForm";
import RaseedStyleFooter from "@/components/RaseedStyleFooter";
import FloatingControls from "@/components/FloatingControls";
import DemoModal from "@/components/DemoModal";
import { DUROZEN_PRODUCTS } from "@/data/products";

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent flex flex-col selection:bg-durozen-500 selection:text-white relative">
      {/* 1. Top Announcement Bar (Screenshot 5) */}
      <TopAnnouncementBar />

      {/* 2. Floating Pill Navigation Bar (Screenshot 1-10) */}
      <Navbar />

      <main className="flex-grow">
        {/* 3. Hero Section with Dynamic Rotating Text & Multi-Device Mockup (Screenshot 5 & 7) */}
        <HeroRaseedStyle />

        {/* 4. Ecosystem Tabs: "Run Your Entire Business Ecosystem Seamlessly" (Screenshot 1 & 3) */}
        <EcosystemTabs />

        {/* 5. Central Visual: "Changing the way, You Manage and Grow Your Business" (Screenshot 4) */}
        <CentralVisualShowcase />

        {/* 6. "We create features that Lead the Future of Business" (Screenshot 2) */}
        <LeadFutureFeatures />

        {/* 7. Interactive Live POS Workbench & Simulator */}
        <section className="py-20 sm:py-28 bg-white/40 backdrop-blur-xs border-y border-slate-200/60 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-durozen-500" />
                <span>Live Software Simulator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Experience the Speed of Durozen POS
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Tap items to add them to your cart, test tax calculations, inspect the 0.4s thermal receipt cut, and view real-time stock deduction.
              </p>
            </div>

            <InteractivePOSDemo />
          </div>
        </section>

        {/* 8. Products Showcase (Software That Works for Your Business) */}
        <section id="products-showcase" className="py-20 bg-transparent relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-3 shadow-xs">
                <MonitorSmartphone className="w-3.5 h-3.5 text-durozen-500" />
                <span>Confirmed Product Catalog</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Software That Works for Your Business
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Engineered specifically for high-velocity supermarket lanes, retail chains, and wholesale distributors.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {DUROZEN_PRODUCTS.map((prod) => (
                <ProductCard key={prod.id} product={prod} featured={true} />
              ))}
            </div>
          </div>
        </section>

        {/* 9. Verified Company Strengths Bar (35+, 10+, 3, 12+, 2+) */}
        <section className="py-10 sm:py-12 bg-white/40 backdrop-blur-xs border-y border-slate-200/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-durozen-700">
                Engineering Strength Behind Durozen
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                Proven Track Record
              </h3>
            </div>
            <StatsCounter />
          </div>
        </section>

        {/* 10. Industry Showcase */}
        <IndustriesShowcase />

        {/* 11. Customer Reviews (Screenshot 6) */}
        <ReviewsSection />

        {/* 12. Two-Column Frequently Asked Questions (Screenshot 8) */}
        <TwoColumnFaq />

        {/* 13. CTA Banner & Multi-Platform Access (Screenshot 9) */}
        <CtaBannerAndMultiPlatform />

        {/* 14. Demo Request Form Section */}
        <section id="demo-request-section" className="py-20 bg-white/30 backdrop-blur-xs border-t border-slate-200/60 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 durozen-brand-bar" />

              <div className="text-center max-w-xl mx-auto mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-durozen-500" />
                  <span>Personalized Walkthrough</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Schedule a Customized Product Demo
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  See how Durozen POS operates with your product catalog, barcode formats, and thermal receipt layouts.
                </p>
              </div>

              <DemoRequestForm isCompact={false} />
            </div>
          </div>
        </section>
      </main>

      {/* 15. Raseed-Style Deep Navy Footer with Cityscape & Branch Offices (Screenshot 10) */}
      <RaseedStyleFooter />

      {/* 16. Floating Controls: WhatsApp Live Chat + Scroll-to-Top (Screenshot 1-10) */}
      <FloatingControls />

      {/* Global Book a Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
