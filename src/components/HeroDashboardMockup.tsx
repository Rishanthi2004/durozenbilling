"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  CreditCard,
  Printer,
  Boxes,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Zap,
  Barcode,
  Receipt,
  Server,
} from "lucide-react";
import DurozenLogo from "./DurozenLogo";

export default function HeroDashboardMockup() {
  const [activeTab, setActiveTab] = useState<"pos" | "analytics" | "inventory">("pos");

  return (
    <div className="relative w-full max-w-2xl lg:max-w-none mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-durozen-500/20 via-durozen-400/10 to-indigo-300/15 rounded-3xl blur-2xl -z-10" />

      {/* Main Software Window Container */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden ring-1 ring-slate-900/5"
      >
        {/* Top Window Bar */}
        <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800 text-xs">
          {/* Window controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="hidden sm:flex items-center gap-2 ml-4 pl-3 border-l border-slate-800 text-slate-300 font-mono text-[11px]">
              <DurozenLogo size="xs" variant="dark" withLink={false} showSubtitle={false} />
              <span className="font-semibold text-white ml-1">POS SYSTEM</span>
              <span className="text-slate-500">v3.4.2</span>
            </div>
          </div>

          {/* Terminal / Store Status */}
          <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
            <span className="inline-flex items-center gap-1 bg-emerald-950/80 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Terminal #01: Online
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Server className="w-3 h-3 text-durozen-400" /> LAN + Cloud Synced
            </span>
          </div>
        </div>

        {/* Dashboard Navigation & Subheader */}
        <div className="bg-slate-50 border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab("pos")}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === "pos"
                  ? "bg-white text-durozen-600 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Touch Billing Counter
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === "analytics"
                  ? "bg-white text-durozen-600 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Live Velocity Analytics
            </button>
            <button
              onClick={() => setActiveTab("inventory")}
              className={`hidden sm:block px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === "inventory"
                  ? "bg-white text-durozen-600 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Stock Reconciliation
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px]">
            <Clock className="w-3.5 h-3.5 text-durozen-500" />
            <span className="hidden sm:inline">Shift Open:</span> 08:30 AM
          </div>
        </div>

        {/* Dynamic Mockup Body */}
        <div className="p-4 sm:p-5 bg-white">
          {/* Top Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-durozen-50/70 border border-durozen-100">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Today&apos;s Sales</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-base sm:text-lg font-black text-slate-900">$8,492.50</span>
                <span className="text-[10px] font-bold text-emerald-600 flex items-center">
                  <ArrowUpRight className="w-2.5 h-2.5" /> +24%
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Bills Issued</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-base sm:text-lg font-black text-slate-900">342</span>
                <span className="text-[10px] text-slate-500 font-medium">bills</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Checkout Avg</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-base sm:text-lg font-black text-slate-900">1.2s</span>
                <span className="text-[10px] text-durozen-600 font-bold">Fast</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Thermal Printer</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-base sm:text-lg font-black text-emerald-600">Ready</span>
                <span className="text-[10px] text-slate-500">0.4s cut</span>
              </div>
            </div>
          </div>

          {/* Active POS Screen Simulation */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
            {/* Left 7 cols: Scanned Line Items */}
            <div className="md:col-span-7 rounded-xl border border-slate-200 p-3 bg-slate-50/50">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 text-xs">
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Barcode className="w-3.5 h-3.5 text-durozen-600" />
                  Current Ticket #INV-08493
                </span>
                <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                  Scan: [EAN-13 Active]
                </span>
              </div>

              {/* Item Rows */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100 shadow-2xs">
                  <div>
                    <div className="font-bold text-slate-900">Artisan Roast Coffee Beans 500g</div>
                    <div className="text-[10px] text-slate-400 font-mono">SKU-9921 • 2x $14.50 • Tax 5%</div>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-slate-900">$29.00</span>
                    <span className="block text-[9px] text-emerald-600 font-semibold">Stock: 48 left</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100 shadow-2xs">
                  <div>
                    <div className="font-bold text-slate-900">Cold Pressed Extra Virgin Oil 1L</div>
                    <div className="text-[10px] text-slate-400 font-mono">SKU-7720 • 1x $22.00 • Tax 5%</div>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-slate-900">$22.00</span>
                    <span className="block text-[9px] text-emerald-600 font-semibold">Stock: 112 left</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100 shadow-2xs">
                  <div>
                    <div className="font-bold text-slate-900">Organic Whole Farm Milk 1L</div>
                    <div className="text-[10px] text-slate-400 font-mono">SKU-4021 • 2x $4.25 • Tax 0%</div>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-slate-900">$8.50</span>
                    <span className="block text-[9px] text-amber-600 font-semibold">Low Stock: 4 left</span>
                  </div>
                </div>
              </div>

              {/* Subtotal Calculation */}
              <div className="mt-3 pt-2.5 border-t border-slate-200 text-xs space-y-1">
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>Subtotal (5 items)</span>
                  <span className="font-mono font-medium">$59.50</span>
                </div>
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>Applied Tax (GST / VAT)</span>
                  <span className="font-mono font-medium">$4.76</span>
                </div>
                <div className="flex justify-between text-slate-900 font-extrabold text-sm pt-1 border-t border-slate-200">
                  <span className="text-durozen-600">Total Payable</span>
                  <span className="font-mono text-base text-slate-900">$64.26</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Tender Payment & Instant Thermal Print Trigger */}
            <div className="md:col-span-5 rounded-xl border border-slate-200 p-3 bg-gradient-to-b from-slate-50 to-white flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block mb-2">
                  Instant Payment Tender
                </span>

                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  <div className="p-2 rounded-lg border border-durozen-500 bg-durozen-50/50 text-center cursor-pointer">
                    <CreditCard className="w-4 h-4 text-durozen-600 mx-auto mb-1" />
                    <span className="text-[10px] font-bold text-durozen-700 block">Card</span>
                  </div>
                  <div className="p-2 rounded-lg border border-slate-200 bg-white text-center cursor-pointer hover:border-slate-300">
                    <Receipt className="w-4 h-4 text-slate-600 mx-auto mb-1" />
                    <span className="text-[10px] font-bold text-slate-700 block">Cash</span>
                  </div>
                  <div className="p-2 rounded-lg border border-slate-200 bg-white text-center cursor-pointer hover:border-slate-300">
                    <Zap className="w-4 h-4 text-slate-600 mx-auto mb-1" />
                    <span className="text-[10px] font-bold text-slate-700 block">UPI QR</span>
                  </div>
                </div>

                {/* Instant thermal dispatch badge */}
                <div className="p-2.5 rounded-lg bg-durozen-50 border border-durozen-200/80 mb-3 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-[11px]">
                    <Printer className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Auto Thermal Cut: Enabled</span>
                  </div>
                  <p className="text-[10px] text-emerald-700 mt-0.5 leading-snug">
                    Direct ESC/POS 80mm driver • Cash drawer pop command attached
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="w-full py-2.5 px-3 rounded-lg font-bold text-xs text-white bg-durozen-500 hover:bg-durozen-600 shadow-sm flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Issue Bill & Print (0.4s)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 5 FLOATING UI ELEMENTS (Animated Smoothly) */}

      {/* 1. Floating Sales Overview (Top Right) */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-2 sm:-right-8 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-200/90 z-20 hidden sm:block max-w-[210px]"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-durozen-50 text-durozen-600 flex items-center justify-center">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Sales Velocity
            </div>
            <div className="text-sm font-black text-slate-900">+38.2%</div>
          </div>
        </div>
        <div className="mt-1.5 flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
          <ArrowUpRight className="w-3 h-3" />
          <span>Peak counter traffic</span>
        </div>
      </motion.div>

      {/* 2. Floating Recent Transactions (Bottom Left) */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-8 -left-2 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-200/90 z-20 max-w-[240px]"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
            <Clock className="w-3 h-3 text-durozen-500" /> Recent Bills
          </span>
          <span className="text-[9px] font-bold text-emerald-600 bg-durozen-50 px-1.5 py-0.5 rounded">
            Live Feed
          </span>
        </div>
        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between border-b border-slate-100 pb-1">
            <span className="font-semibold text-slate-800">#INV-8492</span>
            <span className="font-mono font-bold text-slate-900">$128.50</span>
            <span className="text-[9px] text-emerald-600 font-medium">Card</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-800">#INV-8491</span>
            <span className="font-mono font-bold text-slate-900">$45.00</span>
            <span className="text-[9px] text-durozen-600 font-medium">UPI</span>
          </div>
        </div>
      </motion.div>

      {/* 3. Floating Revenue Analytics (Mid Left) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 -left-6 sm:-left-12 bg-slate-900 text-white rounded-2xl p-3 shadow-2xl border border-slate-800 z-20 hidden lg:block"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-2 h-2 rounded-full bg-durozen-500 animate-ping" />
          <span className="text-[10px] font-mono uppercase text-slate-400">Week-to-date</span>
        </div>
        <div className="text-base font-black text-white">$42,850.00</div>
        <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
          99.98% Gross Reconciliation
        </div>
      </motion.div>

      {/* 4. Floating Inventory Information (Mid/Bottom Right) */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-6 -right-4 sm:-right-10 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-200/90 z-20 hidden sm:block max-w-[210px]"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-durozen-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
            <Boxes className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
              Stock Reconciled
            </div>
            <div className="text-xs font-black text-slate-900">1,420 Items Synced</div>
          </div>
        </div>
        <div className="mt-1.5 text-[10px] text-slate-500 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
          <span>Zero stock variance</span>
        </div>
      </motion.div>

      {/* 5. Floating Billing Summary Pill (Top Center/Left) */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute -top-4 left-6 sm:left-14 bg-gradient-to-r from-durozen-500 to-durozen-600 text-white rounded-full px-3.5 py-1.5 shadow-lg shadow-durozen-500/25 z-20 flex items-center gap-2 text-xs font-bold"
      >
        <Printer className="w-3.5 h-3.5 text-emerald-200" />
        <span>Thermal Cut 0.4s • ESC/POS Native</span>
      </motion.div>
    </div>
  );
}
