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
      <div
        className="py-20"
        style={{ backgroundColor: "#fff8f2", color: "#003b4d" }}
      >
        <div className="max-w-5xl mx-auto px-6">

          {/* What We Do */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What We Do
            </h2>

            <p className="text-lg leading-relaxed">
              We manage your day-to-day financial records with precision and
              confidentiality, delivering structured, well-organized accounts
              that support informed decision-making.
            </p>
          </div>

          {/* Our Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Our Services Include
            </h2>

            <div className="space-y-6 text-lg">

              <div className="flex items-start gap-4">
                <FaBook className="text-2xl mt-1" />
                <p>
                  <strong>Daily / Monthly Bookkeeping:</strong> Recording of all
                  sales, purchases, receipts, and payments with proper
                  classification.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaBalanceScale className="text-2xl mt-1" />
                <p>
                  <strong>Ledger Maintenance & Reconciliation:</strong> Bank,
                  cash, vendor, and customer reconciliation to ensure accuracy
                  and transparency.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaLaptop className="text-2xl mt-1" />
                <p>
                  <strong>Accounting Software Support:</strong> Expert handling
                  of Tally, Zoho Books, Busy, and other accounting software.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaFileInvoiceDollar className="text-2xl mt-1" />
                <p>
                  <strong>Financial Statements Preparation:</strong> Preparation
                  of Profit & Loss Account, Balance Sheet, and Cash Flow
                  Statements.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaPercent className="text-2xl mt-1" />
                <p>
                  <strong>GST-Ready Accounting:</strong> Books maintained in
                  line with GST rules for smooth return filing and compliance.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaUsers className="text-2xl mt-1" />
                <p>
                  <strong>Debtors & Creditors Management:</strong> Tracking
                  receivables and payables to improve cash flow and reduce
                  delays.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaChartBar className="text-2xl mt-1" />
                <p>
                  <strong>MIS & Management Reports:</strong> Customized monthly
                  and quarterly reports for better financial control.
                </p>
              </div>

            </div>
          </div>

          {/* Who We Serve */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Who We Serve
            </h2>

            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>Small & Medium Businesses</li>
              <li>Startups & Professionals</li>
              <li>Traders, Manufacturers & Service Providers</li>
              <li>Individuals & Firms</li>
            </ul>

            <p className="mt-6 text-lg font-medium">
              With AccountsZ CARE, your accounts are not just maintained —
              they are managed with care, clarity, and compliance.
            </p>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link
              to="/services"
              className="inline-block bg-[#003b4d] text-white px-12 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
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