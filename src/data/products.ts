export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  highlightMetric?: string;
  details: string[];
}

export interface WorkflowStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  screenSnippet: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  isConfirmed: boolean;
  statusBadge: string;
  rating: number;
  keyFeatures: string[];
  heroStats: {
    label: string;
    value: string;
  }[];
  features: ProductFeature[];
  workflow: WorkflowStep[];
  supportedBusinessTypes: {
    name: string;
    description: string;
    icon: string;
    popularSetup: string;
  }[];
  benefits: {
    title: string;
    description: string;
    metric: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  specs: {
    label: string;
    value: string;
  }[];
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  category: string;
  headline: string;
  description: string;
  compatibleProducts: string[];
  painPoints: string[];
  solutions: string[];
  imageType: string;
  accentColor: string;
  stats: {
    label: string;
    value: string;
  };
}

export interface CompanyStats {
  projects: string;
  projectsNum: number;
  clients: string;
  clientsNum: number;
  countries: string;
  countriesNum: number;
  engineers: string;
  engineersNum: number;
  experienceYears: string;
  experienceYearsNum: number;
}

export const COMPANY_STATS: CompanyStats = {
  projects: "35+",
  projectsNum: 35,
  clients: "10+",
  clientsNum: 10,
  countries: "3",
  countriesNum: 3,
  engineers: "12+",
  engineersNum: 12,
  experienceYears: "2+",
  experienceYearsNum: 2,
};

