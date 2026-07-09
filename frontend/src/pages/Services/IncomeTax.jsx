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
      <div className="py-20 bg-[#F8F8F8] text-[#2D2D2D]">
  <div className="max-w-6xl mx-auto px-6">

      {/* Main Content */}
    {/* Services */}
<div className="mb-20">
  <h2 className="text-4xl font-bold text-center text-[#2D2D2D] mb-12">
    Our Income Tax Services Include
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
      <FaFileInvoiceDollar className="text-4xl text-[#2DBCC7] mt-1" />
      <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
        ITR Filing
      </h3>
      <p className="text-[#666]">
        Timely and accurate filing of Income Tax Returns for
        individuals, professionals, firms, companies, and trusts.
      </p>
    </div>

    <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
      <FaLightbulb className="text-4xl text-[#2DBCC7] mb-4" />
      <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
        Tax Planning & Advisory
      </h3>
      <p className="text-[#666]">
        Strategic tax planning to legally reduce tax burden and
        improve financial efficiency.
      </p>
    </div>

    <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
      <FaBriefcase className="text-4xl text-[#2DBCC7] mb-4" />
      <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
        Business Tax Compliance
      </h3>
      <p className="text-[#666]">
        Income tax compliance for proprietorships, partnerships,
        LLPs, and companies.
      </p>
    </div>

    <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
      <FaPercentage className="text-4xl text-[#2DBCC7] mb-4" />
      <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
        TDS & TCS Services
      </h3>
      <p className="text-[#666]">
        TDS calculation, return filing, challan generation and
        compliance support.
      </p>
    </div>

    <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
      <FaCalculator className="text-4xl text-[#2DBCC7] mb-4" />
      <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
        Advance Tax Guidance
      </h3>
      <p className="text-[#666]">
        Proper calculation and guidance on advance tax and
        self-assessment tax payments.
      </p>
    </div>

    <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
      <FaExclamationCircle className="text-4xl text-[#2DBCC7] mb-4" />
      <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
        Notice Handling
      </h3>
      <p className="text-[#666]">
        Professional handling of Income Tax notices,
        scrutiny cases and departmental communications.
      </p>
    </div>

    <div className="md:col-span-2 flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#C5C7CC]/30 shadow-sm hover:shadow-lg transition">
      <FaChartLine className="text-4xl text-[#2DBCC7] mb-4" />
      <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">
        Capital Gains & Income Advisory
      </h3>
      <p className="text-[#666]">
        Expert guidance on capital gains, rental income,
        investments and other taxable income sources.
      </p>
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
      "Salaried Individuals",
      "Professionals & Freelancers",
      "Small & Medium Businesses",
      "Startups & Corporates",
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
    , your Income Tax matters are handled with expertise,
    precision, and complete care — allowing you to focus on
    growth while we manage the complexities of taxation.
  </p>
</div>
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

export default IncomeTax;