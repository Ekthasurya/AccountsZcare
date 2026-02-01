// pages/services/Audit.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardCheck, FaFileAlt, FaCheckCircle } from "react-icons/fa";

const Audit = () => {
  return (
    <section className="py-28 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#0077FF] to-[#FF7F00]">
          Audit & Assurance Services
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          At AccountsZ CARE, we provide independent, reliable, and professional Audit & Assurance Services designed to enhance financial transparency, accuracy, and stakeholder confidence. Our structured audit approach helps businesses meet statutory requirements while strengthening internal controls and financial discipline.
        </p>

        {/* Services Include Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaClipboardCheck className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Statutory & Tax Audit</h3>
            <p className="text-gray-600">Audits conducted as per applicable laws and Income Tax requirements, ensuring accurate financial statements and compliance.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaFileAlt className="text-[#FF7F00] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Internal & GST Audit</h3>
            <p className="text-gray-600">Evaluation of internal controls, operational efficiency, and GST compliance to mitigate risks and strengthen processes.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaCheckCircle className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Management & Assurance</h3>
            <p className="text-gray-600">Ongoing support, certification, and assurance services to enhance stakeholder confidence and support business growth.</p>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-12 bg-gradient-to-r from-[#0077FF]/20 via-[#FF7F00]/20 to-[#0077FF]/20 rounded-3xl p-10 shadow-inner text-center border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Who We Serve</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Companies & Corporates</li>
            <li>Firms & LLPs</li>
            <li>Trusts & NGOs</li>
            <li>Small & Medium Businesses</li>
          </ul>
          <p className="text-gray-700 font-medium">
            With AccountsZ CARE, Audit & Assurance is not just about compliance—it’s about building trust, strengthening controls, and supporting sustainable business growth.
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

export default Audit;
