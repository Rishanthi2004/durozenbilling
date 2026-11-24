"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface EcosystemIllustrationProps {
  type: "billing" | "accounting" | "inventory" | "pos" | "tax";
}

const TAB_ILLUSTRATIONS: Record<
  "billing" | "accounting" | "inventory" | "pos" | "tax",
  { src: string; alt: string }
> = {
  billing: {
    src: "/illustrations/billing.avif",
    alt: "Durozen Fast Billing & Invoicing System",
  },
  accounting: {
    src: "/illustrations/accounting.avif",
    alt: "Durozen Financial Accounting & Double-Entry Ledger",
  },
  inventory: {
    src: "/illustrations/inventory.jpg",
    alt: "Durozen Real-Time Inventory & Warehouse Reconciliation",
  },
  pos: {
    src: "/illustrations/pos.jpg",
    alt: "Durozen Advanced POS Counter Terminal & Hardware Integration",
  },
  tax: {
    src: "/illustrations/gst.jpg",
    alt: "Durozen GST & Tax Invoicing and Audit Compliance",
  },
};

export default function EcosystemIllustration({ type }: EcosystemIllustrationProps) {
  const current = TAB_ILLUSTRATIONS[type] || TAB_ILLUSTRATIONS.billing;

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center p-3 select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={type}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            unoptimized
            priority
            className="object-contain drop-shadow-sm transition-all duration-300"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
