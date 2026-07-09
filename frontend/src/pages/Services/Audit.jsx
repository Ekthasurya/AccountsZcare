// pages/services/Audit.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaBalanceScale,
  FaFileInvoiceDollar,
  FaSearch,
  FaPercent,
  FaSyncAlt,
  FaClipboardCheck,
  FaCertificate
} from "react-icons/fa";

const Audit = () => {
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
            Audit & Assurance Services
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At AccountsZ CARE, we provide independent, reliable, and
            professional Audit & Assurance Services designed to enhance
            financial transparency, accuracy, and stakeholder confidence.
          </p>
        </div>
      </div>

      {/* Main Content */}
     <div className="py-24 bg-[#F8F8F8]">
  <div className="max-w-6xl mx-auto px-6">

    {/* Introduction */}
    <div className="text-center mb-20">
      <span className="inline-block px-4 py-2 rounded-full bg-[#2DBCC7]/10 text-[#2DBCC7] font-semibold text-sm mb-4">
        Audit & Assurance
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
        Professional Audit & Assurance Services
      </h2>

      <p className="text-lg text-[#555] max-w-4xl mx-auto leading-relaxed">
        Our structured audit approach helps businesses meet statutory
        requirements while strengthening internal controls, ensuring
        compliance, improving operational efficiency, and enhancing
        stakeholder confidence.
      </p>
    </div>

    {/* Services */}
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-center text-[#2D2D2D] mb-12">
        Our Audit & Assurance Services Include
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#C5C7CC]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <FaBalanceScale className="text-3xl text-[#F88A0B] mt-1 shrink-0" />
          <p>
            <strong>Statutory Audit:</strong> Audit as per applicable laws
            to ensure true and fair presentation of financial statements.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#C5C7CC]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <FaFileInvoiceDollar className="text-3xl text-[#F88A0B] mt-1 shrink-0" />
          <p>
            <strong>Tax Audit:</strong> Income Tax audits conducted in
            compliance with applicable tax laws and reporting standards.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#C5C7CC]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <FaSearch className="text-3xl text-[#F88A0B] mt-1 shrink-0" />
          <p>
            <strong>Internal Audit:</strong> Evaluation of internal controls,
            risk management systems, and operational efficiency.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#C5C7CC]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <FaPercent className="text-3xl text-[#F88A0B] mt-1 shrink-0" />
          <p>
            <strong>GST Audit & Review:</strong> Review of GST records,
            returns, and compliance to identify gaps and risks.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#C5C7CC]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <FaSyncAlt className="text-3xl text-[#F88A0B] mt-1 shrink-0" />
          <p>
            <strong>Concurrent Audit:</strong> Ongoing audit support for
            businesses requiring continuous financial oversight.
          </p>
        </div>

        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#C5C7CC]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <FaClipboardCheck className="text-3xl text-[#F88A0B] mt-1 shrink-0" />
          <p>
            <strong>Management & Compliance Audit:</strong> Assessment of
            compliance with statutory, regulatory, and internal policies.
          </p>
        </div>

        <div className="md:col-span-2 flex items-start gap-4 bg-gradient-to-r from-[#2DBCC7]/5 to-[#F88A0B]/5 p-6 rounded-2xl border border-[#2DBCC7]/20 shadow-sm hover:shadow-xl transition-all duration-300">
          <FaCertificate className="text-3xl text-[#2DBCC7] mt-1 shrink-0" />
          <p>
            <strong>Certification & Assurance Services:</strong> Issuance
            of certificates, reports, and assurance statements as required
            by authorities, lenders, investors, and stakeholders.
          </p>
        </div>

      </div>
    </div>

    {/* Who We Serve */}
    <div className="bg-white rounded-3xl p-10 shadow-md border border-[#C5C7CC]/30 mb-20">

      <h2 className="text-4xl font-bold text-center text-[#2D2D2D] mb-10">
        Who We Serve
      </h2>

      <div className="grid md:grid-cols-2 gap-5 text-lg">

        <div className="flex items-center gap-3">
          <span className="text-[#2DBCC7] text-xl">✓</span>
          Companies & Corporates
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[#2DBCC7] text-xl">✓</span>
          Firms & LLPs
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[#2DBCC7] text-xl">✓</span>
          Trusts & NGOs
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[#2DBCC7] text-xl">✓</span>
          Small & Medium Businesses
        </div>

      </div>

      <div className="mt-8 pt-8 border-t border-[#C5C7CC]/30">
        <p className="text-center text-lg text-[#555] leading-relaxed">
          With
          <span className="font-bold text-[#F88A0B]">
            {" "}AccountsZ CARE
          </span>
          , Audit & Assurance is not just about compliance—it is about
          building trust, strengthening controls, and supporting
          sustainable business growth.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center">
      <Link
        to="/services"
        className="inline-flex items-center gap-2 bg-[#F88A0B] text-white px-12 py-4 rounded-2xl font-semibold shadow-lg hover:bg-[#E67E09] hover:scale-105 transition-all duration-300"
      >
        ← Back to Services
      </Link>
    </div>

  </div>
</div>
    </section>
  );
};

export default Audit;