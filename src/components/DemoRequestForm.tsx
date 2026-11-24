"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Sparkles, Building2, User, Mail, Phone, ShoppingBag, MessageSquare } from "lucide-react";
import { DUROZEN_PRODUCTS } from "@/data/products";

interface DemoRequestFormProps {
  initialSoftware?: string;
  onSuccess?: () => void;
  isCompact?: boolean;
}

export default function DemoRequestForm({
  initialSoftware = "Durozen POS Billing System and Tracking",
  onSuccess,
  isCompact = false,
}: DemoRequestFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    interestedSoftware: initialSoftware,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company or business name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (formData.phoneNumber.replace(/\D/g, "").length < 7) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }
    if (!formData.interestedSoftware) newErrors.interestedSoftware = "Please select a software solution";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable API response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000);
      }
    }, 900);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-durozen-200 bg-durozen-50/80 p-8 text-center animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-durozen-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Demo Request Received!</h3>
        <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm sm:text-base leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A Durozen software specialist will reach out to schedule your personalized live demo for <span className="font-semibold text-durozen-600">{formData.interestedSoftware}</span>.
        </p>

        <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-white/80 px-4 py-2 rounded-full border border-durozen-200 shadow-xs">
          <Sparkles className="w-4 h-4 text-emerald-500" />
          Priority dispatch: Response within 2 business hours
        </div>

        <div className="mt-6 pt-6 border-t border-durozen-200/60">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                companyName: "",
                email: "",
                phoneNumber: "",
                interestedSoftware: initialSoftware,
                message: "",
              });
            }}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
          >
            Submit another demo inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Full Name <span className="text-durozen-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="e.g. Alex Morgan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-durozen-500/20 transition-all ${
                errors.name ? "border-rose-400 bg-rose-50/20" : "border-slate-200 bg-white focus:border-durozen-500"
              }`}
            />
          </div>
          {errors.name && <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Company / Business Name <span className="text-durozen-500">*</span>
          </label>
          <div className="relative">
            <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="e.g. Metro Mart Retail"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-durozen-500/20 transition-all ${
                errors.companyName ? "border-rose-400 bg-rose-50/20" : "border-slate-200 bg-white focus:border-durozen-500"
              }`}
            />
          </div>
          {errors.companyName && <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.companyName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Work Email <span className="text-durozen-500">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              placeholder="alex@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-durozen-500/20 transition-all ${
                errors.email ? "border-rose-400 bg-rose-50/20" : "border-slate-200 bg-white focus:border-durozen-500"
              }`}
            />
          </div>
          {errors.email && <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Phone Number <span className="text-durozen-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-durozen-500/20 transition-all ${
                errors.phoneNumber ? "border-rose-400 bg-rose-50/20" : "border-slate-200 bg-white focus:border-durozen-500"
              }`}
            />
          </div>
          {errors.phoneNumber && <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phoneNumber}</p>}
        </div>
      </div>

      {/* Interested Software */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Interested Software Product <span className="text-durozen-500">*</span>
        </label>
        <div className="relative">
          <ShoppingBag className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={formData.interestedSoftware}
            onChange={(e) => setFormData({ ...formData, interestedSoftware: e.target.value })}
            className={`w-full pl-10 pr-8 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-durozen-500/20 appearance-none transition-all ${
              errors.interestedSoftware ? "border-rose-400" : "border-slate-200 focus:border-durozen-500"
            }`}
          >
            {DUROZEN_PRODUCTS.map((prod) => (
              <option key={prod.id} value={prod.name}>
                {prod.name} ({prod.category})
              </option>
            ))}
            <option value="Durozen Custom Enterprise Billing Suite">
              Durozen Custom Enterprise Billing Suite (Custom Requirement)
            </option>
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
            ▼
          </div>
        </div>
        {errors.interestedSoftware && (
          <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.interestedSoftware}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Specific Needs or Current Setup <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
          <textarea
            rows={isCompact ? 2 : 3}
            placeholder="Tell us about your number of counters, stores, thermal printers, or existing billing software..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-durozen-500/20 focus:border-durozen-500 transition-all resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-durozen-500 to-durozen-600 hover:from-durozen-600 hover:to-durozen-700 focus:outline-none focus:ring-4 focus:ring-durozen-500/20 shadow-md shadow-durozen-500/20 hover:shadow-lg hover:shadow-durozen-500/30 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Scheduling Demo...</span>
            </>
          ) : (
            <>
              <span>Request a Demo</span>
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-slate-400 mt-2.5">
          🔒 No credit card required. Free customized demonstration with real business data.
        </p>
      </div>
    </form>
  );
}
