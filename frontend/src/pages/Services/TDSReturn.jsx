// pages/services/TDSReturnServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaCalculator,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaFileSignature,
  FaBalanceScale,
  FaEdit,
  FaExclamationTriangle,
} from "react-icons/fa";

const TDSReturnServices = () => {
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
            TDS Return Services
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At AccountsZ CARE, we provide complete and reliable TDS Return
            Services to help businesses and professionals stay fully compliant
            with Income Tax regulations.
          </p>
        </div>
      </div>

      <div className="py-20 bg-[#F8F8F8] text-[#2D2D2D]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Introduction */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-6">
              Professional TDS Compliance Solutions
            </h2>

            <p className="text-lg text-[#555] max-w-4xl mx-auto leading-relaxed">
              Our structured approach ensures accurate deduction, timely
              filing, and error-free reporting, reducing the risk of
              penalties, notices, and compliance issues while keeping your
              business fully aligned with Income Tax regulations.
            </p>
          </div>

          {/* Services */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-[#2D2D2D] mb-12">
              Our TDS Services Include
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaCalculator className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    TDS Calculation & Deduction
                  </h3>
                  <p className="text-[#666]">
                    Accurate calculation of TDS on salary, professional
                    fees, contract payments, rent, interest, and other
                    applicable payments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaFileInvoiceDollar className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Quarterly TDS Return Filing
                  </h3>
                  <p className="text-[#666]">
                    Preparation and filing of TDS returns (Form 24Q,
                    26Q, 27Q, 27EQ) within statutory due dates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaMoneyCheckAlt className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Challan Preparation & Payment Support
                  </h3>
                  <p className="text-[#666]">
                    Generation of TDS challans and guidance for timely
                    tax payments and statutory compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaFileSignature className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Form 16 & Form 16A Issuance
                  </h3>
                  <p className="text-[#666]">
                    Preparation and issuance of TDS certificates to
                    employees, consultants, and vendors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaBalanceScale className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    TDS Reconciliation
                  </h3>
                  <p className="text-[#666]">
                    Reconciliation of returns with Form 26AS and
                    TRACES records to ensure accuracy and avoid
                    mismatches.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaEdit className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    TDS Correction Returns
                  </h3>
                  <p className="text-[#666]">
                    Revision and correction of TDS returns for PAN
                    errors, challan mismatches, and other discrepancies.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaExclamationTriangle className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Notices & Compliance Support
                  </h3>
                  <p className="text-[#666]">
                    Professional handling of TDS notices and assistance
                    with departmental queries, assessments, and
                    compliance matters.
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
                "Businesses & Companies",
                "Professionals & Consultants",
                "Employers & Organizations",
                "Individuals with TDS Obligations",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-lg text-[#444]"
                >
                  <span className="text-[#2DBCC7] text-xl font-bold">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-lg text-[#555] leading-relaxed">
              With{" "}
              <span className="font-bold text-[#F88A0B]">
                AccountsZ CARE
              </span>
              , your TDS compliance is managed with accuracy,
              timeliness, and complete care — so you can focus on
              your core business operations while we handle the
              complexities of tax compliance.
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

export default TDSReturnServices;