export const DUROZEN_PRODUCTS: Product[] = [
  {
    id: "durozen-pos-billing-tracking",
    slug: "durozen-pos-billing-tracking",
    name: "Durozen POS Billing System and Tracking",
    tagline: "High-Speed Billing, Stock Reconciliation & Real-Time Tracking in One Integrated Platform",
    shortDescription:
      "A complete enterprise-grade point-of-sale billing and live tracking software engineered for fast checkout, accurate inventory reconciliation, multi-store management, and rapid thermal receipt printing.",
    fullDescription:
      "Durozen POS Billing System and Tracking is the flagship software solution developed by Durozen Technologies. Designed to handle intense retail counters, multi-branch operations, and dynamic order tracking, it synchronizes sales, stock updates, barcode scanning, thermal printing, and executive business reporting without latency.",
    category: "Point of Sale & Tracking",
    isConfirmed: true,
    statusBadge: "Confirmed Flagship Product",
    rating: 4.9,
    keyFeatures: [
      "Ultra-fast touch & barcode billing",
      "Automated inventory reconciliation",
      "High-speed 2-inch & 3-inch thermal printing",
      "Multi-store & centralized branch control",
      "Live order dispatch & sales tracking",
      "Daily profit, tax & GST reconciliation analytics",
    ],
    heroStats: [
      { label: "Checkout Speed", value: "< 1.5s per bill" },
      { label: "Inventory Accuracy", value: "99.98%" },
      { label: "Thermal Print Time", value: "0.4s" },
      { label: "Branch Sync Latency", value: "Real-time" },
    ],
    features: [
      {
        id: "billing-invoicing",
        title: "Intelligent Billing & Invoicing",
        description:
          "Generate professional GST/VAT-compliant bills in seconds with split-tender payment (Cash, Card, UPI, Credit), barcode scanning, and quick-keys.",
        iconName: "Receipt",
        badge: "Sub-second Execution",
        highlightMetric: "3x Faster Checkout",
        details: [
          "Barcode scanner, RFID, and quick touch-item grid support",
          "Split tender payments across UPI, cards, cash, and store credit",
          "Dynamic discount, coupon validation, and customer loyalty lookup",
          "Automated GST/tax bracket calculation and HSN code mapping",
          "Offline billing buffer with auto-sync when connection restores",
        ],
      },
      {
        id: "inventory-reconciliation",
        title: "Automated Inventory Reconciliation",
        description:
          "Eliminate stock variance and phantom inventory with real-time stock deduction, low-stock reorder alerts, batch/expiry tracking, and automated audits.",
        iconName: "Boxes",
        badge: "Zero Stock Discrepancy",
        highlightMetric: "100% Stock Visibility",
        details: [
          "Real-time item deduction directly from POS billing transaction",
          "Batch number, lot tracking, and expiry date warning alerts",
          "Automated Purchase Order (PO) generation upon minimum threshold",
          "Inter-store stock transfer slips and in-transit reconciliation",
          "Shrinkage, damage, and return tracking with audit trails",
        ],
      },
      {
        id: "thermal-printing",
        title: "Instant Thermal Printing",
        description:
          "Native direct-to-printer drivers supporting ESC/POS thermal printers via USB, Ethernet (LAN), Bluetooth, and Wi-Fi with custom receipt styling.",
        iconName: "Printer",
        badge: "ESC/POS & USB/LAN",
        highlightMetric: "0.4s Print Speed",
        details: [
          "Universal support for 58mm (2-inch) and 80mm (3-inch) thermal printers",
          "Customizable receipt headers, company logo, footer message, and QR codes",
          "Digital e-receipt dispatch via WhatsApp and SMS simultaneously",
          "Kitchen Order Ticket (KOT) and packing slip routing",
          "Fast cut command and cash drawer auto-kick trigger",
        ],
      },
      {
        id: "multi-store-support",
        title: "Multi-Store & Centralized Control",
        description:
          "Oversee multiple branches, warehouses, and billing counters from one unified cloud dashboard with role-based staff access.",
        iconName: "Store",
        badge: "Multi-Branch Ready",
        highlightMetric: "Centralized Sync",
        details: [
          "Consolidated multi-branch financial view and branch comparison",
          "Master catalog push: update prices across all stores in 1 click",
          "Role-based permission matrix (Cashier, Store Manager, Auditor, Admin)",
          "Inter-branch inventory transfer and stock pooling",
          "Store-level tax configurations and localized promotions",
        ],
      },
      {
        id: "sales-tracking",
        title: "Real-Time Sales & Order Tracking",
        description:
          "Track every counter sale, customer order, dispatched parcel, and return in real time with end-to-end status visualization.",
        iconName: "Activity",
        badge: "Live Telemetry",
        highlightMetric: "Live Audit Trail",
        details: [
          "Live counter terminal status (Active, Idle, Shift Open/Close)",
          "Order fulfillment stages: Billed -> Packed -> Dispatched -> Completed",
          "Cashier shift balancing & physical cash drawer reconciliation",
          "Customer purchase history tracking and credit ledger balance",
          "Instant alert triggers on anomalous discounts or voids",
        ],
      },
      {
        id: "reports-analytics",
        title: "Reports & Business Analytics",
        description:
          "Transform raw transactions into actionable executive intelligence with daily sales summaries, gross margin analysis, and tax audit exports.",
        iconName: "BarChart3",
        badge: "Executive Insights",
        highlightMetric: "30+ Built-in Reports",
        details: [
          "Daily Z-Report and X-Report closing summaries",
          "Fast-moving vs. slow-moving stock aging analytics",
          "Hourly sales velocity to optimize counter staffing schedules",
          "One-click tax filing data export (Excel, CSV, PDF)",
          "Customer retention metrics, average basket size & gross margin tracking",
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: "Fast Item Intake & Scanning",
        subtitle: "High-speed barcode scanner or touch grid",
        description:
          "Cashier scans item barcodes or taps rapid categories. The system instantly fetches SKU details, batch numbers, current stock, and applicable discounts.",
        iconName: "ScanLine",
        screenSnippet: "Barcode Scanned: SKU-49821 | Stock Remaining: 142 units",
      },
      {
        step: 2,
        title: "Smart Tax & Multi-Tender Payment",
        subtitle: "Dynamic split payments and automatic tax calculation",
        description:
          "The engine calculates precise tax breakdowns and accepts flexible tender combinations: cash, card, UPI, or customer credit.",
        iconName: "CreditCard",
        screenSnippet: "Total: $128.50 | Tax: $10.28 | Split: $100 Card + $28.50 Cash",
      },
      {
        step: 3,
        title: "Instant Thermal Print & E-Receipt",
        subtitle: "High-speed ESC/POS cut & digital dispatch",
        description:
          "Thermal receipt prints in 0.4 seconds while an optional digital receipt is sent to the customer's phone with dynamic payment QR.",
        iconName: "Printer",
        screenSnippet: "Thermal Print Sent (0.4s) | Cash Drawer Popped | E-Receipt Dispatched",
      },
      {
        step: 4,
        title: "Automated Stock Deduction & Ledger Entry",
        subtitle: "Zero-latency inventory reconciliation",
        description:
          "Inventory counts decrease immediately across all counters. If stock dips below re-order points, automated alerts notify the inventory manager.",
        iconName: "Database",
        screenSnippet: "Inventory Updated: -2 units | Cloud Ledger Synced | Re-order Check: OK",
      },
      {
        step: 5,
        title: "Live Cloud Dashboard & Audit Logs",
        subtitle: "Centralized analytics for management",
        description:
          "Store managers and executives monitor live sales velocity, cashier performance, and daily margins across all branches from any device.",
        iconName: "TrendingUp",
        screenSnippet: "Counter 01 Shift Total: $4,820.00 | 148 Invoices | 0 Voids",
      },
    ],
    supportedBusinessTypes: [
      {
        name: "Supermarkets & Grocery",
        description: "Bulk barcode scanning, weighing scale integration, perishable batch tracking.",
        icon: "ShoppingCart",
        popularSetup: "Dual POS counters + 3-inch Thermal Printer + Electronic Scale",
      },
      {
        name: "Retail & Apparel",
        description: "Size/color/matrix variant management, seasonal promotions, customer loyalty points.",
        icon: "ShoppingBag",
        popularSetup: "Barcode Scanner + Tag Printer + Loyalty Screen",
      },
      {
        name: "Restaurants & Cafes",
        description: "Table management, Kitchen Order Tickets (KOT), split checks, quick parcel billing.",
        icon: "Utensils",
        popularSetup: "Touchscreen Terminal + Kitchen Thermal Printer + UPI Screen",
      },
      {
        name: "Electronics & Hardware",
        description: "Serial number warranty tracking, custom quotation generation, contractor credit billing.",
        icon: "Cpu",
        popularSetup: "Full A4 / Thermal Invoicing + Serial Barcode Scanner",
      },
      {
        name: "Wholesale & Distribution",
        description: "Bulk tier pricing, customer credit ledgers, multi-warehouse dispatch tracking.",
        icon: "Truck",
        popularSetup: "Multi-user Networked Terminal + Thermal Dispatch Slips",
      },
    ],
    benefits: [
      {
        title: "Cut Counter Queue Times by 65%",
        description: "Lightning-fast barcode lookup and split tender prevent bottlenecks during peak customer rush hours.",
        metric: "65% Faster",
      },
      {
        title: "Eliminate Stock Shrinkage & Leakage",
        description: "Automatic deduction at the moment of billing ensures physical inventory matches digital counts 100%.",
        metric: "99.98% Accuracy",
      },
      {
        title: "Zero Hardware Lock-In",
        description: "Works with industry-standard ESC/POS thermal printers, USB barcode scanners, and Windows/Linux/Android POS hardware.",
        metric: "Universal Driver",
      },
      {
        title: "Uninterrupted Offline Resilience",
        description: "Keep billing even when your internet connection drops. Data auto-synchronizes securely when back online.",
        metric: "100% Uptime",
      },
    ],
    faqs: [
      {
        question: "Can Durozen POS run when the internet goes down?",
        answer:
          "Yes. Durozen POS includes a robust local offline engine. Your cashiers can continue scanning, issuing thermal receipts, and processing transactions without interruption. All data syncs automatically to the central cloud server once connectivity is restored.",
      },
      {
        question: "What thermal printers and barcode scanners are supported?",
        answer:
          "Durozen POS supports standard ESC/POS 58mm (2-inch) and 80mm (3-inch) thermal printers via USB, LAN/Ethernet, Bluetooth, and Wi-Fi. It is fully compatible with standard 1D and 2D handheld, hands-free, and Bluetooth barcode scanners.",
      },
      {
        question: "How does multi-store synchronization work?",
        answer:
          "All branch terminals communicate with Durozen's centralized cloud database. Catalog updates, pricing modifications, and promotions pushed from headquarters reflect across all branch terminals in real time, while individual store sales and stock changes aggregate automatically into consolidated reports.",
      },
      {
        question: "Is there support for tax compliance and GST/VAT invoices?",
        answer:
          "Yes. Durozen POS generates compliant tax invoices with customizable tax breakdowns (CGST/SGST/IGST, VAT), item-level HSN/SAC codes, and one-click financial report exports formatted for accounting packages.",
      },
      {
        question: "How difficult is it to migrate data from our old billing software?",
        answer:
          "Durozen provides pre-built CSV/Excel migration templates. Our engineering onboarding team assists in migrating your existing product catalog, bar codes, inventory levels, and customer records without operational downtime.",
      },
    ],
    specs: [
      { label: "Deployment", value: "Hybrid Cloud + Local Offline Cache" },
      { label: "Supported OS", value: "Windows 10/11, Ubuntu/Linux, Android POS" },
      { label: "Printer Protocol", value: "ESC/POS, Direct USB, Network (TCP/IP), Bluetooth" },
      { label: "Barcode Types", value: "EAN-13, UPC, Code 128, QR Code, Data Matrix" },
      { label: "Database", value: "Enterprise SQL with AES-256 Encryption" },
      { label: "Multi-Language", value: "English & Localized Receipts" },
    ],
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: "supermarkets",
    name: "Supermarkets & Groceries",
    slug: "supermarkets-groceries",
    category: "High Volume Retail",
    headline: "Handle Thousands of Daily Transactions with Zero Counter Latency",
    description:
      "Engineered for high-throughput grocery lanes. Features weighing scale synchronization, fast item lookups, perishables batch tracking, and sub-second receipt printing.",
    compatibleProducts: ["durozen-pos-billing-tracking"],
    painPoints: [
      "Long checkout queues during evening rush",
      "Perishable stock wastage and untracked expiry dates",
      "Discrepancies between physical stock and billing data",
    ],
    solutions: [
      "Sub-second barcode scanning with quick-access produce grids",
      "Batch & expiry alerts to cycle FIFO stock before spoilage",
      "Automated stock deduction eliminating count variances",
    ],
    imageType: "supermarket",
    accentColor: "from-emerald-600 to-teal-600",
    stats: {
      label: "Average Lane Speed",
      value: "Under 1.5s / item",
    },
  },
  {
    id: "retail-apparel",
    name: "Fashion & Retail Apparel",
    slug: "fashion-apparel",
    category: "Specialty Retail",
    headline: "Manage Multi-Variant Styles, Sizes & Loyalty with Precision",
    description:
      "Perfect for boutiques and apparel chains needing matrix inventory (Size/Color/Fit), barcode tag printing, gift vouchers, and seasonal markdown discounts.",
    compatibleProducts: ["durozen-pos-billing-tracking"],
    painPoints: [
      "Complex SKU matrices across sizes and colors",
      "Manual discount calculations leading to cashier errors",
      "Customer retention and lack of loyalty tracking",
    ],
    solutions: [
      "Multi-dimensional matrix catalog with unified parent SKU",
      "Rule-based automated promotions and buy-one-get-one logic",
      "Integrated customer phone lookup with loyalty point redemption",
    ],
    imageType: "apparel",
    accentColor: "from-rose-600 to-red-600",
    stats: {
      label: "Inventory Accuracy",
      value: "99.9% across sizes",
    },
  },
  {
    id: "restaurants-cafes",
    name: "Restaurants & Cafes",
    slug: "restaurants-cafes",
    category: "Food & Beverage",
    headline: "Speed Up Table Turnover and Kitchen Order Ticket (KOT) Dispatch",
    description:
      "Designed for quick-service counters and dine-in cafes. Route kitchen tickets to remote thermal printers, manage split bills, and track dynamic menu item availability.",
    compatibleProducts: ["durozen-pos-billing-tracking"],
    painPoints: [
      "Miscommunicated orders between counter and kitchen",
      "Slow table bill settlement causing customer delays",
      "Recipe ingredient stock tracking challenges",
    ],
    solutions: [
      "Instant KOT print to kitchen thermal printers over LAN",
      "Rapid split-tender bill settlement with dynamic UPI QR code",
      "Menu item lock when essential ingredients run out",
    ],
    imageType: "restaurant",
    accentColor: "from-amber-500 to-yellow-600",
    stats: {
      label: "Order to Kitchen",
      value: "Instant Print (0.3s)",
    },
  },
  {
    id: "electronics-hardware",
    name: "Electronics & Hardware Stores",
    slug: "electronics-hardware",
    category: "Durables & Tech",
    headline: "Serial Number Warranty Tracking & Contractor Wholesale Accounts",
    description:
      "Built for hardware, electrical, and electronics merchants requiring serial number and IMEI tracking, warranty slips, contractor credit balances, and bulk pricing.",
    compatibleProducts: ["durozen-pos-billing-tracking"],
    painPoints: [
      "Untracked serial numbers complicating warranty claims",
      "Unreconciled contractor credit balances and partial payments",
      "Complex multi-tier price lists for wholesale vs. retail",
    ],
    solutions: [
      "Compulsory serial number capture at checkout with warranty print",
      "Customer credit ledger with outstanding balance limits and reminders",
      "Instant toggling between wholesale, contractor, and retail price tiers",
    ],
    imageType: "electronics",
    accentColor: "from-emerald-600 to-teal-700",
    stats: {
      label: "Warranty Claims",
      value: "100% Serial Traceable",
    },
  },
  {
    id: "wholesale-distribution",
    name: "Wholesale & Distribution",
    slug: "wholesale-distribution",
    category: "B2B & Trade",
    headline: "High-Volume Dispatch Slips, Box Barcoding & Ledger Tracking",
    description:
      "Equip wholesale trading desks with fast credit billing, multi-pack conversions (units/dozens/cartons), warehouse dispatch tracking, and GST reporting.",
    compatibleProducts: ["durozen-pos-billing-tracking"],
    painPoints: [
      "Errors in multi-unit packaging (piece vs. box vs. carton)",
      "Delayed dispatch verification leading to misdelivered stock",
      "Slow month-end tax and statement generation",
    ],
    solutions: [
      "Automatic unit conversion rates linked to a single base inventory item",
      "Dispatch barcode scanning matching billed invoices before loading",
      "One-click statement export for client accounts",
    ],
    imageType: "wholesale",
    accentColor: "from-teal-700 to-emerald-600",
    stats: {
      label: "Dispatch Turnaround",
      value: "40% Faster Shipping",
    },
  },
  {
    id: "pharmacy-healthcare",
    name: "Pharmacy & Healthcare",
    slug: "pharmacy-healthcare",
    category: "Regulated Retail",
    headline: "Strict Batch, Expiry & Physician Prescription Invoicing",
    description:
      "Maintain compliance with automated batch/lot management, near-expiry drug warnings, generic drug substitutes, and doctor prescription records.",
    compatibleProducts: ["durozen-pos-billing-tracking"],
    painPoints: [
      "Accidental sale of expired medicines causing liability",
      "Complex drug salt / composition searching under time pressure",
      "Mandatory drug regulatory audit reporting",
    ],
    solutions: [
      "System-enforced batch validation blocking expired sales",
      "Intelligent search by brand name, generic molecule, or salt",
      "Automated Schedule H / regulatory sales logs in one click",
    ],
    imageType: "pharmacy",
    accentColor: "from-emerald-600 to-teal-700",
    stats: {
      label: "Compliance Safety",
      value: "100% Audit Ready",
    },
  },
];
