// pages/services/PANTANServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaIdCard,
  FaEdit,
  FaGlobe,
  FaFileSignature,
  FaSyncAlt,
  FaPrint
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

      {/* Main Content */}
      <div
        className="py-20"
        style={{ backgroundColor: "#fff8f2", color: "#003b4d" }}
      >
        <div className="max-w-5xl mx-auto px-6">

          {/* Intro */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed">
              Our expert support ensures accurate application, timely
              processing, and complete compliance with Income Tax Department
              requirements.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Our PAN & TAN Services Include
            </h2>

            <div className="space-y-6 text-lg">

              <div className="flex items-start gap-4">
                <FaIdCard className="text-2xl mt-1" />
                <p>
                  <strong>New PAN Application:</strong> PAN application for
                  individuals, firms, companies, LLPs, and trusts with
                  complete end-to-end support.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaEdit className="text-2xl mt-1" />
                <p>
                  <strong>PAN Correction / Update:</strong> Correction of
                  name, date of birth, address, photograph, or other
                  PAN details.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaGlobe className="text-2xl mt-1" />
                <p>
                  <strong>PAN for Non-Residents (NRI):</strong> PAN
                  application and compliance support for NRIs and
                  foreign entities.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaFileSignature className="text-2xl mt-1" />
                <p>
                  <strong>New TAN Registration:</strong> TAN application
                  for businesses and employers required to deduct or
                  collect tax.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaSyncAlt className="text-2xl mt-1" />
                <p>
                  <strong>TAN Correction / Update:</strong> Correction of
                  TAN details and assistance with record updates.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaPrint className="text-2xl mt-1" />
                <p>
                  <strong>Lost PAN / TAN Reprint:</strong> Duplicate PAN
                  card or TAN allotment letter reissue support.
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
              <li>Individuals & Professionals</li>
              <li>Businesses & Startups</li>
              <li>Companies & Firms</li>
              <li>Trusts & NGOs</li>
            </ul>

            <p className="mt-6 text-lg font-medium">
              With AccountsZ CARE, PAN & TAN applications are handled
              efficiently and professionally — saving your time and
              ensuring complete compliance from day one.
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

export default PANTANServices;