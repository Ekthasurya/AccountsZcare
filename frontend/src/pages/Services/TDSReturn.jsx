// pages/services/TDSReturn.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaMoneyCheckAlt, FaFileInvoice, FaFileAlt } from "react-icons/fa";

const TDSReturn = () => {
  return (
    <section className="py-28 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#0077FF] to-[#FF7F00]">
          TDS Return Services
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          At AccountsZ CARE, we provide complete and reliable TDS Return Services to help businesses and professionals stay fully compliant with Income Tax regulations. Our structured approach ensures accurate deduction, timely filing, and error-free reporting, reducing the risk of penalties and notices.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaMoneyCheckAlt className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">TDS Calculation & Deduction</h3>
            <p className="text-gray-600">Accurate calculation of TDS on salary, professional fees, contract payments, rent, interest, and other payments.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaFileInvoice className="text-[#FF7F00] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quarterly Return Filing</h3>
            <p className="text-gray-600">Preparation and filing of TDS returns (Form 24Q, 26Q, 27Q, 27EQ) within statutory due dates.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition">
            <FaFileAlt className="text-[#0077FF] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Challan & Form 16/16A</h3>
            <p className="text-gray-600">Generation of TDS challans and issuance of TDS certificates to employees and vendors.</p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-12 bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our TDS Services Include</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li><strong>TDS Reconciliation:</strong> Reconciliation of returns with TRACES to ensure accuracy and avoid mismatches.</li>
            <li><strong>TDS Correction Returns:</strong> Revision and correction for PAN errors, challan mismatches, or discrepancies.</li>
            <li><strong>Notices & Compliance Support:</strong> Professional handling of TDS notices and assistance with departmental queries.</li>
          </ul>
        </div>

        {/* Who We Serve */}
        <div className="mb-12 bg-gradient-to-r from-[#0077FF]/20 via-[#FF7F00]/20 to-[#0077FF]/20 rounded-3xl p-10 shadow-inner text-center border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Who We Serve</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Businesses & Companies</li>
            <li>Professionals & Consultants</li>
            <li>Employers & Organizations</li>
            <li>Individuals with TDS obligations</li>
          </ul>
          <p className="text-gray-700 font-medium">
            With AccountsZ CARE, your TDS compliance is managed with accuracy, timeliness, and complete care — so you can focus on your core business operations.
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-gradient-to-r from-[#0077FF] to-[#FF7F00] text-white px-12 py-4 rounded-3xl font-semibold shadow-xl hover:opacity-90 transition"
          >
            Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TDSReturn;
