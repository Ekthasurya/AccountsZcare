// pages/services/GSTServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFileSignature,
  FaFileInvoice,
  FaBalanceScale,
  FaPercent,
  FaTruck,
  FaExclamationTriangle,
  FaLightbulb
} from "react-icons/fa";

const GSTServices = () => {
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
            Goods & Services Tax (GST) Services
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At AccountsZ CARE, we provide comprehensive GST Services to help
            businesses stay compliant, organized, and stress-free under GST law.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="py-20"
        style={{ backgroundColor: "#fff8f2", color: "#003b4d" }}
      >
        <div className="max-w-5xl mx-auto px-6">

          {/* Intro */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed">
              From registration to return filing and ongoing compliance, our
              experts ensure accuracy, timeliness, and complete regulatory
              adherence.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Our GST Services Include
            </h2>

            <div className="space-y-6 text-lg">

              <div className="flex items-start gap-4">
                <FaFileSignature className="text-2xl mt-1" />
                <p>
                  <strong>GST Registration:</strong> New GST registration,
                  amendment, and cancellation with complete documentation
                  support.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaFileInvoice className="text-2xl mt-1" />
                <p>
                  <strong>GST Return Filing:</strong> Timely and accurate filing
                  of GSTR-1, GSTR-3B, GSTR-2B reconciliation, GSTR-9, and
                  GSTR-9C.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaBalanceScale className="text-2xl mt-1" />
                <p>
                  <strong>GST Accounting & Reconciliation:</strong>
                  Reconciliation of sales, purchases, ITC, and GST data with
                  books of accounts.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaPercent className="text-2xl mt-1" />
                <p>
                  <strong>Input Tax Credit (ITC) Management:</strong> Proper
                  tracking, verification, and optimization of eligible Input
                  Tax Credit.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaTruck className="text-2xl mt-1" />
                <p>
                  <strong>E-Invoice & E-Way Bill Compliance:</strong>
                  Generation and compliance support for e-invoicing and
                  e-way bills.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaExclamationTriangle className="text-2xl mt-1" />
                <p>
                  <strong>GST Notices & Departmental Support:</strong>
                  Professional handling of GST notices, replies, and
                  assessments.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaLightbulb className="text-2xl mt-1" />
                <p>
                  <strong>GST Advisory & Compliance Review:</strong>
                  Expert guidance on GST applicability, tax rates,
                  place of supply, and compliance planning.
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
              <li>Traders & Manufacturers</li>
              <li>Service Providers</li>
              <li>Small & Medium Businesses</li>
              <li>Startups & Professionals</li>
            </ul>

            <p className="mt-6 text-lg font-medium">
              With AccountsZ CARE, GST compliance becomes simple,
              systematic, and stress-free — allowing you to focus on
              growing your business while we take care of the tax
              complexities.
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

export default GSTServices;