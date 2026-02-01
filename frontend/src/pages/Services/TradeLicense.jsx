// pages/services/TradeLicense.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaRegFileAlt, FaCheckCircle } from "react-icons/fa";

const TradeLicense = () => {
  return (
    <section className="py-28 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#0077FF] to-[#FF7F00]">
          Trade License Services (All Over India)
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          At AccountsZ CARE, we provide end-to-end Trade License Services across all states and cities in India, helping businesses operate legally and smoothly as per local municipal laws. Our expert-driven process ensures timely approvals, accurate documentation, and hassle-free compliance.
        </p>

        {/* Services Include Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaBuilding className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">New Trade License Registration</h3>
            <p className="text-gray-600">Complete support for obtaining a new trade license for shops, offices, factories, and commercial establishments.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaRegFileAlt className="text-[#FF7F00] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Renewal & Amendments</h3>
            <p className="text-gray-600">Timely renewal, amendments, or modifications of trade licenses to ensure compliance and avoid penalties.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaCheckCircle className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pan-India Support</h3>
            <p className="text-gray-600">Trade license services available across all states, UTs, and municipal corporations in India, online or offline.</p>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-12 bg-gradient-to-r from-[#0077FF]/20 via-[#FF7F00]/20 to-[#0077FF]/20 rounded-3xl p-10 shadow-inner text-center border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Who We Serve</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Shops & Commercial Establishments</li>
            <li>Traders & Service Providers</li>
            <li>Startups & Small Businesses</li>
            <li>Firms, Companies & Proprietors</li>
          </ul>
          <p className="text-gray-700 font-medium">
            With AccountsZ CARE, obtaining and managing your Trade License becomes simple, compliant, and stress-free—no matter where your business is located in India.
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

export default TradeLicense;
