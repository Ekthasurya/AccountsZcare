// pages/services/TradeLicenseServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFileSignature,
  FaSyncAlt,
  FaEdit,
  FaBuilding,
  FaLaptop,
  FaGlobe
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

      {/* Main Content */}
      <div
        className="py-20"
        style={{ backgroundColor: "#fff8f2", color: "#003b4d" }}
      >
        <div className="max-w-5xl mx-auto px-6">

          {/* Intro */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed">
              Our expert-driven process ensures timely approvals, accurate
              documentation, and hassle-free compliance.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Our Trade License Services Include
            </h2>

            <div className="space-y-6 text-lg">

              <div className="flex items-start gap-4">
                <FaFileSignature className="text-2xl mt-1" />
                <p>
                  <strong>New Trade License Registration:</strong> Complete
                  support for obtaining a new trade license for shops,
                  offices, factories, and commercial establishments.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaSyncAlt className="text-2xl mt-1" />
                <p>
                  <strong>Trade License Renewal:</strong> Timely renewal of
                  existing trade licenses to avoid penalties or business
                  disruption.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaEdit className="text-2xl mt-1" />
                <p>
                  <strong>Amendment / Modification:</strong> Changes in
                  business name, address, nature of business, ownership,
                  or other license details.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaBuilding className="text-2xl mt-1" />
                <p>
                  <strong>Municipal Compliance Support:</strong> Handling
                  documentation and coordination with local municipal
                  authorities.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaLaptop className="text-2xl mt-1" />
                <p>
                  <strong>Online & Offline Application Assistance:</strong>
                  End-to-end application filing through applicable state
                  or municipal portals.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaGlobe className="text-2xl mt-1" />
                <p>
                  <strong>Pan-India Service Coverage:</strong> Trade
                  license services available across all states, UTs,
                  and municipal corporations in India.
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
              <li>Shops & Commercial Establishments</li>
              <li>Traders & Service Providers</li>
              <li>Startups & Small Businesses</li>
              <li>Firms, Companies & Proprietors</li>
            </ul>

            <p className="mt-6 text-lg font-medium">
              With AccountsZ CARE, obtaining and managing your Trade
              License becomes simple, compliant, and stress-free —
              no matter where your business is located in India.
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

export default TradeLicenseServices;