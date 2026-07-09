// pages/services/Accounting.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaBalanceScale,
  FaLaptop,
  FaFileInvoiceDollar,
  FaPercent,
  FaUsers,
  FaChartBar
} from "react-icons/fa";

const Accounting = () => {
  return (
    <section className="min-h-screen">

      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Accounting & Bookkeeping Services
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At AccountsZ CARE, we provide accurate, reliable, and compliant
            Accounting & Bookkeeping Services designed to give businesses
            complete financial clarity and peace of mind.
          </p>
        </div>
      </div>

      {/* Main Content */}

<div className="py-20 bg-[#F8F8F8] text-[#2D2D2D]">
  <div className="max-w-6xl mx-auto px-6">

    {/* What We Do */}
    <div className="mb-16 text-center">
      <h2 className="text-4xl font-bold mb-6">
        What We Do
      </h2>

      <p className="text-lg text-[#555] max-w-4xl mx-auto leading-relaxed">
        We manage your day-to-day financial records with precision,
        confidentiality, and compliance, delivering structured accounts
        that support smarter business decisions and sustainable growth.
      </p>
    </div>

    {/* Our Services */}
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services Include
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
          <FaBook className="text-3xl text-[#2DBCC7] mt-1" />
          <p>
            <strong>Daily / Monthly Bookkeeping:</strong> Recording of all
            sales, purchases, receipts, and payments with proper
            classification.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
          <FaBalanceScale className="text-3xl text-[#2DBCC7] mt-1" />
          <p>
            <strong>Ledger Maintenance & Reconciliation:</strong> Bank,
            cash, vendor, and customer reconciliation to ensure accuracy
            and transparency.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
          <FaLaptop className="text-3xl text-[#2DBCC7] mt-1" />
          <p>
            <strong>Accounting Software Support:</strong> Expert handling
            of Tally, Zoho Books, Busy, and other accounting software.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
          <FaFileInvoiceDollar className="text-3xl text-[#2DBCC7] mt-1" />
          <p>
            <strong>Financial Statements Preparation:</strong> Preparation
            of Profit & Loss Account, Balance Sheet, and Cash Flow
            Statements.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
          <FaPercent className="text-3xl text-[#2DBCC7] mt-1" />
          <p>
            <strong>GST-Ready Accounting:</strong> Books maintained in
            line with GST rules for smooth return filing and compliance.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
          <FaUsers className="text-3xl text-[#2DBCC7] mt-1" />
          <p>
            <strong>Debtors & Creditors Management:</strong> Tracking
            receivables and payables to improve cash flow and reduce
            delays.
          </p>
        </div>

        <div className="md:col-span-2 flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
          <FaChartBar className="text-3xl text-[#2DBCC7] mt-1" />
          <p>
            <strong>MIS & Management Reports:</strong> Customized monthly
            and quarterly reports for better financial control and
            business performance monitoring.
          </p>
        </div>

      </div>
    </div>

    {/* Who We Serve */}
    <div className="mb-20 bg-white p-10 rounded-3xl border border-[#C5C7CC]/30 shadow-sm">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Who We Serve
      </h2>

      <div className="grid md:grid-cols-2 gap-4 text-lg">
        <div>✓ Small & Medium Businesses</div>
        <div>✓ Startups & Professionals</div>
        <div>✓ Traders & Manufacturers</div>
        <div>✓ Service Providers</div>
        <div>✓ Individuals & Firms</div>
      </div>

      <p className="mt-8 text-lg text-center font-medium text-[#2D2D2D]">
        With <span className="text-[#F88A0B] font-bold">AccountsZ CARE</span>,
        your accounts are not just maintained — they are managed with care,
        clarity, and compliance.
      </p>
    </div>

    {/* CTA */}
    <div className="text-center">
      <Link
        to="/services"
        className="
          inline-block
          bg-[#F88A0B]
          text-white
          px-12
          py-4
          rounded-2xl
          font-semibold
          shadow-lg
          hover:bg-[#E67E09]
          hover:scale-105
          transition-all
          duration-300
        "
      >
        Back to Services
      </Link>
    </div>

  </div>
</div>
    </section>
  );
};

export default Accounting;