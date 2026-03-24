// pages/services/PFESICServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFileSignature,
  FaCalculator,
  FaUserPlus,
  FaMoneyCheckAlt,
  FaLightbulb,
  FaExclamationTriangle,
  FaBalanceScale
} from "react-icons/fa";

const PFESICServices = () => {
  return (
    <section className="min-h-screen">

      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            PF & ESIC Services
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At AccountsZ CARE, we provide complete PF & ESIC compliance
            services to help employers meet statutory obligations smoothly
            and on time.
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
              Our expert-led solutions ensure accurate contributions, timely
              filings, and hassle-free compliance under EPFO and ESIC
              regulations.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Our PF & ESIC Services Include
            </h2>

            <div className="space-y-6 text-lg">

              <div className="flex items-start gap-4">
                <FaFileSignature className="text-2xl mt-1" />
                <p>
                  <strong>PF & ESIC Registration:</strong> New registration
                  for establishments under EPFO and ESIC with complete
                  documentation support.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaCalculator className="text-2xl mt-1" />
                <p>
                  <strong>Monthly Contribution & Return Filing:</strong>
                  Accurate calculation and filing of PF & ESIC monthly
                  returns within statutory due dates.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaUserPlus className="text-2xl mt-1" />
                <p>
                  <strong>Employee Onboarding & Exit Compliance:</strong>
                  UAN creation, linking, KYC updates, and handling employee
                  joining and exit formalities.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaMoneyCheckAlt className="text-2xl mt-1" />
                <p>
                  <strong>Challan Generation & Payment Support:</strong>
                  Timely generation of PF & ESIC challans and guidance for
                  online payments.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaLightbulb className="text-2xl mt-1" />
                <p>
                  <strong>Salary Structure & Compliance Advisory:</strong>
                  Structuring salaries in line with PF & ESIC rules to
                  ensure compliance and cost efficiency.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaExclamationTriangle className="text-2xl mt-1" />
                <p>
                  <strong>PF & ESIC Notices & Inspections Support:</strong>
                  Professional assistance in responding to notices,
                  audits, and departmental inspections.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaBalanceScale className="text-2xl mt-1" />
                <p>
                  <strong>Annual Returns & Reconciliation:</strong>
                  Year-end reconciliation of PF & ESIC records for
                  error-free compliance.
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
              <li>Small & Medium Enterprises</li>
              <li>Corporates & Startups</li>
              <li>Factories & Establishments</li>
              <li>Employers with PF & ESIC obligations</li>
            </ul>

            <p className="mt-6 text-lg font-medium">
              With AccountsZ CARE, your PF & ESIC compliance is handled
              with precision, responsibility, and complete care — ensuring
              peace of mind for both employers and employees.
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

export default PFESICServices;