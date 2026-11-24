"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Building2, User, Mail, Phone, Layers, IndianRupee } from "lucide-react";

export const SERVICES_LIST = [
  "Custom Software Development",
  "Enterprise Application Development",
  "Website Development",
  "Mobile App Development",
  "Cloud Engineering",
  "DevOps Services",
  "AI and Machine Learning Solutions",
  "Data Engineering",
  "UI/UX Design",
  "Product Development",
  "API Development and Integration",
  "IT Consulting & Transformation",
  "Quality Assurance & Test Automation",
];

export const BUDGET_RANGES = [
  "Under ₹1 Lakh",
  "₹1 - ₹3 Lakhs",
  "₹3 - ₹10 Lakhs",
  "₹10 Lakhs+",
];

interface ProjectInquiryFormProps {
  onSuccess?: () => void;
  isCompact?: boolean;
}

export default function ProjectInquiryForm({
  onSuccess,
  isCompact = false,
}: ProjectInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    serviceRequired: SERVICES_LIST[0],
    budgetRange: BUDGET_RANGES[1],
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Your name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (formData.phoneNumber.replace(/[^0-9]/g, "").length < 7) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }
    if (!formData.serviceRequired) {
      newErrors.serviceRequired = "Please select a service required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending inquiry
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 900);
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-6 sm:p-8 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-600/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">
          Project Inquiry Received!
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto mb-5 leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our technical advisory team will review your requirements for <span className="font-semibold text-slate-900">{formData.serviceRequired}</span> and reach out to you within 2 business hours.
        </p>

        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-500 bg-white px-4 py-2.5 rounded-xl border border-slate-200/80">
          <span>Inquiry Reference: <strong className="text-slate-800 font-mono">DZ-INQ-{Math.floor(100000 + Math.random() * 900000)}</strong></span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>Contact Direct: <strong className="text-durozen-600">info@durozen.in</strong></span>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                companyName: "",
                email: "",
                phoneNumber: "",
                serviceRequired: SERVICES_LIST[0],
                budgetRange: BUDGET_RANGES[1],
                description: "",
              });
            }}
            className="text-xs font-semibold text-durozen-600 hover:text-durozen-700 underline"
          >
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Name and Company Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Your Name <span className="text-durozen-600 font-black">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rajesh Kumar"
              className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-durozen-500/20 transition-all ${
                errors.name ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-durozen-500"
              }`}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Company Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Building2 className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="e.g. Retail Enterprises Pvt Ltd"
              className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-durozen-500/20 focus:border-durozen-500 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Work Email and Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Work Email <span className="text-durozen-600 font-black">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@company.com"
              className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-durozen-500/20 transition-all ${
                errors.email ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-durozen-500"
              }`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Phone Number <span className="text-durozen-600 font-black">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              placeholder="+91 98765 43210"
              className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-durozen-500/20 transition-all ${
                errors.phoneNumber ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-durozen-500"
              }`}
            />
          </div>
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" />
              {errors.phoneNumber}
            </p>
          )}
        </div>
      </div>

      {/* Service Required and Budget Range */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Service Required <span className="text-durozen-600 font-black">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Layers className="w-4 h-4" />
            </div>
            <select
              value={formData.serviceRequired}
              onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
              className="w-full pl-10 pr-8 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-durozen-500/20 focus:border-durozen-500 transition-all appearance-none cursor-pointer"
            >
              {SERVICES_LIST.map((srv) => (
                <option key={srv} value={srv}>
                  {srv}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
          {errors.serviceRequired && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" />
              {errors.serviceRequired}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Project Budget Range
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <IndianRupee className="w-4 h-4" />
            </div>
            <select
              value={formData.budgetRange}
              onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
              className="w-full pl-10 pr-8 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-durozen-500/20 focus:border-durozen-500 transition-all appearance-none cursor-pointer"
            >
              {BUDGET_RANGES.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Project Description <span className="text-durozen-600 font-black">*</span>
        </label>
        <div className="relative">
          <textarea
            rows={isCompact ? 3 : 4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Tell us about your project goals, scope, timeline, and current software workflow..."
            className={`w-full p-3.5 bg-slate-50/50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-durozen-500/20 transition-all ${
              errors.description ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-durozen-500"
            }`}
          />
        </div>
        {errors.description && (
          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3 h-3" />
            {errors.description}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-xl bg-durozen-600 hover:bg-durozen-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-durozen-600/25 hover:shadow-durozen-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Submitting Inquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Project Inquiry</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-500">
        🔒 Confidential &amp; Protected. Our engineers sign standard NDAs before scoping enterprise builds.
      </p>
    </form>
  );
}
