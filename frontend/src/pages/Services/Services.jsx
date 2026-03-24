import { useState } from "react";
import React from "react";

import { motion } from "framer-motion";
import PageWrapper from "../../components/layout/PageWrapper";
import Container from "../../components/common/Container";
import Card from "../../components/ui/Card";
import { FaBook, FaFileInvoiceDollar, FaMoneyCheckAlt, FaReceipt, FaUsers, FaIdCard, FaBuilding, FaClipboardCheck, FaKey, FaCheckCircle, FaUserTie, FaClock, FaHandsHelping, FaMoneyBillWave, FaMapMarkedAlt, FaLock, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  { title: "Accounting & Bookkeeping", description: "Maintain accurate financial records.", link: "/services/accounting", icon: <FaBook className="w-12 h-12 text-orange-500 mx-auto mb-4" /> },
  { title: "Income Tax Services", description: "Expert income tax filing & advisory.", link: "/services/income-tax", icon: <FaFileInvoiceDollar className="w-12 h-12 text-orange-500 mx-auto mb-4" /> },
  { title: "TDS Return Services", description: "Timely TDS return filing & compliance.", link: "/services/tds-return", icon: <FaMoneyCheckAlt className="w-12 h-12 text-orange-500 mx-auto mb-4" /> },
  { title: "GST Services", description: "Seamless GST compliance & returns.", link: "/services/gst", icon: <FaReceipt className="w-12 h-12 text-orange-500 mx-auto mb-4" /> },
  { title: "PF & ESIC Services", description: "Employee PF & ESIC compliance.", link: "/services/pf-esic", icon: <FaUsers className="w-12 h-12 text-orange-500 mx-auto mb-4" /> },
  { title: "PAN & TAN Services", description: "PAN/TAN registration & assistance.", link: "/services/pan-tan", icon: <FaIdCard className="w-12 h-12 text-orange-500 mx-auto mb-4" /> },
  { title: "Trade License Services", description: "All India trade license services.", link: "/services/trade-license", icon: <FaBuilding className="w-12 h-12 text-orange-500 mx-auto mb-4" /> },
  { title: "Audit & Assurance", description: "Comprehensive audit & assurance services.", link: "/services/audit", icon: <FaClipboardCheck className="w-12 h-12 text-orange-500 mx-auto mb-4" /> },
  { title: "DSC Registration", description: "Digital signature certificate registration.", link: "/services/dsc-registration", icon: <FaKey className="w-12 h-12 text-orange-500 mx-auto mb-4" /> },
];



const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleProcess = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <PageWrapper>
      {/* Hero Section */}
     <section
  className="text-white py-32 text-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/6693650/pexels-photo-6693650.jpeg')",
  }}
>
  <Container>
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
      Our Services & How We Work
    </h1>

    <p className="text-lg md:text-xl max-w-3xl mx-auto">
      AccountsZ CARE provides top-notch accounting, taxation, payroll, and
      business advisory solutions. Here’s how we help your business thrive.
    </p>
  </Container>
</section>


      {/* Services Section */}
 <section className="py-28" style={{ backgroundColor: "#fff8f2" }}>
  <Container>
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#0c3750]">
      What We Offer
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link to={service.link}>
            <Card className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 hover:bg-gradient-to-tr hover:from-[#0077FF] hover:to-[#FF7F00] transition-all duration-500 bg-white border border-gray-200 text-center">

              {/* Icon */}
              {service.icon}

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#0c3750] mb-4">
                {service.title}
              </h3>

              {/* Short Description */}
              <p className="text-[#0c3750]">
                {service.description}
              </p>

            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  </Container>
</section>


      {/* Why Choose Us Section */}
  <section className="py-28 bg-[fff0e0]">
  <Container>
    {/* Section Title */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#0c3750]">
      Why Choose AccountsZ CARE
    </h2>

    {/* Features Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { icon: <FaCheckCircle />, title: "One-stop Accounting, Tax & Compliance" },
        { icon: <FaUserTie />, title: "Experienced Professionals" },
        { icon: <FaClock />, title: "Accurate, Timely & Compliant" },
        { icon: <FaHandsHelping />, title: "Personalized Support for Every Client" },
        { icon: <FaMoneyBillWave />, title: "Transparent Pricing & Ethical Practices" },
        { icon: <FaMapMarkedAlt />, title: "Pan-India Service Availability" },
        { icon: <FaLock />, title: "Complete Data Security & Confidentiality" },
        { icon: <FaStar />, title: "Reliable & Trusted Complete Accounting Solutions" },
      ].map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 transform transition-all duration-300 border border-orange-400">
            <div className="text-5xl mb-4 text-orange-500">
              {React.cloneElement(Icon, { className: "w-12 h-12 mx-auto" })}
            </div>
            <h3 className="text-xl font-semibold text-[#0c3750]">{feature.title}</h3>
          </div>
        );
      })}
    </div>

    {/* Highlighted Central Line */}
    <div className="mt-16 text-center">
      <p className="text-2xl font-bold text-orange-500">
        AccountsZ CARE – Complete Accounting Solution You Can Trust
      </p>
    </div>
  </Container>
</section>



   {/* Final CTA Banner */}
<section
  className="py-16 text-center text-white bg-cover bg-center bg-fixed"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/6693650/pexels-photo-6693650.jpeg')",
  }}
>
  <Container>
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
      Ready to Grow Your Business?
    </h2>

    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
      Contact AccountsZ CARE for reliable accounting, taxation, and compliance
      solutions designed for long-term growth.
    </p>

    <div className="flex justify-center">
      <button className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-semibold shadow-xl hover:bg-orange-600 transition">
        Get Free Consultation
      </button>
    </div>
  </Container>
</section>
    </PageWrapper>
  );
};

export default Services;
