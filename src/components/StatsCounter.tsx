"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Briefcase, Globe2, Users2, Zap } from "lucide-react";
import { COMPANY_STATS } from "@/data/products";

interface CounterItemProps {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

function CounterItem({ value, suffix, label, sublabel, icon }: CounterItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1800; // ms
    const incrementTime = 30; // ms
    const totalSteps = duration / incrementTime;
    const stepValue = end / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-durozen-400 transition-all duration-200 group flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <div className="w-8 h-8 rounded-xl bg-durozen-50 text-durozen-600 flex items-center justify-center border border-durozen-100 group-hover:scale-105 group-hover:bg-durozen-600 group-hover:text-white transition-all duration-200">
            {icon}
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
            Verified
          </span>
        </div>

        <div className="flex items-baseline gap-0.5">
          <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-mono">
            {count}
          </span>
          <span className="text-base sm:text-lg font-black text-durozen-600 font-mono">
            {suffix}
          </span>
        </div>

        <h4 className="text-xs font-bold text-slate-900 mt-1 leading-snug">{label}</h4>
      </div>
      <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">{sublabel}</p>
    </motion.div>
  );
}

export default function StatsCounter() {
  const stats = [
    {
      value: COMPANY_STATS.projectsNum,
      suffix: "+",
      label: "Commercial Projects",
      sublabel: "Successful billing & enterprise software rollouts with zero production downtime.",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      value: COMPANY_STATS.clientsNum,
      suffix: "+",
      label: "Enterprise Clients",
      sublabel: "Retail chains, supermarkets, and distributors trusting Durozen daily.",
      icon: <Award className="w-4 h-4" />,
    },
    {
      value: COMPANY_STATS.countriesNum,
      suffix: "",
      label: "Countries Operating",
      sublabel: "International footprint with localized multi-currency and tax compliance.",
      icon: <Globe2 className="w-4 h-4" />,
    },
    {
      value: COMPANY_STATS.engineersNum,
      suffix: "+",
      label: "Software Engineers",
      sublabel: "In-house engineering team specializing in low-latency POS systems.",
      icon: <Users2 className="w-4 h-4" />,
    },
    {
      value: COMPANY_STATS.experienceYearsNum,
      suffix: "+",
      label: "Years of Experience",
      sublabel: "Dedicated focus on billing performance, inventory precision, and hardware drivers.",
      icon: <Zap className="w-4 h-4" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5 max-w-5xl mx-auto">
      {stats.map((stat, idx) => (
        <CounterItem
          key={idx}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          sublabel={stat.sublabel}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}
