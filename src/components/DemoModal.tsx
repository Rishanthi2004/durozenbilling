"use client";

import React, { useEffect, useState } from "react";
import { X, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import DemoRequestForm from "./DemoRequestForm";
import DurozenLogo from "./DurozenLogo";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function DemoModal({
  isOpen,
  onClose,
  productName = "Durozen POS Billing System and Tracking",
}: DemoModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm">
      <div className="min-h-full flex items-start justify-center p-3 sm:p-6 py-6 sm:py-10 text-left">
        {/* Backdrop click dismiss area */}
        <div
          className="fixed inset-0 -z-10"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Dialog */}
        <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
          {/* Top brand accent bar matching 4-color logo */}
          <div className="h-1.5 w-full durozen-brand-bar" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors focus:outline-none z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-5 sm:p-8">
            {/* Header */}
            <div className="mb-5 sm:mb-6">
              <div className="flex items-center gap-2 mb-2">
                <DurozenLogo size="sm" withLink={false} />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-durozen-600 bg-durozen-50 border border-durozen-200/60 px-2 py-0.5 rounded-full">
                  Interactive Session
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                Book a Live Software Demonstration
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                Experience Durozen&apos;s intelligent billing speed, inventory synchronization, and thermal printing configured for your specific retail or wholesale workflows.
              </p>

              {/* Quick value badges */}
              <div className="flex flex-wrap items-center gap-3 mt-3.5 pt-3.5 border-t border-slate-100 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-durozen-500" /> 20-min tailored walkthrough
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-durozen-500" /> Live hardware compatibility check
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Zero obligation
                </span>
              </div>
            </div>

            {/* Form */}
            <DemoRequestForm
              initialSoftware={productName}
              onSuccess={() => {
                setTimeout(() => {
                  onClose();
                }, 2500);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
