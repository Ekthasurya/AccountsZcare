// pages/services/DSCRegistration.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaKey, FaCheckCircle, FaUserTie } from "react-icons/fa";

const DSCRegistration = () => {
  return (
    <section className="py-28 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#0077FF] to-[#FF7F00]">
          DSC Registration Services
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          At AccountsZ CARE, we provide quick, secure, and reliable Digital Signature Certificate (DSC) Registration Services to help individuals and businesses complete online statutory filings with ease. Our streamlined process ensures smooth registration, renewal, and compliance with government portal requirements.
        </p>

        {/* Services Include Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaKey className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">New DSC Registration</h3>
            <p className="text-gray-600">Issuance of Class 3 Digital Signature Certificates for individuals, directors, and authorized signatories.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaCheckCircle className="text-[#FF7F00] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">DSC Renewal & Modification</h3>
            <p className="text-gray-600">Timely renewal and update of DSCs to ensure uninterrupted access to statutory and compliance portals.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaUserTie className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">PAN-India Service</h3>
            <p className="text-gray-600">DSC registration services for Directors, Companies, LLPs, and individuals across India with online verification support.</p>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-12 bg-gradient-to-r from-[#0077FF]/20 via-[#FF7F00]/20 to-[#0077FF]/20 rounded-3xl p-10 shadow-inner text-center border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Who We Serve</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Directors & Authorized Signatories</li>
            <li>Companies & LLPs</li>
            <li>Professionals & Consultants</li>
            <li>Individuals requiring digital authentication</li>
          </ul>
          <p className="text-gray-700 font-medium">
            With AccountsZ CARE, DSC registration is simple, secure, and efficient—ensuring uninterrupted access to all statutory and compliance portals.
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

export default DSCRegistration;
