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
      <div
        className="py-20"
        style={{ backgroundColor: "#fff8f2", color: "#003b4d" }}
      >
        <div className="max-w-5xl mx-auto px-6">

          {/* What We Do */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed">
              Our structured audit approach helps businesses meet statutory
              requirements while strengthening internal controls and financial
              discipline.
            </p>
          </div>

          {/* Our Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Our Audit & Assurance Services Include
            </h2>

            <div className="space-y-6 text-lg">

              <div className="flex items-start gap-4">
                <FaBalanceScale className="text-2xl mt-1" />
                <p>
                  <strong>Statutory Audit:</strong> Audit as per applicable
                  laws to ensure true and fair presentation of financial
                  statements.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaFileInvoiceDollar className="text-2xl mt-1" />
                <p>
                  <strong>Tax Audit:</strong> Income Tax audits conducted in
                  compliance with the Income Tax Act and reporting standards.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaSearch className="text-2xl mt-1" />
                <p>
                  <strong>Internal Audit:</strong> Evaluation of internal
                  controls, risk management systems, and operational
                  efficiency.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaPercent className="text-2xl mt-1" />
                <p>
                  <strong>GST Audit & Review:</strong> Review of GST records,
                  returns, and compliance to identify gaps and risks.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaSyncAlt className="text-2xl mt-1" />
                <p>
                  <strong>Concurrent Audit:</strong> Ongoing audit support for
                  businesses requiring continuous financial oversight.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaClipboardCheck className="text-2xl mt-1" />
                <p>
                  <strong>Management & Compliance Audit:</strong> Assessment of
                  compliance with statutory, regulatory, and internal policies.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaCertificate className="text-2xl mt-1" />
                <p>
                  <strong>Certification & Assurance Services:</strong>
                  Issuance of certificates, reports, and assurance statements
                  as required by authorities or stakeholders.
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
              <li>Companies & Corporates</li>
              <li>Firms & LLPs</li>
              <li>Trusts & NGOs</li>
              <li>Small & Medium Businesses</li>
            </ul>

            <p className="mt-6 text-lg font-medium">
              With AccountsZ CARE, Audit & Assurance is not just about
              compliance — it’s about building trust, strengthening controls,
              and supporting sustainable business growth.
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

export default Audit;