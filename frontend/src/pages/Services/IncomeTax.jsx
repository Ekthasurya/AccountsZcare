// pages/services/IncomeTax.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFileInvoiceDollar, FaChartPie, FaHandshake } from "react-icons/fa";

const IncomeTax = () => {
  return (
    <section className="relative py-28 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#0077FF] to-[#FF7F00]">
          Income Tax Services
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          At AccountsZ CARE, we offer end-to-end Income Tax Services to ensure complete compliance, accuracy, and peace of mind. Our expert-driven approach helps individuals and businesses minimize tax liability while staying fully aligned with the latest Income Tax laws and regulations.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaFileInvoiceDollar className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">ITR Filing</h3>
            <p className="text-gray-600">Timely and accurate filing for individuals, professionals, firms, companies, and trusts.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaChartPie className="text-[#FF7F00] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tax Planning & Advisory</h3>
            <p className="text-gray-600">Strategic tax planning to legally reduce tax burden and improve financial efficiency.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaHandshake className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">TDS & Compliance</h3>
            <p className="text-gray-600">TDS calculation, return filing, challan generation, and compliance support for businesses.</p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-12 bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Income Tax Services Include</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li><strong>Business & Professional Tax Compliance:</strong> Income tax compliance for proprietorships, partnerships, LLPs, and companies.</li>
            <li><strong>Advance & Self-Assessment Tax:</strong> Guidance on advance tax and self-assessment payments.</li>
            <li><strong>Notices & Assessment Support:</strong> Professional handling of notices, scrutiny cases, and departmental communications.</li>
            <li><strong>Capital Gains & Other Income Advisory:</strong> Expert guidance on capital gains, rental income, and other taxable income sources.</li>
          </ul>
        </div>

        {/* Who We Serve */}
        <div className="mb-12 bg-gradient-to-r from-[#0077FF]/20 via-[#FF7F00]/20 to-[#0077FF]/20 rounded-3xl p-10 shadow-inner text-center border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Who We Serve</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Salaried Individuals</li>
            <li>Professionals & Freelancers</li>
            <li>Small & Medium Businesses</li>
            <li>Startups & Corporates</li>
          </ul>
          <p className="text-gray-700 font-medium">
            With AccountsZ CARE, your Income Tax matters are handled with expertise, precision, and complete care — so you can focus on growth without tax worries.
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

export default IncomeTax;
