// pages/services/PFESIC.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaFileInvoiceDollar, FaCheckCircle } from "react-icons/fa";

const PFESIC = () => {
  return (
    <section className="py-28 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#0077FF] to-[#FF7F00]">
          PF & ESIC Services
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          At AccountsZ CARE, we provide complete PF & ESIC compliance services to help employers meet statutory obligations smoothly and on time. Our expert-led solutions ensure accurate contributions, timely filings, and hassle-free compliance under EPFO and ESIC regulations.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaUsers className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">PF & ESIC Registration</h3>
            <p className="text-gray-600">New registration for establishments under EPFO and ESIC with complete documentation support.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaFileInvoiceDollar className="text-[#FF7F00] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Monthly Contribution & Filing</h3>
            <p className="text-gray-600">Accurate calculation and filing of PF & ESIC monthly returns within statutory due dates.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaCheckCircle className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Compliance & Notices Support</h3>
            <p className="text-gray-600">Professional assistance in responding to notices, inspections, audits, and annual reconciliation of PF & ESIC records.</p>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-12 bg-gradient-to-r from-[#0077FF]/20 via-[#FF7F00]/20 to-[#0077FF]/20 rounded-3xl p-10 shadow-inner text-center border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Who We Serve</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Small & Medium Enterprises</li>
            <li>Corporates & Startups</li>
            <li>Factories & Establishments</li>
            <li>Employers with PF & ESIC obligations</li>
          </ul>
          <p className="text-gray-700 font-medium">
            With AccountsZ CARE, your PF & ESIC compliance is handled with precision, responsibility, and complete care—ensuring peace of mind for both employers and employees.
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

export default PFESIC;
