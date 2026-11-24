"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ExternalLink,
  Navigation,
  Compass,
  Building2,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";
import AnimatedHeroWords from "@/components/AnimatedHeroWords";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Durozen+Technologies+Private+Limited/@11.148956,78.215225,15z/data=!4m6!3m5!1s0x3babcbd8fe6408d7:0x70d17da5da2fc025!8m2!3d11.1489563!4d78.215225!16s%2Fg%2F11z69cpfgz?hl=en-US";

const WHATSAPP_URL =
  "https://wa.me/918122339694?text=Hello%20Durozen%20Technologies,%20I%20would%20like%20to%20enquire%20about%20your%20services.";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-durozen-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-durozen-50/50 via-white to-white border-b border-slate-100 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-durozen-50 border border-durozen-200/80 text-durozen-700 text-xs font-bold mb-4 shadow-2xs">
              <Mail className="w-3.5 h-3.5 text-durozen-600" />
              <span>Direct Communications &amp; Technical Scoping</span>
            </div>
            <AnimatedHeroWords
              title="Get in Touch with Durozen"
              subtitle="Have questions about custom software, POS enterprise billing, or engineering services? Connect directly with our team."
            />
          </div>
        </section>

        {/* Content Section: Direct Info & Project Inquiry Form */}
        <section className="py-14 sm:py-20 bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Direct Communications */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-durozen-600">
                    DIRECT COMMUNICATIONS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                    Direct Line to Technical Advisory
                  </h2>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Connect directly with Durozen specialists for project scoping, enterprise billing deployments, and software engineering.
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  {/* EMAIL DIRECT */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5 hover:border-durozen-300 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-durozen-50 text-durozen-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-durozen-600 group-hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        EMAIL DIRECT
                      </span>
                      <a
                        href="mailto:info@durozen.in"
                        className="text-base font-bold text-slate-900 hover:text-durozen-600 transition-colors inline-block mt-0.5"
                      >
                        info@durozen.in
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Project scoping &amp; general enquiries
                      </p>
                    </div>
                  </div>

                  {/* PHONE / CALL */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5 hover:border-durozen-300 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-durozen-50 text-durozen-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-durozen-600 group-hover:text-white transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        PHONE / CALL
                      </span>
                      <a
                        href="tel:+918122339694"
                        className="text-base font-bold text-slate-900 hover:text-durozen-600 transition-colors inline-block mt-0.5"
                      >
                        +91 81223 39694
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Direct line to technical advisory
                      </p>
                    </div>
                  </div>

                  {/* WHATSAPP QUICK ENQUIRY */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5 hover:border-emerald-300 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        WHATSAPP QUICK ENQUIRY
                      </span>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors inline-flex items-center gap-1.5 mt-0.5"
                      >
                        <span>WhatsApp Quick Enquiry</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Connect directly with our team on WhatsApp
                      </p>
                    </div>
                  </div>

                  {/* OFFICE LOCATION */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5 hover:border-durozen-300 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-durozen-50 text-durozen-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-durozen-600 group-hover:text-white transition-all">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        OFFICE LOCATION
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                        Durozen Technologies Private Limited
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Namakkal, Tamil Nadu, India
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-durozen-600 hover:text-durozen-700 mt-2"
                      >
                        <span>Open on Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-durozen-50/70 border border-durozen-200 text-xs text-slate-700 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-durozen-600 flex-shrink-0" />
                  <span>Enterprise SLA: Dedicated technical scoping and response within 2 business hours.</span>
                </div>
              </div>

              {/* Right Column: Project Inquiry Form */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
                <div className="mb-6">
                  <span className="text-xs font-black uppercase tracking-wider text-durozen-600">
                    PROJECT INQUIRY
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    Send Project Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Select your service required, budget range, and describe your project goals.
                  </p>
                </div>

                <ProjectInquiryForm />
              </div>
            </div>
          </div>
        </section>

        {/* Office Location • Map Section */}
        <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-durozen-600">
                OFFICE LOCATION • MAP
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Namakkal Headquarters
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-2">
                <span className="inline-flex items-center gap-1 font-mono font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
                  <Compass className="w-3.5 h-3.5 text-durozen-600" />
                  11.15° N, 78.22° E
                </span>
                <span>•</span>
                <span className="font-semibold text-slate-800">Durozen Technologies Private Limited</span>
                <span>•</span>
                <span>Namakkal, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Map Container & Action Bar */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg">
              <div className="p-4 sm:p-5 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-durozen-50 text-durozen-600 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Durozen Technologies Private Limited
                    </h3>
                    <p className="text-xs text-slate-500">
                      Namakkal, Tamil Nadu, India (11.15° N, 78.22° E)
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-durozen-600 hover:border-durozen-300 transition-colors shadow-2xs"
                  >
                    <span>View larger map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-durozen-600 hover:bg-durozen-700 text-xs font-bold text-white shadow-md shadow-durozen-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Interactive Google Map Embed */}
              <div className="w-full h-80 sm:h-96 relative bg-slate-100">
                <iframe
                  title="Durozen Technologies Office Map"
                  src="https://maps.google.com/maps?q=11.148956,78.215225&hl=en&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
