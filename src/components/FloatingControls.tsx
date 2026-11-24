"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp, MessageCircle } from "lucide-react";
import DemoModal from "./DemoModal";

export default function FloatingControls() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Scroll to Top Button (Bottom Left, like in Raseed screenshot) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center shadow-lg shadow-emerald-900/20 transition-all transform hover:-translate-y-1 active:translate-y-0"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 stroke-[2.5]" />
        </button>
      )}

      {/* Floating WhatsApp / Live Chat Pill (Bottom Right, exactly like Raseed screenshot) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
        <a
          href="https://wa.me/918122339694?text=Hello%20Durozen%20Technologies,%20I%20would%20like%20to%20enquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center bg-white border border-slate-200/90 shadow-xl rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
        >
          <span>Need Help? Chat with us</span>
        </a>

        <a
          href="https://wa.me/918122339694?text=Hello%20Durozen%20Technologies,%20I%20would%20like%20to%20enquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-transform transform hover:scale-105 active:scale-95"
          aria-label="Chat with Durozen support on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        </a>
      </div>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
