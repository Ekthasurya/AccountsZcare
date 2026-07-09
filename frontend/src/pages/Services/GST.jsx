
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
  FaLightbulb,
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

      <div className="py-20 bg-[#F8F8F8] text-[#2D2D2D]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Introduction */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-6">
              Professional GST Compliance Solutions
            </h2>

            <p className="text-lg text-[#555] max-w-4xl mx-auto leading-relaxed">
              From GST registration to return filing and compliance management,
              our experts ensure accuracy, timely submissions, and complete
              regulatory adherence so that your business remains compliant and
              stress-free.
            </p>
          </div>

          {/* GST Services */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-[#2D2D2D] mb-12">
              Our GST Services Include
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaFileSignature className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    GST Registration
                  </h3>
                  <p className="text-[#666]">
                    New GST registration, amendments, cancellation, and
                    documentation support for businesses of all sizes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaFileInvoice className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    GST Return Filing
                  </h3>
                  <p className="text-[#666]">
                    Timely filing of GSTR-1, GSTR-3B, GSTR-9, GSTR-9C and
                    reconciliation of GST data.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaBalanceScale className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    GST Accounting & Reconciliation
                  </h3>
                  <p className="text-[#666]">
                    Reconciliation of sales, purchases, GST liability, and books
                    of accounts for accurate compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaPercent className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Input Tax Credit (ITC)
                  </h3>
                  <p className="text-[#666]">
                    Proper tracking, verification, and optimization of eligible
                    Input Tax Credit claims.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaTruck className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    E-Invoice & E-Way Bill
                  </h3>
                  <p className="text-[#666]">
                    Assistance with e-invoice generation, reporting, and e-way
                    bill compliance requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaExclamationTriangle className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    GST Notice Handling
                  </h3>
                  <p className="text-[#666]">
                    Professional assistance in replying to GST notices,
                    assessments, and departmental communications.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaLightbulb className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    GST Advisory & Compliance Review
                  </h3>
                  <p className="text-[#666]">
                    Expert guidance on GST applicability, tax rates, place of
                    supply, compliance planning, and risk mitigation.
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
                "Traders & Manufacturers",
                "Service Providers",
                "Small & Medium Businesses",
                "Startups & Professionals",
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
              , GST compliance becomes simple, systematic, and stress-free —
              allowing you to focus on business growth while we handle the
              complexities of taxation.
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

export default GSTServices;

