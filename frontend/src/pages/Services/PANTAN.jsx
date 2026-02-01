// pages/services/PANTAN.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaIdCard, FaRegFileAlt, FaCheckCircle } from "react-icons/fa";

const PANTAN = () => {
  return (
    <section className="py-28 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#0077FF] to-[#FF7F00]">
          PAN & TAN Services
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          At AccountsZ CARE, we provide fast, reliable, and hassle-free PAN & TAN Services for individuals, businesses, and organizations. Our expert support ensures accurate application, timely processing, and complete compliance with Income Tax Department requirements.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaIdCard className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">New PAN Application</h3>
            <p className="text-gray-600">PAN application for individuals, firms, companies, LLPs, and trusts with end-to-end support.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaRegFileAlt className="text-[#FF7F00] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">PAN / TAN Correction & Update</h3>
            <p className="text-gray-600">Correction of PAN/TAN details including name, address, date of birth, and other required updates.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaCheckCircle className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lost / Duplicate PAN & TAN</h3>
            <p className="text-gray-600">Support for reissue of duplicate PAN card or TAN allotment letters with proper documentation.</p>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-12 bg-gradient-to-r from-[#0077FF]/20 via-[#FF7F00]/20 to-[#0077FF]/20 rounded-3xl p-10 shadow-inner text-center border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Who We Serve</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Individuals & Professionals</li>
            <li>Businesses & Startups</li>
            <li>Companies & Firms</li>
            <li>Trusts & NGOs</li>
          </ul>
          <p className="text-gray-700 font-medium">
            With AccountsZ CARE, PAN & TAN applications are handled efficiently and professionally—saving your time and ensuring complete compliance from day one.
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

export default PANTAN;
