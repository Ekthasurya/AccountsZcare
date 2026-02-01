// pages/services/Accounting.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaBook, FaCalculator, FaChartLine } from "react-icons/fa";

const Accounting = () => {
  return (
    <section className="relative py-28 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center text-gradient bg-gradient-to-r from-[#0077FF] to-[#FF7F00] bg-clip-text text-transparent">
          Accounting & Bookkeeping Services
        </h1>

        {/* Intro / Hero */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          At AccountsZ CARE, we provide accurate, reliable, and compliant accounting and bookkeeping services designed to give businesses complete financial clarity and peace of mind.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaBook className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Daily Bookkeeping</h3>
            <p className="text-gray-600">Recording all sales, purchases, receipts, and payments with proper classification for accuracy.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaCalculator className="text-[#FF7F00] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ledger & Reconciliation</h3>
            <p className="text-gray-600">Bank, cash, vendor, and customer reconciliation to ensure accuracy and transparency.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaChartLine className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Financial Statements</h3>
            <p className="text-gray-600">Preparation of Profit & Loss Account, Balance Sheet, and Cash Flow Statements for business insights.</p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-12 bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Services Include</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li><strong>Accounting Software Support:</strong> Expert handling of Tally, Zoho Books, Busy, and more.</li>
            <li><strong>GST-Ready Accounting:</strong> Books maintained in line with GST rules for smooth compliance.</li>
            <li><strong>Debtors & Creditors Management:</strong> Track receivables and payables to improve cash flow.</li>
            <li><strong>MIS & Management Reports:</strong> Monthly & quarterly reports for better financial control.</li>
          </ul>
        </div>

        {/* Who We Serve */}
        <div className="mb-12 bg-gradient-to-r from-[#0077FF]/20 via-[#FF7F00]/20 to-[#0077FF]/20 rounded-3xl p-10 shadow-inner text-center border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Who We Serve</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Small & Medium Businesses</li>
            <li>Startups & Professionals</li>
            <li>Traders, Manufacturers & Service Providers</li>
            <li>Individuals & Firms</li>
          </ul>
          <p className="text-gray-700 font-medium">
            With AccountsZ CARE, your accounts are not just maintained — they are managed with care, clarity, and compliance.
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-gradient-to-r from-[#0077FF] to-[#FF7F00] text-white px-12 py-4 rounded-3xl font-semibold shadow-xl hover:opacity-90 transition"
          >
            Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Accounting;
