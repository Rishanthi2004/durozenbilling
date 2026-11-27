"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Printer,
  Boxes,
  Zap,
  ChevronDown,
  MonitorSmartphone,
  ScanLine,
  Store,
  Layers,
  Activity,
  BarChart3,
  HelpCircle,
  Cpu,
  ShoppingCart,
  ShoppingBag,
  Utensils,
  Truck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import DemoRequestForm from "@/components/DemoRequestForm";
import AnimatedHeroWords from "@/components/AnimatedHeroWords";
import { Product } from "@/data/products";

type GalleryTab = "billing" | "tracking" | "inventory" | "thermal" | "reports";

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const [activeGalleryTab, setActiveGalleryTab] = useState<GalleryTab>("billing");
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const businessIconMap: Record<string, React.ReactNode> = {
    ShoppingCart: <ShoppingCart className="w-5 h-5" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5" />,
    Utensils: <Utensils className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    Truck: <Truck className="w-5 h-5" />,
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-durozen-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* ========================================================= */}
        {/* 1. PRODUCT HERO HEADER                                    */}
        {/* ========================================================= */}
        <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white/30 backdrop-blur-xs border-b border-slate-200/60 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
              <Link href="/" className="hover:text-durozen-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-durozen-600 transition-colors">
                Products
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold">{product.name}</span>
            </div>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-durozen-500 animate-pulse" />
                <span>{product.statusBadge}</span>
              </div>

              <AnimatedHeroWords
                title={product.name}
                subtitle={product.tagline}
                align="left"
                titleClassName="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
                subtitleClassName="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
              />

              <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="py-3.5 px-7 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-durozen-500 to-durozen-600 hover:from-durozen-600 hover:to-durozen-700 shadow-md shadow-durozen-500/25 hover:shadow-lg hover:shadow-durozen-500/35 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>Request a Guided Demo</span>
                </button>

                <a
                  href="#interface-gallery"
                  className="py-3.5 px-6 rounded-xl font-bold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-2"
                >
                  <span>Explore Interface Gallery</span>
                  <ArrowRight className="w-4 h-4 text-durozen-500" />
                </a>
              </div>

              {/* Hero Metric Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 pt-8 border-t border-slate-200/80">
                {product.heroStats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide block">
                      {stat.label}
                    </span>
                    <span className="text-lg sm:text-xl font-black text-slate-900 font-mono block mt-1">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. SOFTWARE INTERFACE GALLERY                             */}
        {/* ========================================================= */}
        <section id="interface-gallery" className="py-20 sm:py-28 bg-transparent relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-3">
                <MonitorSmartphone className="w-3.5 h-3.5 text-durozen-500" />
                <span>Software Interface Gallery</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Authentic Software Demonstrations
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Explore the modular terminal interfaces engineered specifically for Durozen POS Billing and Tracking.
              </p>
            </div>

            {/* Gallery Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {[
                { id: "billing", label: "Touch Billing Counter", icon: <ScanLine className="w-4 h-4" /> },
                { id: "tracking", label: "Live Dispatch & Tracking", icon: <Activity className="w-4 h-4" /> },
                { id: "inventory", label: "Inventory Reconciliation", icon: <Boxes className="w-4 h-4" /> },
                { id: "thermal", label: "Thermal Receipt Engine", icon: <Printer className="w-4 h-4" /> },
                { id: "reports", label: "Executive Reports", icon: <BarChart3 className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGalleryTab(tab.id as GalleryTab)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                    activeGalleryTab === tab.id
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Gallery Display Container */}
            <div className="bg-slate-900 rounded-3xl p-4 sm:p-8 shadow-2xl border border-slate-800 text-white overflow-hidden">
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-mono text-slate-300 ml-3">
                    DUROZEN_POS_TERMINAL // {activeGalleryTab.toUpperCase()}_VIEW
                  </span>
                </div>
                <div className="font-mono text-emerald-400 flex items-center gap-1 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Module Active</span>
                </div>
              </div>

              {/* View 1: Billing */}
              {activeGalleryTab === "billing" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-5 border border-slate-800 font-mono text-xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-durozen-400 font-bold">CURRENT BILL #INV-4921</span>
                      <span className="text-slate-400">COUNTER: 01 (MAIN LANE)</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <span>[EAN-13] 8901030012 // Premium Basmati 5kg</span>
                        <span className="text-white font-bold">$18.50</span>
                      </div>
                      <div className="flex justify-between bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <span>[EAN-13] 8901030991 // Pure Ghee 1L</span>
                        <span className="text-white font-bold">$14.20</span>
                      </div>
                      <div className="flex justify-between bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <span>[TOUCH] Bakery Sourdough Loaf</span>
                        <span className="text-white font-bold">$4.50</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex justify-between text-sm">
                      <span className="text-slate-400">TOTAL (3 ITEMS + TAX)</span>
                      <span className="text-emerald-400 font-black text-base">$39.06</span>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <span className="bg-durozen-500/20 text-durozen-400 px-3 py-1.5 rounded text-[11px] font-bold">
                        F1: CASH
                      </span>
                      <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded text-[11px]">
                        F2: CARD
                      </span>
                      <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded text-[11px]">
                        F3: UPI QR
                      </span>
                      <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded text-[11px]">
                        F4: SPLIT
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-durozen-400 uppercase tracking-wider">
                      <Zap className="w-4 h-4" />
                      Sub-Second Touch & Barcode Flow
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      Designed for Rapid Cashier Muscle Memory
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Zero mouse clicks required. Cashiers can operate 100% via keyboard hotkeys or high-response touch screen grids, keeping checkout lane times under 1.5 seconds per bill.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-300 pt-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Barcode, QR code, and RFID automated reading</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Instant split-tender settlement with change calculation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Offline billing buffer with zero downtime during network loss</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* View 2: Tracking */}
              {activeGalleryTab === "tracking" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-5 border border-slate-800 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-durozen-400 font-bold">LIVE ORDER TRACKING & DISPATCH</span>
                      <span className="text-emerald-400">SYNC: 0.1s LATENCY</span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white">#ORD-9021 • Customer: Metro Grocery Wholesalers</div>
                          <div className="text-[11px] text-slate-400">42 line items • Dispatched via Truck #04</div>
                        </div>
                        <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded text-[10px] font-bold">
                          OUT FOR DELIVERY
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white">#ORD-9022 • Customer: Green Leaf Cafe</div>
                          <div className="text-[11px] text-slate-400">12 line items • Packing in progress at Bay 2</div>
                        </div>
                        <span className="bg-amber-950 text-amber-400 border border-amber-800 px-2 py-0.5 rounded text-[10px] font-bold">
                          PACKING VERIFIED
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white">#ORD-9023 • Walk-in Parcel Dispatch</div>
                          <div className="text-[11px] text-slate-400">Billed at Counter 02 • Thermal dispatch tag printed</div>
                        </div>
                        <span className="bg-durozen-950 text-durozen-400 border border-durozen-800 px-2 py-0.5 rounded text-[10px] font-bold">
                          DISPATCH READY
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-durozen-400 uppercase tracking-wider">
                      <Activity className="w-4 h-4" />
                      Live Order Telemetry
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      End-to-End Fulfillment Tracking
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Track orders from the split second a counter bill is generated until physical delivery, parcel dispatch, or wholesale warehouse handoff.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-300 pt-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Live counter terminal status monitoring</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Barcode scan verification before goods exit loading dock</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* View 3: Inventory */}
              {activeGalleryTab === "inventory" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-5 border border-slate-800 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-durozen-400 font-bold">INVENTORY RECONCILIATION ENGINE</span>
                      <span className="text-slate-400">ALERTS: 2 LOW STOCK</span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white">SKU-9921 • Espresso Beans 500g</div>
                          <div className="text-[11px] text-slate-400">Batch: B-2026-04 • Exp: Nov 2027</div>
                        </div>
                        <div className="text-right">
                          <span className="text-emerald-400 font-bold">48 in stock</span>
                          <span className="block text-[10px] text-slate-500">Min: 20 units</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900 border border-amber-800/60 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-amber-300">SKU-4021 • Organic Whole Milk 1L</div>
                          <div className="text-[11px] text-slate-400">Batch: B-2026-99 • Exp: 3 days remaining</div>
                        </div>
                        <div className="text-right">
                          <span className="text-amber-400 font-bold">4 units left</span>
                          <span className="block text-[10px] text-amber-500">Auto PO Triggered</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-durozen-400 uppercase tracking-wider">
                      <Boxes className="w-4 h-4" />
                      Zero Discrepancy Assurance
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      Immediate Stock Deduction
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Every transaction locks and decreases inventory in real time. Batch and expiry alerts prevent accidental sales of expired products.
                    </p>
                  </div>
                </div>
              )}

              {/* View 4: Thermal */}
              {activeGalleryTab === "thermal" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-5 border border-slate-800 font-mono text-xs space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-durozen-400 font-bold">DIRECT-TO-PRINTER ESC/POS STREAM</span>
                      <span className="text-emerald-400">PRINT VELOCITY: 0.4s</span>
                    </div>

                    <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-[11px] text-slate-300">
                      <div>{"// PORT: /dev/usb/lp0 [ESC/POS Native Mode]"}</div>
                      <div>{"&gt; SEND_ESC_INIT [0x1B, 0x40] ... OK"}</div>
                      <div>{"&gt; RENDER_HEADER \"DUROZEN TECHNOLOGIES\" ... OK"}</div>
                      <div>{"&gt; RENDER_BARCODE_CODE128 \"INV-84920492810\" ... OK"}</div>
                      <div>{"&gt; TRIGGER_CASH_DRAWER_PULSE [0x1B, 0x70] ... OK"}</div>
                      <div>{"&gt; AUTO_CUT_PARTIAL [0x1D, 0x56, 0x01] ... EXECUTED IN 380ms"}</div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-durozen-400 uppercase tracking-wider">
                      <Printer className="w-4 h-4" />
                      Hardware Integration
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      Native Thermal Drivers
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Direct raw byte communication bypasses heavy operating system print dialogs, triggering lightning-fast receipt cutting and cash drawer pops.
                    </p>
                  </div>
                </div>
              )}

              {/* View 5: Reports */}
              {activeGalleryTab === "reports" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-5 border border-slate-800 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-durozen-400 font-bold">DAILY Z-REPORT CLOSING SUMMARY</span>
                      <span className="text-slate-400">AUDIT READY</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-slate-300">
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">GROSS TURNOVER</span>
                        <span className="text-base font-bold text-white">$8,492.50</span>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">TOTAL INVOICES</span>
                        <span className="text-base font-bold text-white">342 Bills</span>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">TAX COLLECTED (GST)</span>
                        <span className="text-base font-bold text-emerald-400">$679.40</span>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">DRAWER VARIANCE</span>
                        <span className="text-base font-bold text-emerald-400">$0.00 (Balanced)</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-durozen-400 uppercase tracking-wider">
                      <BarChart3 className="w-4 h-4" />
                      Executive Insights
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      Automated Tax & Shift Reconciliation
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Generate end-of-day Z-reports with one click, reconcile physical cash with digital tallies, and export GST/VAT reports directly for your accountants.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. STEP-BY-STEP WORKFLOW DEMONSTRATION                    */}
        {/* ========================================================= */}
        <section className="py-20 sm:py-28 bg-white/40 backdrop-blur-xs border-y border-slate-200/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-3">
                <Layers className="w-3.5 h-3.5 text-durozen-500" />
                <span>Operational Pipeline</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Step-by-Step Checkout & Tracking Workflow
              </h2>
              <p className="mt-3 text-base text-slate-600">
                How Durozen POS orchestrates every billing transaction across your hardware, counter, and cloud ledger.
              </p>
            </div>

            {/* Stepper Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {product.workflow.map((step) => {
                const isActive = step.step === activeWorkflowStep;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveWorkflowStep(step.step)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      isActive
                        ? "bg-white border-durozen-500 shadow-md ring-1 ring-durozen-500/20"
                        : "bg-white/80 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center ${
                          isActive
                            ? "bg-durozen-500 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        0{step.step}
                      </span>
                    </div>
                    <h4
                      className={`text-xs sm:text-sm font-bold transition-colors line-clamp-1 ${
                        isActive ? "text-durozen-600" : "text-slate-800"
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                      {step.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Workflow Card */}
            {(() => {
              const activeStepData =
                product.workflow.find((s) => s.step === activeWorkflowStep) ||
                product.workflow[0];
              return (
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 max-w-4xl mx-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-mono uppercase text-durozen-600 font-bold block">
                        STAGE 0{activeStepData.step} OF 05
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                        {activeStepData.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">{activeStepData.subtitle}</p>
                    </div>

                    <div className="px-3 py-1.5 rounded-xl bg-durozen-50 border border-durozen-200 text-durozen-700 text-xs font-mono font-bold">
                      Automated Pipeline
                    </div>
                  </div>

                  <p className="text-base text-slate-700 leading-relaxed mb-6">
                    {activeStepData.description}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs flex items-center justify-between">
                    <span className="text-slate-400">System Telemetry Log:</span>
                    <span className="font-bold">{activeStepData.screenSnippet}</span>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. SUPPORTED BUSINESS TYPES                               */}
        {/* ========================================================= */}
        <section className="py-20 sm:py-28 bg-transparent relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-3">
                <Store className="w-3.5 h-3.5 text-durozen-500" />
                <span>Compatible Business Types</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Validated for Diverse Commercial Setups
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Verified configurations ready for instant rollout across different business models.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.supportedBusinessTypes.map((biz, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200 hover:border-durozen-300 transition-all shadow-card hover:shadow-card-hover"
                >
                  <div className="w-12 h-12 rounded-2xl bg-durozen-50 text-durozen-600 flex items-center justify-center mb-4">
                    {businessIconMap[biz.icon] || <Store className="w-6 h-6" />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{biz.name}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {biz.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-200 text-xs">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Recommended Hardware Setup:
                    </span>
                    <span className="font-semibold text-slate-800 mt-0.5 block">
                      {biz.popularSetup}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. MEASURABLE BUSINESS BENEFITS                           */}
        {/* ========================================================= */}
        <section className="py-20 sm:py-28 bg-slate-900 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-durozen-400">
                Tangible Return on Investment
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
                Operational Advantages with Durozen POS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-800/90 border border-slate-700/80 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-black text-durozen-400 font-mono block mb-2">
                      {b.metric}
                    </span>
                    <h3 className="text-base font-bold text-white">{b.title}</h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified in Production
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. TECHNICAL HARDWARE & SYSTEM SPECS                      */}
        {/* ========================================================= */}
        <section className="py-16 bg-transparent border-b border-slate-200/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-durozen-600" />
                Technical Specifications & Driver Architecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200/80">
                    <span className="text-[11px] text-slate-400 font-medium block">{spec.label}</span>
                    <span className="text-xs font-bold text-slate-800 block mt-0.5">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. FREQUENTLY ASKED QUESTIONS                             */}
        {/* ========================================================= */}
        <section className="py-20 sm:py-28 bg-transparent relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-durozen-500" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Clear Answers for Business Owners
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Everything you need to know about implementing Durozen POS in your retail environment.
              </p>
            </div>

            <div className="space-y-4">
              {product.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-durozen-600 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? "rotate-180 text-durozen-500" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. REQUEST A DEMO CTA                                     */}
        {/* ========================================================= */}
        <section className="py-20 bg-white/40 backdrop-blur-xs border-t border-slate-200/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-durozen-600">
                  Ready to Accelerate Your Checkout?
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                  Request a Demo of {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2">
                  Our engineers will show you how to configure fast billing, inventory reconciliation, and thermal printing for your store.
                </p>
              </div>

              <DemoRequestForm initialSoftware={product.name} />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        productName={product.name}
      />
    </div>
  );
}
