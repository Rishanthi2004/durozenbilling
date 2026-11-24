"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedHeroWordsProps {
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
  titleClassName?: string;
  subtitleClassName?: string;
  align?: "center" | "left";
}

export default function AnimatedHeroWords({
  title,
  subtitle,
  as: Component = "h1",
  titleClassName = "text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight",
  subtitleClassName = "mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl",
  align = "center",
}: AnimatedHeroWordsProps) {
  const titleWords = title.split(" ");
  const subtitleWords = subtitle ? subtitle.split(" ") : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const justifyClass = align === "center" ? "justify-center" : "justify-start";
  const alignTextClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`w-full ${alignTextClass}`}
    >
      <Component className={titleClassName}>
        <span className={`flex flex-wrap ${justifyClass} items-center gap-x-2 sm:gap-x-2.5 gap-y-1`}>
          {titleWords.map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordVariants}
              className="inline-block transition-transform hover:scale-105 duration-200 cursor-default text-slate-900"
            >
              {word}
            </motion.span>
          ))}
        </span>
      </Component>

      {subtitleWords.length > 0 && (
        <motion.p
          variants={containerVariants}
          className={`${subtitleClassName} ${align === "center" ? "mx-auto" : ""} flex flex-wrap ${justifyClass} items-center gap-x-1 gap-y-0.5`}
        >
          {subtitleWords.map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordVariants}
              className="inline-block transition-colors hover:text-durozen-600 text-slate-600"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      )}
    </motion.div>
  );
}
