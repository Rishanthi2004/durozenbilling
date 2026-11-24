"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Printer,
  Boxes,
  RotateCcw,
  CheckCircle2,
  Zap,
} from "lucide-react";
import DurozenLogo from "./DurozenLogo";

interface DemoItem {
  id: string;
  name: string;
  category: string;
  price: number;
  sku: string;
  stock: number;
  taxRate: number;
}

const DEMO_ITEMS: DemoItem[] = [
  { id: "1", name: "Artisan Roast Espresso Beans 500g", category: "Coffee", price: 14.5, sku: "SKU-9921", stock: 48, taxRate: 0.05 },
  { id: "2", name: "Cold Pressed Olive Oil 1L", category: "Grocery", price: 22.0, sku: "SKU-7720", stock: 112, taxRate: 0.05 },
  { id: "3", name: "Organic Farm Fresh Milk 1L", category: "Dairy", price: 4.25, sku: "SKU-4021", stock: 16, taxRate: 0.0 },
  { id: "4", name: "Butter Croissant (Fresh Bake)", category: "Bakery", price: 3.5, sku: "SKU-3108", stock: 32, taxRate: 0.05 },
  { id: "5", name: "Sparkling Mineral Water 750ml", category: "Beverages", price: 2.8, sku: "SKU-1842", stock: 85, taxRate: 0.05 },
];

