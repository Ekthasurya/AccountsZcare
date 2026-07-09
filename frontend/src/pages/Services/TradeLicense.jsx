
// pages/services/TradeLicenseServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFileSignature,
  FaSyncAlt,
  FaEdit,
  FaBuilding,
  FaLaptop,
  FaGlobe,
} from "react-icons/fa";

const TradeLicenseServices = () => {
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
            Trade License Services
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At AccountsZ CARE, we provide end-to-end Trade License Services
            across all states and cities in India, helping businesses operate
            legally and smoothly as per local municipal laws.
          </p>
        </div>
      </div>

      <div className="py-20 bg-[#F8F8F8] text-[#2D2D2D]">
        <div className="max-w-6xl mx-auto px-6">

          {/* Introduction */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-6">
              Professional Trade License Compliance Solutions
            </h2>

            <p className="text-lg text-[#555] max-w-4xl mx-auto leading-relaxed">
              Our expert-driven process ensures timely approvals, accurate
              documentation, and hassle-free compliance with municipal
              regulations, enabling businesses to operate legally and
              confidently across India.
            </p>
          </div>

          {/* Services */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-[#2D2D2D] mb-12">
              Our Trade License Services Include
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaFileSignature className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    New Trade License Registration
                  </h3>
                  <p className="text-[#666]">
                    Complete support for obtaining a new trade license
                    for shops, offices, factories, and commercial
                    establishments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaSyncAlt className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Trade License Renewal
                  </h3>
                  <p className="text-[#666]">
                    Timely renewal of existing trade licenses to avoid
                    penalties, interruptions, or compliance issues.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaEdit className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Amendment / Modification
                  </h3>
                  <p className="text-[#666]">
                    Changes in business name, address, ownership,
                    nature of business, or other license details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaBuilding className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Municipal Compliance Support
                  </h3>
                  <p className="text-[#666]">
                    Complete assistance with documentation,
                    inspections, and coordination with municipal
                    authorities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaLaptop className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Online & Offline Application Assistance
                  </h3>
                  <p className="text-[#666]">
                    End-to-end filing support through applicable
                    state government and municipal portals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
                <FaGlobe className="text-4xl text-[#2DBCC7] mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
                    Pan-India Service Coverage
                  </h3>
                  <p className="text-[#666]">
                    Trade license services available across all states,
                    union territories, and municipal corporations in India.
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
                "Shops & Commercial Establishments",
                "Traders & Service Providers",
                "Startups & Small Businesses",
                "Firms, Companies & Proprietors",
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
              , obtaining and managing your Trade License becomes
              simple, compliant, and stress-free — no matter where
              your business is located in India.
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

export default TradeLicenseServices;
