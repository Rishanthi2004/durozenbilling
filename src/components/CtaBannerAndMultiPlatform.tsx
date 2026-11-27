"use client";

import React, { useState } from "react";
import {
  Globe,
  Smartphone,
  Apple,
  Monitor,
  Smile,
  Star,
} from "lucide-react";
import DemoModal from "./DemoModal";

export default function CtaBannerAndMultiPlatform() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      {/* ========================================================= */}
      {/* 1. EMERALD GREEN CTA BANNER (SCREENSHOT 9)      */}
      {/* ========================================================= */}
      <section className="bg-emerald-700 text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Title & Activate Button */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs uppercase tracking-wider text-emerald-200 font-bold block">
                Ready to Simplify Your Business?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Try Durozen free for 7 days.
              </h2>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="py-3 px-8 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider bg-white text-emerald-900 hover:bg-durozen-50 transition-all shadow-lg active:scale-98 cursor-pointer"
                >
                  Activate Free Trial
                </button>
              </div>
            </div>

            {/* Right Column: 3 Stat Badges (Screenshot 9) */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-3 text-left">
              <div className="space-y-1">
                <div className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-200">
                  <Smile className="w-4 h-4" />
                </div>
                <div className="text-sm font-black text-white">10+ Clients</div>
                <div className="text-[10px] text-emerald-200">Happy Customers</div>
              </div>

              <div className="space-y-1">
                <div className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-200">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div className="text-sm font-black text-white">Free Setup</div>
                <div className="text-[10px] text-emerald-200">Android &amp; Desktop</div>
              </div>

              <div className="space-y-1">
                <div className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-200">
                  <Star className="w-4 h-4" />
                </div>
                <div className="text-sm font-black text-white">Rated 4.9/5</div>
                <div className="text-[10px] text-emerald-200">On Google Play / Store</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. MULTI-PLATFORM ACCESS CARDS (SCREENSHOT 9)             */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-transparent relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Multi-Platform Access Designed for Every Device You Use
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Stay connected to your business anytime with secure and reliable multi-device support.
            </p>
          </div>

          {/* 4 Multi-Platform Cards (Screenshot 9) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Web */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-durozen-300 hover:shadow-card transition-all text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto text-durozen-600 shadow-2xs">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Open Web Version</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Access your business instantly from any modern web browser without installing anything.
              </p>
            </div>

            {/* Card 2: Android */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-durozen-300 hover:shadow-card transition-all text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto text-emerald-600 shadow-2xs">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Download Android App</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Full mobile experience with Android tablets and handheld POS devices for live sales.
              </p>
            </div>

            {/* Card 3: iOS */}
            <div className="p-6 rounded-3xl bg-durozen-50/60 border border-durozen-200/80 hover:shadow-card transition-all text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-durozen-200 flex items-center justify-center mx-auto text-slate-900 shadow-2xs">
                <Apple className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Get iOS App</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Access your executive reports and counter status directly from iPhone or iPad.
              </p>
            </div>

            {/* Card 4: Desktop */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-durozen-300 hover:shadow-card transition-all text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto text-durozen-600 shadow-2xs">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Install Desktop App</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Install on your Windows computer for direct ESC/POS high-speed thermal printing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
