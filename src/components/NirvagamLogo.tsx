import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NirvagamLogoProps {
  className?: string;
  withLink?: boolean;
  showLogoImage?: boolean;
}

export default function NirvagamLogo({
  className = "",
  withLink = true,
  showLogoImage = true,
}: NirvagamLogoProps) {
  const content = (
    <div
      className={`group inline-flex items-center gap-2 sm:gap-2.5 select-none font-sans leading-none ${className}`}
    >
      {/* Official Durozen Logo Image */}
      {showLogoImage && (
        <div className="relative flex items-center transition-transform duration-200 group-hover:scale-[1.02]">
          <Image
            src="/durozen-logo.png"
            alt="Durozen Logo"
            width={78}
            height={31}
            priority
            className="object-contain h-6 sm:h-7.5 w-auto"
          />
        </div>
      )}

      {/* Subtle Divider (Desktop) */}
      {showLogoImage && (
        <div className="h-6 w-px bg-slate-200/90 hidden sm:block" />
      )}

      {/* Primary Brand: Nirvagam with subtle orange accent */}
      <div className="flex flex-col items-start leading-none">
        <div className="flex items-center">
          <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-slate-800 transition-colors">
            Nirvagam
          </span>
          <span
            className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F97316] ml-1 mb-0.5 shadow-sm shadow-orange-500/40"
            aria-hidden="true"
          />
        </div>

        {/* Subtitle: by Durozen */}
        <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
          <span className="text-[9.5px] sm:text-[10.5px] font-semibold text-slate-400 tracking-wider">
            by{" "}
            <span className="font-bold text-slate-700 group-hover:text-[#F97316] transition-colors">
              Durozen
            </span>
          </span>
        </div>
      </div>
    </div>
  );

  if (!withLink) {
    return content;
  }

  return (
    <Link
      href="/"
      className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 rounded-xl"
      aria-label="Nirvagam by Durozen - Home"
    >
      {content}
    </Link>
  );
}
