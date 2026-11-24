"use client";

import React from "react";
import Link from "next/link";
import { Mail, MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import DurozenLogo from "./DurozenLogo";
import { COMPANY_STATS } from "@/data/products";

export default function RaseedStyleFooter() {
  return (
    <footer className="bg-[#0b1a30] text-slate-300 relative overflow-hidden">
      {/* Top Skyline / Road Illustration Motif (Screenshot 10) */}
      <div className="w-full bg-[#132a4a] border-b border-slate-700/60 py-3 px-4 overflow-hidden select-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between opacity-80 text-slate-400 text-xs">
          {/* Animated decorative city street elements */}
          <div className="flex items-center gap-8 text-[11px] font-mono tracking-wider">
            <span>🏢 RETAIL HUBS</span>
            <span>🏪 SUPERMARKETS</span>
            <span>🚚 DISPATCH LOGISTICS</span>
            <span className="hidden sm:inline">⚡ SUB-SECOND BILLING</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono">
            ● 99.99% PRODUCTION UPTIME
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center space-y-8">
        {/* Central Logo (Screenshot 10) */}
        <div className="flex justify-center">
          <div className="bg-white/10 hover:bg-white/15 backdrop-blur-sm p-4 rounded-2xl inline-block border border-white/15 transition-colors">
            <DurozenLogo size="lg" variant="dark" />
          </div>
        </div>

        {/* Company Description */}
        <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Durozen Technologies offers powerful POS billing, inventory reconciliation, and tracking software for businesses. Create compliant tax invoices, manage multi-store branches, track stock and boost counter sales with ease.
        </p>

        {/* Registration & Contact Info (Screenshot 10) */}
        <div className="space-y-2 text-xs text-slate-300 font-mono">
          <div>
            <span className="text-slate-400">Enterprise License &amp; Reg: </span>
            <span className="font-bold text-white">DUROZEN-TECH-2026-ENT</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1 font-sans">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-durozen-400" />
              <span>Write to us: </span>
              <a href="mailto:info@durozen.in" className="text-white hover:text-durozen-400 font-semibold underline">
                info@durozen.in
              </a>
            </div>

            <span className="hidden sm:inline text-slate-600">•</span>

            <div className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Chat on WhatsApp: </span>
              <a
                href="https://wa.me/918122339694?text=Hello%20Durozen%20Technologies,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 font-semibold underline"
              >
                +91 81223 39694
              </a>
            </div>
          </div>
        </div>

        {/* Google Preferred Source / Partner Card (Screenshot 10) */}
        <div className="pt-2 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white text-slate-900 px-5 py-2.5 rounded-full shadow-lg border border-slate-200 text-xs font-bold">
            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-durozen-600 font-black">
              G
            </div>
            <span>PREFER US ON GOOGLE</span>
            <span className="text-amber-500">★</span>
            <span className="text-slate-500 font-normal">Add as preferred source</span>
          </div>
        </div>

        {/* Bottom Multi-Branch Locations Strip (Screenshot 10) */}
        <div className="pt-10 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs text-slate-400">
          <div className="flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-durozen-500" />
            <a
              href="https://www.google.com/maps/place/Durozen+Technologies+Private+Limited/@11.148956,78.215225,15z/data=!4m6!3m5!1s0x3babcbd8fe6408d7:0x70d17da5da2fc025!8m2!3d11.1489563!4d78.215225!16s%2Fg%2F11z69cpfgz?hl=en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Headquarters: Namakkal, Tamil Nadu
            </a>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-durozen-500" />
            <span>Branch Office (Singapore)</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-durozen-500" />
            <span>Branch Office (Dubai, UAE)</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{COMPANY_STATS.projects} Projects Delivered</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-800/60 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Durozen Technologies. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-slate-300">About</Link>
            <Link href="/products" className="hover:text-slate-300">Products</Link>
            <Link href="/industries" className="hover:text-slate-300">Industries</Link>
            <Link href="/contact" className="hover:text-slate-300">Contact</Link>
          </div>
        </div>
      </div>

      {/* 4-Color Brand Ribbon matching Durozen Logo (Red, Yellow, Green, Blue) */}
      <div className="h-1.5 w-full durozen-brand-bar mt-6" />
    </footer>
  );
}
