
// pages/services/PANTANServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaIdCard,
  FaEdit,
  FaGlobe,
  FaFileSignature,
  FaSyncAlt,
  FaPrint,
} from "react-icons/fa";

const PANTANServices = () => {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-1696413565d3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            PAN & TAN Services
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At AccountsZ CARE, we provide fast, reliable, and hassle-free
            PAN & TAN Services for individuals, businesses, and organizations.
          </p>
        </div>
      </div>

      <div className="py-20 bg-[#F8F8F8] text-[#2D2D2D]">
        <div className="max-w-6xl mx-auto px-6">

          {/* Introduction */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-6">
              Professional PAN & TAN Registration Solutions
            </h2>

            <p className="text-lg text-[#555] max-w-4xl mx-auto leading-relaxed">
              Our expert support ensures accurate applications, timely
              processing, and complete compliance with Income Tax Department
              requirements, helping individuals and businesses obtain and
              manage PAN and TAN efficiently.
            </p>
          </div>

          {/* Services */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-[#2D2D2D] mb-12">
              Our PAN & TAN Services Include
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaIdCard className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    New PAN Application
                  </h3>
                  <p className="text-[#666]">
                    PAN application for individuals, firms, companies,
                    LLPs, and trusts with complete end-to-end support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaEdit className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    PAN Correction / Update
                  </h3>
                  <p className="text-[#666]">
                    Correction of name, date of birth, address,
                    photograph, or other PAN details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaGlobe className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    PAN for Non-Residents (NRI)
                  </h3>
                  <p className="text-[#666]">
                    PAN application and compliance support for NRIs
                    and foreign entities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaFileSignature className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    New TAN Registration
                  </h3>
                  <p className="text-[#666]">
                    TAN application for businesses and employers
                    required to deduct or collect tax.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaSyncAlt className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    TAN Correction / Update
                  </h3>
                  <p className="text-[#666]">
                    Correction of TAN details and assistance with
                    record updates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaPrint className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Lost PAN / TAN Reprint
                  </h3>
                  <p className="text-[#666]">
                    Duplicate PAN card or TAN allotment letter
                    reissue support.
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
                "Individuals & Professionals",
                "Businesses & Startups",
                "Companies & Firms",
                "Trusts & NGOs",
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
              , PAN & TAN applications are handled efficiently and
              professionally — saving your time and ensuring complete
              compliance from day one.
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

export default PANTANServices;

