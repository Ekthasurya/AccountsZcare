// pages/services/GST.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaReceipt, FaFileInvoiceDollar, FaCalculator } from "react-icons/fa";

const GST = () => {
  return (
    <section className="py-28 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#0077FF] to-[#FF7F00]">
          Goods & Services Tax (GST) Services
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          At AccountsZ CARE, we provide comprehensive GST Services to help businesses stay compliant, organized, and stress-free under GST law. From registration to return filing and ongoing compliance, our experts ensure accuracy, timeliness, and complete regulatory adherence.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaReceipt className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">GST Registration</h3>
            <p className="text-gray-600">New registration, amendments, and cancellations with complete documentation support.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaFileInvoiceDollar className="text-[#FF7F00] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">GST Return Filing</h3>
            <p className="text-gray-600">Timely filing of GSTR-1, GSTR-3B, GSTR-2B reconciliation, GSTR-9 & GSTR-9C returns.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaCalculator className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">GST Accounting & ITC</h3>
            <p className="text-gray-600">Reconciliation of sales/purchases, proper ITC tracking, and compliance with e-invoice & e-way bill requirements.</p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-12 bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our GST Services Include</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>GST Notices & Departmental Support: Professional handling of notices, replies, and assessments.</li>
            <li>GST Advisory & Compliance Review: Guidance on applicability, tax rates, place of supply, and planning.</li>
            <li>E-Invoice & E-Way Bill Compliance: Proper generation and reporting for all GST transactions.</li>
          </ul>
        </div>

        {/* Who We Serve */}
        <div className="mb-12 bg-gradient-to-r from-[#0077FF]/20 via-[#FF7F00]/20 to-[#0077FF]/20 rounded-3xl p-10 shadow-inner text-center border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Who We Serve</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Traders & Manufacturers</li>
            <li>Service Providers</li>
            <li>Small & Medium Businesses</li>
            <li>Startups & Professionals</li>
          </ul>
          <p className="text-gray-700 font-medium">
            With AccountsZ CARE, GST compliance becomes simple, systematic, and stress-free — allowing you to focus on growing your business while we handle tax complexities.
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

export default GST;
