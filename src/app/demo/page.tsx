"use client";

import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  MonitorSmartphone,
  Printer,
  Boxes,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoRequestForm from "@/components/DemoRequestForm";
import AnimatedHeroWords from "@/components/AnimatedHeroWords";

export default function BookDemoPage() {
  const [selectedSlot, setSelectedSlot] = useState("Today, 3:00 PM");

  const sampleSlots = [
    "Today, 3:00 PM",
    "Today, 5:00 PM",
    "Tomorrow, 11:00 AM",
    "Tomorrow, 2:30 PM",
    "Wednesday, 10:00 AM",
  ];

  return (
    <div className="min-h-screen bg-transparent flex flex-col selection:bg-durozen-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-white/30 backdrop-blur-xs border-b border-slate-200/60 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-durozen-500" />
              <span>Interactive 1-on-1 Walkthrough</span>
            </div>
            <AnimatedHeroWords
              title="Book a Live Software Demonstration"
              subtitle="See Durozen POS Billing System and Tracking customized live with your store's product inventory, barcode formats, and thermal receipt layouts."
            />
          </div>
        </section>

        {/* Booking Workspace */}
        <section className="py-16 sm:py-24 bg-white/40 backdrop-blur-xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: What to expect in the demo */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
                  <h3 className="text-lg font-bold text-slate-900">
                    What You Will Experience in the Demo:
                  </h3>

                  <div className="space-y-4 text-xs text-slate-600">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-durozen-50 text-durozen-600 flex items-center justify-center flex-shrink-0">
                        <MonitorSmartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Live POS Counter Run</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          High-speed barcode scanning simulation with sub-second ticket creation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-durozen-50 text-durozen-600 flex items-center justify-center flex-shrink-0">
                        <Printer className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">0.4s Thermal Print Test</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Verification with your specific ESC/POS thermal printer models and cash drawers.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-durozen-50 text-durozen-600 flex items-center justify-center flex-shrink-0">
                        <Boxes className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Inventory Reconciliation</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Instant stock deduction, batch/expiry alerts, and low stock warnings.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Slot selector pill preview */}
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Preferred Demonstration Time:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {sampleSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all ${
                            selectedSlot === slot
                              ? "bg-durozen-500 text-white border-durozen-500 font-bold"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-durozen-50 border border-durozen-200 text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Free 20-minute tailored session. Zero credit card or hardware required.</span>
                </div>
              </div>

              {/* Right Column: Demo Form */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-durozen-600">
                    Step 1 of 1
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    Enter Your Store & Contact Details
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Selected window: <span className="font-bold text-slate-800">{selectedSlot}</span>
                  </p>
                </div>

                <DemoRequestForm isCompact={false} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
