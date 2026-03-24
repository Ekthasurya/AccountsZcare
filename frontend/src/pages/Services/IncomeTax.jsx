// pages/services/IncomeTax.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFileInvoiceDollar,
  FaLightbulb,
  FaBriefcase,
  FaPercentage,
  FaCalculator,
  FaExclamationCircle,
  FaChartLine
} from "react-icons/fa";

const IncomeTax = () => {
  return (
    <section className="min-h-screen">

      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224154-22dec7ec8818')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Income Tax Services
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At AccountsZ CARE, we offer end-to-end Income Tax Services to
            ensure complete compliance, accuracy, and peace of mind.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="py-20"
        style={{ backgroundColor: "#fff8f2", color: "#003b4d" }}
      >
        <div className="max-w-5xl mx-auto px-6">

          {/* Description */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed">
              Our expert-driven approach helps individuals and businesses
              minimize tax liability while staying fully aligned with the
              latest Income Tax laws and regulations.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Our Income Tax Services Include
            </h2>

            <div className="space-y-6 text-lg">

              <div className="flex items-start gap-4">
                <FaFileInvoiceDollar className="text-2xl mt-1" />
                <p>
                  <strong>Income Tax Return (ITR) Filing:</strong> Timely and
                  accurate filing of Income Tax Returns for individuals,
                  professionals, firms, companies, and trusts.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaLightbulb className="text-2xl mt-1" />
                <p>
                  <strong>Tax Planning & Advisory:</strong> Strategic tax
                  planning to legally reduce tax burden and improve financial
                  efficiency.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaBriefcase className="text-2xl mt-1" />
                <p>
                  <strong>Business & Professional Tax Compliance:</strong>
                  Income tax compliance for proprietorships, partnerships,
                  LLPs, and companies.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaPercentage className="text-2xl mt-1" />
                <p>
                  <strong>TDS & TCS Services:</strong> TDS calculation, return
                  filing, challan generation, and compliance support.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaCalculator className="text-2xl mt-1" />
                <p>
                  <strong>Advance Tax & Self-Assessment Tax:</strong> Proper
                  calculation and guidance on advance tax and self-assessment
                  tax payments.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaExclamationCircle className="text-2xl mt-1" />
                <p>
                  <strong>Notices & Assessment Support:</strong> Professional
                  handling of Income Tax notices, scrutiny cases, and
                  departmental communications.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaChartLine className="text-2xl mt-1" />
                <p>
                  <strong>Capital Gains & Other Income Advisory:</strong>
                  Expert guidance on capital gains, rental income, and other
                  taxable income sources.
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
              <li>Salaried Individuals</li>
              <li>Professionals & Freelancers</li>
              <li>Small & Medium Businesses</li>
              <li>Startups & Corporates</li>
            </ul>

            <p className="mt-6 text-lg font-medium">
              With AccountsZ CARE, your Income Tax matters are handled with
              expertise, precision, and complete care — so you can focus on
              your growth without tax worries.
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

export default IncomeTax;