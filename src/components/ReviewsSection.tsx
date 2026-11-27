"use client";

import React from "react";
import { Star } from "lucide-react";

interface ReviewItem {
  id: string;
  initials: string;
  name: string;
  badge: string;
  rating: number;
  headline: string;
  comment: string;
  date: string;
  color: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: "1",
    initials: "GK",
    name: "Guna Kutty",
    badge: "Supermarket Owner",
    rating: 5,
    headline: "Good product & lightning speed",
    comment:
      "Durozen POS drastically reduced our counter wait time during the evening rush. The thermal receipt prints in under half a second without any driver delay.",
    date: "Mar 14, 2026",
    color: "bg-indigo-600",
  },
  {
    id: "2",
    initials: "KS",
    name: "Karthikeyan S",
    badge: "Retail Chain Manager",
    rating: 5,
    headline: "Excellent multi-store sync",
    comment:
      "Durozen Billing App is an excellent solution for our multi-branch stores. Centralized pricing pushes in one click and stock reconciliation is 100% accurate.",
    date: "Feb 11, 2026",
    color: "bg-emerald-600",
  },
  {
    id: "3",
    initials: "JA",
    name: "Jothimalar Arun",
    badge: "Wholesale Distributor",
    rating: 5,
    headline: "Cool App for billing & inventory",
    comment:
      "Very reliable software for billing, barcode printing, and stock dispatch. Even when our internet dropped, the offline cache let us continue issuing invoices.",
    date: "Feb 3, 2026",
    color: "bg-slate-800",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-durozen-600">
            Real Retail Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
            Trusted by Growing Businesses
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-2 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs font-bold text-slate-700 ml-1">4.9 / 5 Average Rating</span>
          </div>
        </div>

        {/* 3 Review Cards (Screenshot 6) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.color} text-white font-bold text-xs flex items-center justify-center`}
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{rev.name}</h4>
                      <span className="text-[10px] text-slate-400">{rev.badge}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-600 bg-durozen-50 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>

                <div className="flex text-amber-400 mb-2 text-xs">
                  {"★".repeat(rev.rating)}
                </div>

                <h5 className="text-sm font-bold text-slate-900 mb-1">{rev.headline}</h5>
                <p className="text-xs text-slate-600 leading-relaxed">{rev.comment}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
                {rev.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
