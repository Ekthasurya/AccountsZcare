
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
  FaBalanceScale,
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

      <div className="py-20 bg-[#F8F8F8] text-[#2D2D2D]">
        <div className="max-w-6xl mx-auto px-6">

          {/* Introduction */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-6">
              Professional PF & ESIC Compliance Solutions
            </h2>

            <p className="text-lg text-[#555] max-w-4xl mx-auto leading-relaxed">
              Our expert-led solutions ensure accurate contributions,
              timely filings, and hassle-free compliance under EPFO
              and ESIC regulations, helping employers stay fully compliant
              while focusing on business growth.
            </p>
          </div>

          {/* Services */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-[#2D2D2D] mb-12">
              Our PF & ESIC Services Include
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaFileSignature className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    PF & ESIC Registration
                  </h3>
                  <p className="text-[#666]">
                    New registration for establishments under EPFO and ESIC
                    with complete documentation support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaCalculator className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Monthly Contribution & Return Filing
                  </h3>
                  <p className="text-[#666]">
                    Accurate calculation and filing of PF & ESIC monthly
                    returns within statutory due dates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaUserPlus className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Employee Onboarding & Exit Compliance
                  </h3>
                  <p className="text-[#666]">
                    UAN creation, linking, KYC updates, and handling employee
                    joining and exit formalities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaMoneyCheckAlt className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Challan Generation & Payment Support
                  </h3>
                  <p className="text-[#666]">
                    Timely generation of PF & ESIC challans and guidance
                    for online payments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaLightbulb className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Salary Structure & Compliance Advisory
                  </h3>
                  <p className="text-[#666]">
                    Structuring salaries in line with PF & ESIC rules
                    to ensure compliance and cost efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaExclamationTriangle className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    PF & ESIC Notices & Inspection Support
                  </h3>
                  <p className="text-[#666]">
                    Professional assistance in responding to notices,
                    audits, and departmental inspections.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaBalanceScale className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Annual Returns & Reconciliation
                  </h3>
                  <p className="text-[#666]">
                    Year-end reconciliation of PF & ESIC records to ensure
                    accurate reporting and error-free compliance.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Who We Serve */}
          <div className="bg-white rounded-3xl p-10 border border-[#C5C7CC]/40 shadow-sm mb-20">
            <h2 className="text-4xl font-bold text-center text-[#2D2D2D] mb-10">
              Who We Serve
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Small & Medium Enterprises",
                "Corporates & Startups",
                "Factories & Establishments",
                "Employers with PF & ESIC Obligations",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-lg text-[#444]"
                >
                  <span className="text-[#2DBCC7] text-xl font-bold">✓</span>
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-lg text-[#555] leading-relaxed">
              With{" "}
              <span className="font-bold text-[#F88A0B]">
                AccountsZ CARE
              </span>
              , your PF & ESIC compliance is handled with precision,
              responsibility, and complete care — ensuring peace of mind
              for both employers and employees.
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

export default PFESICServices;
