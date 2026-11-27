"use client";

import React from "react";
import Link from "next/link";
import { Globe, User, PhoneCall } from "lucide-react";

export default function TopAnnouncementBar() {
  return (
    <div className="w-full">
      {/* 4-Color Brand Ribbon matching Durozen Logo (Red, Yellow, Green, Blue) */}
      <div className="h-1 w-full durozen-brand-bar" />
      <div className="bg-white/85 backdrop-blur-md border-b border-slate-200/60 py-1.5 px-4 text-xs text-slate-600 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-base leading-none">⚡</span>
            <span className="font-semibold text-slate-800">
              All-in-One Billing, Inventory &amp; POS Tracking Platform for Enterprise Business Growth
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] font-medium text-slate-500">
            <span className="flex items-center gap-1.5 hover:text-slate-800 transition-colors cursor-pointer">
              <Globe className="w-3.5 h-3.5 text-durozen-500" />
              <span>Global Edition (Multi-Currency)</span>
            </span>
            <span className="h-3 w-px bg-slate-300" />
            <Link
              href="/contact"
              className="flex items-center gap-1.5 hover:text-durozen-600 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-durozen-500" />
              <span>Support: +91 81223 39694</span>
            </Link>
            <span className="h-3 w-px bg-slate-300" />
            <Link
              href="/demo"
              className="flex items-center gap-1.5 font-bold text-durozen-600 hover:text-durozen-700 transition-colors"
            >
              <User className="w-3.5 h-3.5" />
              <span>Client Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
