"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Zap,
  Award,
  Code2,
  Cpu,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedHeroWords from "@/components/AnimatedHeroWords";

interface AboutStatItem {
  num: number;
  suffix: string;
  label: string;
  description: string;
  colorClass: string;
}

const ABOUT_STATS: AboutStatItem[] = [
  {
    num: 2,
    suffix: "+",
    label: "Years Experience",
    description: "Dedicated agile digital transformation delivery.",
    colorClass: "text-red-600",
  },
  {
    num: 35,
    suffix: "+",
    label: "Projects Delivered",
    description: "High-craft software deployed across domains.",
    colorClass: "text-slate-900",
  },
  {
    num: 10,
    suffix: "+",
    label: "Clients Served",
    description: "Long-term partnerships founded on trust.",
    colorClass: "text-emerald-600",
  },
  {
    num: 3,
    suffix: "",
    label: "Countries Reached",
    description: "International client solutions footprint.",
    colorClass: "text-blue-600",
  },
  {
    num: 12,
    suffix: "+",
    label: "Engineers",
    description: "Specialized full-stack, cloud & AI team.",
    colorClass: "text-amber-500",
  },
];

function AboutStatCard({ stat }: { stat: AboutStatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = stat.num;
    const duration = 1200;
    const step = end / (duration / 25);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setDisplayCount(end);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [isInView, stat.num]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between text-left"
    >
      <div>
        <div className={`text-4xl sm:text-5xl font-black tracking-tight ${stat.colorClass} font-sans flex items-baseline`}>
          <span>{isInView ? displayCount : stat.num}</span>
          <span>{stat.suffix}</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4 tracking-tight">
          {stat.label}
        </h3>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-durozen-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-durozen-50/40 via-white to-white border-b border-slate-100 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-4 shadow-2xs">
              <Award className="w-3.5 h-3.5 text-durozen-500" />
              <span>About Durozen Technologies</span>
            </div>
            <AnimatedHeroWords
              title="Engineering the Future of Enterprise Retail Billing"
              subtitle="We build specialized point of sale, order tracking, and stock reconciliation software engineered for high velocity, reliability, and continuous uptime."
            />
          </div>
        </section>

        {/* Company Strengths Numbers (5 Colored Cards matching screenshot) */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {ABOUT_STATS.map((stat) => (
                <AboutStatCard key={stat.label} stat={stat} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission & Engineering Culture */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-durozen-600 uppercase tracking-wider">
                  <Code2 className="w-4 h-4" />
                  Engineering Principles
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Why We Focused Exclusively on Billing Systems
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Every retail and wholesale business lives or dies at the cash counter. When billing software hangs for even three seconds, queues back up, customer frustration spikes, and cashiers commit errors.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  At Durozen Technologies, our team of 12+ specialized software engineers set out to solve these exact bottlenecks. We built direct-to-printer ESC/POS drivers, sub-second barcode processors, and an offline-first caching layer that keeps physical stores operating no matter what happens to the internet connection.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>35+ successful commercial project deployments</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>10+ enterprise retail &amp; wholesale clients</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Cross-border software deployments across 3 countries</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>2+ years of continuous product iteration and field testing</span>
                  </div>
                </div>
              </div>

              {/* Graphic Card */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-durozen-500/10 rounded-full blur-2xl" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <span className="text-xs font-mono uppercase text-slate-400">Architecture Commitments</span>
                    <span className="text-emerald-400 text-xs font-bold font-mono">100% Uptime Guarantee</span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-durozen-400" />
                        Sub-Second Execution
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        From barcode scan to thermal receipt cut, all pipeline steps complete in under 1.5 seconds.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        Zero Data Loss Offline Buffer
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Encrypted local SQL storage queues all transactions during network outages and synchronizes safely upon connection restore.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-durozen-400" />
                        Universal POS Device Protocol
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Direct support for standard USB/LAN thermal printers, electronic scales, barcode scanners, and cash drawers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-16 sm:py-24 bg-slate-50/50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-durozen-600">
              International Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
              Serving Clients Across 3 Countries
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Our software complies with international tax rules, local receipt printer protocols, multi-currency transactions, and multi-language receipt headers.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="py-3 px-6 rounded-xl font-bold text-xs text-white bg-durozen-600 hover:bg-durozen-700 transition-colors shadow-md shadow-durozen-600/20"
              >
                Contact Our Engineering Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
