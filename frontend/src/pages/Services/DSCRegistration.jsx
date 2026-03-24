// pages/services/DSCServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaKey,
  FaSyncAlt,
  FaUserTie,
  FaEdit,
  FaUsb,
  FaGlobe
} from "react-icons/fa";

const DSCServices = () => {
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
            DSC Registration Services
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At AccountsZ CARE, we provide quick, secure, and reliable
            Digital Signature Certificate (DSC) Registration Services to help
            individuals and businesses complete online statutory filings with ease.
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
              Our streamlined process ensures smooth registration, renewal,
              and compliance with government portal requirements.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Our DSC Services Include
            </h2>

            <div className="space-y-6 text-lg">

              <div className="flex items-start gap-4">
                <FaKey className="text-2xl mt-1" />
                <p>
                  <strong>New DSC Registration:</strong> Issue of Class 3
                  Digital Signature Certificates for individuals, directors,
                  and authorized signatories.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaSyncAlt className="text-2xl mt-1" />
                <p>
                  <strong>DSC Renewal:</strong> Timely renewal of expired or
                  expiring DSCs to avoid disruption in statutory filings.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaUserTie className="text-2xl mt-1" />
                <p>
                  <strong>DSC for Directors & Companies:</strong> DSC
                  registration for Directors, Partners, LLPs, and Companies
                  for MCA, GST, and Income Tax filings.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaEdit className="text-2xl mt-1" />
                <p>
                  <strong>DSC Modification / Update:</strong> Changes in
                  name, email ID, mobile number, or other DSC-related details.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaUsb className="text-2xl mt-1" />
                <p>
                  <strong>USB Token Support:</strong> Assistance with DSC
                  token setup, installation, and usage guidance.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaGlobe className="text-2xl mt-1" />
                <p>
                  <strong>PAN-India Service Support:</strong> DSC
                  registration services available across India with
                  online verification support.
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
              <li>Directors & Authorized Signatories</li>
              <li>Companies & LLPs</li>
              <li>Professionals & Consultants</li>
              <li>Individuals requiring digital authentication</li>
            </ul>

            <p className="mt-6 text-lg font-medium">
              With AccountsZ CARE, DSC registration is simple, secure,
              and efficient — ensuring uninterrupted access to all
              statutory and compliance portals.
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

export default DSCServices;