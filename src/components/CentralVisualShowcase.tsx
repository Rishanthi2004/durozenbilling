"use client";

import React from "react";
import Image from "next/image";

export default function CentralVisualShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-white/40 backdrop-blur-xs border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge (Screenshot 4) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-durozen-500" />
          <span>Why Durozen</span>
        </div>

        {/* Headline (Screenshot 4) */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight max-w-3xl mx-auto mb-12">
          Changing the way, You Manage and Grow Your Business
        </h2>

        {/* 3-Column Layout: Left 3 Cards + Center Graphic + Right 3 Cards (Screenshot 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: 3 Cards */}
          <div className="lg:col-span-4 space-y-4 text-left">
            {/* Card 1 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-durozen-300 transition-all">
              <div className="flex items-center gap-1.5 font-black text-sm text-slate-900 mb-1.5">
                <span className="text-durozen-600 font-bold">*</span>
                <span>Faster Billing &amp; Checkout</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete transactions quickly, reduce customer waiting time, and increase overall checkout sales efficiency.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-durozen-300 transition-all">
              <div className="flex items-center gap-1.5 font-black text-sm text-slate-900 mb-1.5">
                <span className="text-durozen-600 font-bold">*</span>
                <span>Accurate Stock &amp; Warehouse Control</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Maintain clear visibility of your inventory across locations and avoid stock shortages or overstocking.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-durozen-300 transition-all">
              <div className="flex items-center gap-1.5 font-black text-sm text-slate-900 mb-1.5">
                <span className="text-durozen-600 font-bold">*</span>
                <span>Centralized Financial Visibility</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                View all your key financial information in one place to understand how your multi-store business is performing.
              </p>
            </div>
          </div>

          {/* Center Column: Visual Graphic / Illustration Mockup (Screenshot 4 & User Upload) */}
          <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
            <div className="w-full max-w-sm bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-lg relative text-center flex items-center justify-center">
              <div className="relative w-full h-[240px] sm:h-[280px] flex items-center justify-center">
                <Image
                  src="/illustrations/manage-and-grow.jpg"
                  alt="Changing the way, You Manage and Grow Your Business with Durozen"
                  fill
                  unoptimized
                  priority
                  className="object-contain drop-shadow-sm rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column: 3 Cards */}
          <div className="lg:col-span-4 space-y-4 text-left">
            {/* Card 4 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-durozen-300 transition-all">
              <div className="flex items-center gap-1.5 font-black text-sm text-slate-900 mb-1.5">
                <span className="text-durozen-600 font-bold">*</span>
                <span>Reduced Manual Errors</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Minimize human mistakes through barcode automation and improve the accuracy of your daily operations.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-durozen-300 transition-all">
              <div className="flex items-center gap-1.5 font-black text-sm text-slate-900 mb-1.5">
                <span className="text-durozen-600 font-bold">*</span>
                <span>Automated Low-Stock Alerts</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Send timely notifications to store managers and ensure continuous shelf availability without stock-outs.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-durozen-300 transition-all">
              <div className="flex items-center gap-1.5 font-black text-sm text-slate-900 mb-1.5">
                <span className="text-durozen-600 font-bold">*</span>
                <span>Access Anywhere, Anytime</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stay connected to your business and multi-store operations easily from desktop, tablet, or mobile devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