export default function InteractivePOSDemo() {
  const [cart, setCart] = useState<{ item: DemoItem; qty: number }[]>([
    { item: DEMO_ITEMS[0], qty: 2 },
    { item: DEMO_ITEMS[1], qty: 1 },
    { item: DEMO_ITEMS[2], qty: 2 },
  ]);

  const [viewMode, setViewMode] = useState<"pos" | "receipt" | "inventory">("pos");
  const [printedFeedback, setPrintedFeedback] = useState(false);

  const addItem = (item: DemoItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) => (i.item.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { item, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((i) => {
          if (i.item.id === id) {
            const newQty = i.qty + delta;
            return newQty > 0 ? { ...i, qty: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as { item: DemoItem; qty: number }[];
    });
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.item.id !== id));
  };

  const resetCart = () => {
    setCart([
      { item: DEMO_ITEMS[0], qty: 2 },
      { item: DEMO_ITEMS[1], qty: 1 },
    ]);
  };

  const subtotal = cart.reduce((acc, curr) => acc + curr.item.price * curr.qty, 0);
  const tax = cart.reduce((acc, curr) => acc + curr.item.price * curr.qty * curr.item.taxRate, 0);
  const grandTotal = subtotal + tax;
  const totalUnits = cart.reduce((acc, curr) => acc + curr.qty, 0);

  const handlePrint = () => {
    setPrintedFeedback(true);
    setViewMode("receipt");
    setTimeout(() => {
      setPrintedFeedback(false);
    }, 3000);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden ring-1 ring-slate-900/5">
      {/* Interactive Terminal Bar */}
      <div className="bg-slate-900 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <div className="flex items-center gap-2">
            <DurozenLogo size="xs" variant="dark" withLink={false} showSubtitle={false} />
            <span className="font-mono text-white font-bold flex items-center gap-2">
              <span>POS WORKBENCH</span>
              <span className="text-[10px] bg-durozen-600 text-white px-2 py-0.5 rounded font-sans uppercase">
                Live Demo
              </span>
            </span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl text-xs">
          <button
            onClick={() => setViewMode("pos")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              viewMode === "pos"
                ? "bg-durozen-500 text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Touch Counter
          </button>
          <button
            onClick={() => setViewMode("receipt")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
              viewMode === "receipt"
                ? "bg-durozen-500 text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Printer className="w-3 h-3" />
            Thermal Receipt
          </button>
          <button
            onClick={() => setViewMode("inventory")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
              viewMode === "inventory"
                ? "bg-durozen-500 text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Boxes className="w-3 h-3" />
            Stock Deduction
          </button>
        </div>
      </div>

      {/* Main Interactive Workspace */}
      <div className="p-4 sm:p-6 lg:p-8 bg-slate-50/50">
        {viewMode === "pos" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 7 Cols: Quick-Tap Catalog Items */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Tap to Add Sample Products</h4>
                  <p className="text-xs text-slate-500">Test the lightning-fast catalog search & counter intake</p>
                </div>
                <button
                  onClick={resetCart}
                  className="text-xs font-semibold text-slate-500 hover:text-durozen-600 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DEMO_ITEMS.map((item) => {
                  const inCart = cart.find((i) => i.item.id === item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => addItem(item)}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 relative group ${
                        inCart
                          ? "bg-white border-durozen-400 shadow-sm ring-1 ring-durozen-400/20"
                          : "bg-white border-slate-200 hover:border-durozen-300 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] font-mono text-slate-400 uppercase">{item.sku}</span>
                        <span className="text-xs font-black text-durozen-600 font-mono">${item.price.toFixed(2)}</span>
                      </div>
                      <h5 className="text-xs font-bold text-slate-900 mt-1 line-clamp-1">{item.name}</h5>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-500">
                        <span>Stock: {item.stock} left</span>
                        <span className="font-semibold text-durozen-600 flex items-center gap-0.5">
                          <Plus className="w-3 h-3" /> Add item
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Hardware speed banner */}
              <div className="p-3.5 rounded-2xl bg-durozen-50/80 border border-durozen-200/60 flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-durozen-500 text-white flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Sub-Second Processing</span>
                    <span className="text-[11px] text-slate-500">Thermal receipt auto-cut executes in 0.4 seconds</span>
                  </div>
                </div>
                <span className="font-mono text-durozen-600 font-bold bg-white px-2 py-1 rounded border border-durozen-200">
                  99.98% Accuracy
                </span>
              </div>
            </div>

            {/* Right 5 Cols: Live Billing Ticket */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <ShoppingCart className="w-4 h-4 text-durozen-600" />
                    Billed Line Items ({totalUnits})
                  </span>
                  <span className="font-mono text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    #INV-TEST
                  </span>
                </div>

                {/* Cart Items */}
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                  {cart.length === 0 ? (
                    <div className="py-8 text-center text-xs text-slate-400">
                      Cart is empty. Tap any product on the left to add it.
                    </div>
                  ) : (
                    cart.map(({ item, qty }) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs"
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="font-bold text-slate-800 truncate">{item.name}</div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            ${item.price.toFixed(2)} x {qty}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="w-5 h-5 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center font-bold font-mono text-slate-900">{qty}</span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="w-5 h-5 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>

                          <div className="w-14 text-right font-extrabold font-mono text-slate-900 ml-1">
                            ${(item.price * qty).toFixed(2)}
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-slate-400 hover:text-rose-500 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Calculations */}
                <div className="mt-4 pt-3 border-t border-slate-200 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span className="font-mono font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Estimated Tax (GST/VAT)</span>
                    <span className="font-mono font-bold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-900 font-extrabold text-base pt-2 border-t border-slate-200">
                    <span className="text-durozen-600">Grand Total</span>
                    <span className="font-mono">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout & Print Buttons */}
              <div className="mt-5 space-y-2">
                <button
                  type="button"
                  disabled={cart.length === 0}
                  onClick={handlePrint}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-durozen-500 to-durozen-600 hover:from-durozen-600 hover:to-durozen-700 shadow-md shadow-durozen-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                >
                  <Printer className="w-4 h-4" />
                  <span>Execute Bill & Print Thermal Receipt (0.4s)</span>
                </button>
                <div className="text-center text-[10px] text-slate-400">
                  Instant stock deduction triggered on print
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Mode: Thermal Paper Receipt Preview */}
        {viewMode === "receipt" && (
          <div className="max-w-md mx-auto animate-in fade-in duration-300">
            {printedFeedback && (
              <div className="mb-4 p-3 rounded-xl bg-durozen-50 border border-durozen-200 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Thermal print job dispatched to ESC/POS 80mm printer! Auto-cut completed in 0.4s.</span>
              </div>
            )}

            {/* Simulated 80mm Thermal Receipt */}
            <div className="thermal-paper rounded-t-xl p-6 sm:p-8 font-mono text-xs text-slate-800 border border-slate-200">
              <div className="text-center pb-4 mb-4 border-b border-dashed border-slate-400 space-y-1">
                <div className="flex justify-center mb-1.5">
                  <DurozenLogo size="xs" withLink={false} showSubtitle={false} />
                </div>
                <div className="font-black text-xs text-slate-900 tracking-tight">DUROZEN TECHNOLOGIES</div>
                <div className="text-[10px] text-slate-600">POINT OF SALE DEMO COUNTER #01</div>
                <div className="text-[10px] text-slate-500">TAX INVOICE / CASH RECEIPT</div>
                <div className="text-[10px] text-slate-500">Date: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</div>
              </div>

              {/* Items List */}
              <div className="space-y-2 border-b border-dashed border-slate-400 pb-4 mb-4">
                <div className="flex justify-between font-bold text-[11px] text-slate-700 border-b border-slate-200 pb-1">
                  <span>ITEM</span>
                  <span>QTY</span>
                  <span>AMT</span>
                </div>
                {cart.map(({ item, qty }) => (
                  <div key={item.id} className="flex justify-between text-[11px]">
                    <span className="truncate max-w-[180px]">{item.name}</span>
                    <span>x{qty}</span>
                    <span className="font-bold">${(item.price * qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-1.5 border-b border-dashed border-slate-400 pb-4 mb-4 text-[11px]">
                <div className="flex justify-between">
                  <span>SUBTOTAL</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>CGST / SGST (5%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-black text-sm text-slate-900 pt-1">
                  <span>TOTAL PAYABLE</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Simulated Barcode */}
              <div className="text-center pt-2 space-y-1">
                <div className="font-mono text-slate-900 tracking-widest font-black text-sm">
                  ||||| ||||||| ||| |||||||| ||||
                </div>
                <div className="text-[9px] text-slate-500">INV-84920492810</div>
                <div className="text-[10px] text-slate-600 pt-2 font-sans font-medium">
                  Thank you for visiting! Powered by Durozen POS.
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={() => setViewMode("pos")}
                className="text-xs font-bold text-durozen-600 hover:text-durozen-700 underline"
              >
                Return to Touch Counter
              </button>
            </div>
          </div>
        )}

        {/* View Mode: Stock Deduction Log */}
        {viewMode === "inventory" && (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Real-Time Inventory Reconciliation</h4>
                <p className="text-xs text-slate-500">Durozen instantly synchronizes inventory levels upon every POS billing event.</p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-600 bg-durozen-50 px-2.5 py-1 rounded-full border border-durozen-200">
                Live Stock Sync: Active
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-[11px] uppercase tracking-wider">
                    <th className="pb-2 font-semibold">SKU / Item</th>
                    <th className="pb-2 font-semibold">Billed in Cart</th>
                    <th className="pb-2 font-semibold">Stock Remaining</th>
                    <th className="pb-2 font-semibold">Reorder Alert</th>
                    <th className="pb-2 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {DEMO_ITEMS.map((item) => {
                    const cartItem = cart.find((i) => i.item.id === item.id);
                    const billedQty = cartItem ? cartItem.qty : 0;
                    const stockLeft = item.stock - billedQty;
                    const isLow = stockLeft < 20;

                    return (
                      <tr key={item.id} className="hover:bg-slate-50/80">
                        <td className="py-2.5 font-medium text-slate-900">
                          {item.name}
                          <span className="block text-[10px] text-slate-400 font-mono">{item.sku}</span>
                        </td>
                        <td className="py-2.5 font-mono font-bold text-durozen-600">
                          {billedQty > 0 ? `-${billedQty}` : "0"}
                        </td>
                        <td className="py-2.5 font-mono font-extrabold text-slate-800">
                          {stockLeft} units
                        </td>
                        <td className="py-2.5">
                          {isLow ? (
                            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                              Low Stock Warning
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400">Normal</span>
                          )}
                        </td>
                        <td className="py-2.5">
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Reconciled
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Supports central multi-warehouse syncing across unlimited stores.</span>
              <button
                onClick={() => setViewMode("pos")}
                className="font-bold text-durozen-600 hover:text-durozen-700"
              >
                Back to POS Counter →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
