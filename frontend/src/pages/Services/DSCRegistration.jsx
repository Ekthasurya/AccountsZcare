// pages/services/DSCServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaKey,
  FaSyncAlt,
  FaUserTie,
  FaEdit,
  FaUsb,
  FaGlobe
} from "react-icons/fa";

const DSCServices = () => {
  return (
    <section className="min-h-screen">

      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224154-26032ffc0d07')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            DSC Registration Services
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At AccountsZ CARE, we provide quick, secure, and reliable
            Digital Signature Certificate (DSC) Registration Services to help
            individuals and businesses complete online statutory filings with ease.
          </p>
        </div>
      </div>

      {/* Main Content */}
     <div className="py-24 bg-[#F8F8F8] text-[#2D2D2D]">
  <div className="max-w-6xl mx-auto px-6">

    {/* Introduction */}
    <div className="mb-16 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Digital Signature Certificate (DSC) Services
      </h2>

      <p className="text-lg text-[#555] max-w-4xl mx-auto leading-relaxed">
        Our streamlined process ensures smooth registration, renewal,
        and compliance with government portal requirements, helping
        businesses and professionals operate securely and efficiently.
      </p>
    </div>

    {/* Services */}
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our DSC Services Include
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/40 shadow-sm hover:shadow-lg transition-all duration-300">
          <FaKey className="text-3xl text-[#2DBCC7] mt-1" />
          <p>
            <strong>New DSC Registration:</strong> Issue of Class 3
            Digital Signature Certificates for individuals, directors,
            and authorized signatories.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/40 shadow-sm hover:shadow-lg transition-all duration-300">
          <FaSyncAlt className="text-3xl text-[#2DBCC7] mt-1" />
          <p>
            <strong>DSC Renewal:</strong> Timely renewal of expired or
            expiring DSCs to avoid disruption in statutory filings.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/40 shadow-sm hover:shadow-lg transition-all duration-300">
          <FaUserTie className="text-3xl text-[#2DBCC7] mt-1" />
          <p>
            <strong>DSC for Directors & Companies:</strong> Registration
            support for Directors, Partners, LLPs, and Companies for MCA,
            GST, and Income Tax filings.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/40 shadow-sm hover:shadow-lg transition-all duration-300">
          <FaEdit className="text-3xl text-[#2DBCC7] mt-1" />
          <p>
            <strong>DSC Modification / Update:</strong> Assistance with
            updates to name, email ID, mobile number, and other DSC details.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/40 shadow-sm hover:shadow-lg transition-all duration-300">
          <FaUsb className="text-3xl text-[#2DBCC7] mt-1" />
          <p>
            <strong>USB Token Support:</strong> Complete guidance for
            token installation, setup, and usage.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/40 shadow-sm hover:shadow-lg transition-all duration-300">
          <FaGlobe className="text-3xl text-[#2DBCC7] mt-1" />
          <p>
            <strong>PAN-India Service Support:</strong> Online verification
            and DSC registration assistance available across India.
          </p>
        </div>

      </div>
    </div>

    {/* Who We Serve */}
    <div className="mb-20 bg-white p-10 rounded-3xl border border-[#C5C7CC]/40 shadow-sm">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Who We Serve
      </h2>

      <div className="grid md:grid-cols-2 gap-4 text-lg">
        <div>✓ Directors & Authorized Signatories</div>
        <div>✓ Companies & LLPs</div>
        <div>✓ Professionals & Consultants</div>
        <div>✓ Individuals Requiring Digital Authentication</div>
      </div>

      <p className="mt-8 text-lg text-center font-medium">
        With{" "}
        <span className="text-[#F88A0B] font-bold">
          AccountsZ CARE
        </span>
        , DSC registration becomes simple, secure, and efficient —
        ensuring uninterrupted access to all statutory and compliance
        portals.
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

export default DSCServices;