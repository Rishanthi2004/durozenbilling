import React from "react";
import Link from "next/link";
import Image from "next/image";

interface DurozenLogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  withLink?: boolean;
  variant?: "light" | "dark";
  showSubtitle?: boolean;
}

export default function DurozenLogo({
  className = "",
  size = "md",
  withLink = true,
  variant = "light",
  showSubtitle = true,
}: DurozenLogoProps) {
  const sizeMap = {
    xs: { width: 68, height: 27, subSize: "text-[7.5px]", gap: "gap-0.5" },
    sm: { width: 88, height: 35, subSize: "text-[8px]", gap: "gap-0.5" },
    md: { width: 108, height: 43, subSize: "text-[9.5px]", gap: "gap-1" },
    lg: { width: 140, height: 55, subSize: "text-[11px]", gap: "gap-1" },
    xl: { width: 176, height: 70, subSize: "text-[13px]", gap: "gap-1.5" },
  };

  const { width, height, subSize, gap } = sizeMap[size] || sizeMap.md;

  const subtitleColor =
    variant === "dark"
      ? "text-slate-300 group-hover:text-white"
      : "text-slate-600 group-hover:text-slate-900";

  const content = (
    <div className={`flex flex-col items-start ${gap} font-sans select-none ${className}`}>
      <div className="relative flex items-center transition-transform duration-200 group-hover:scale-[1.02]">
        <Image
          src="/durozen-logo.png"
          alt="Durozen Technologies"
          width={width}
          height={height}
          priority
          className="object-contain"
          style={{ width: "auto", height: `${height}px` }}
        />
      </div>

      {showSubtitle && (
        <div className="flex items-center gap-1.5 pl-0.5">
          <span
            className={`font-black tracking-[0.24em] uppercase leading-none transition-colors duration-200 ${subSize} ${subtitleColor}`}
          >
            TECHNOLOGIES
          </span>
          <div className="flex items-center gap-0.5 opacity-80">
            <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
            <span className="w-1 h-1 rounded-full bg-yellow-400 inline-block" />
            <span className="w-1 h-1 rounded-full bg-green-500 inline-block" />
            <span className="w-1 h-1 rounded-full bg-blue-600 inline-block" />
          </div>
        </div>
      )}
    </div>
  );

  if (!withLink) {
    return content;
  }

  return (
    <Link
      href="/"
      className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-durozen-500 rounded-lg"
    >
      {content}
    </Link>
  );
}
