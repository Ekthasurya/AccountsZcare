import { useState } from "react";
import React from "react";

import { motion } from "framer-motion";
import PageWrapper from "../../components/layout/PageWrapper";
import Container from "../../components/common/Container";
import Card from "../../components/ui/Card";
import { FaBook, FaFileInvoiceDollar, FaMoneyCheckAlt, FaReceipt, FaUsers, FaIdCard, FaBuilding, FaClipboardCheck, FaKey, FaCheckCircle, FaUserTie, FaClock, FaHandsHelping, FaMoneyBillWave, FaMapMarkedAlt, FaLock, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Accounting & Bookkeeping",
    description: "Maintain accurate financial records.",
    link: "/services/accounting",
    icon: <FaBook className="w-12 h-12 text-[#F88A0B] mx-auto mb-4" />,
  },
  {
    title: "Income Tax Services",
    description: "Expert income tax filing & advisory.",
    link: "/services/income-tax",
    icon: <FaFileInvoiceDollar className="w-12 h-12 text-[#F88A0B] mx-auto mb-4" />,
  },
  {
    title: "TDS Return Services",
    description: "Timely TDS return filing & compliance.",
    link: "/services/tds-return",
    icon: <FaMoneyCheckAlt className="w-12 h-12 text-[#F88A0B] mx-auto mb-4" />,
  },
  {
    title: "GST Services",
    description: "Seamless GST compliance & returns.",
    link: "/services/gst",
    icon: <FaReceipt className="w-12 h-12 text-[#F88A0B] mx-auto mb-4" />,
  },
  {
    title: "PF & ESIC Services",
    description: "Employee PF & ESIC compliance.",
    link: "/services/pf-esic",
    icon: <FaUsers className="w-12 h-12 text-[#F88A0B] mx-auto mb-4" />,
  },
  {
    title: "PAN & TAN Services",
    description: "PAN/TAN registration & assistance.",
    link: "/services/pan-tan",
    icon: <FaIdCard className="w-12 h-12 text-[#F88A0B] mx-auto mb-4" />,
  },
  {
    title: "Trade License Services",
    description: "All India trade license services.",
    link: "/services/trade-license",
    icon: <FaBuilding className="w-12 h-12 text-[#F88A0B] mx-auto mb-4" />,
  },
  {
    title: "Audit & Assurance",
    description: "Comprehensive audit & assurance services.",
    link: "/services/audit",
    icon: <FaClipboardCheck className="w-12 h-12 text-[#F88A0B] mx-auto mb-4" />,
  },
  {
    title: "DSC Registration",
    description: "Digital signature certificate registration.",
    link: "/services/dsc-registration",
    icon: <FaKey className="w-12 h-12 text-[#F88A0B] mx-auto mb-4" />,
  },
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
 <section className="py-28 bg-[#F8F8F8]">
  <Container>

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D]">
        What We Offer
      </h2>

      <div className="w-24 h-1 bg-[#2DBCC7] mx-auto rounded-full mt-4"></div>

      <p className="mt-6 text-[#555555] max-w-2xl mx-auto">
        Comprehensive accounting, taxation, compliance, and business support
        services designed to help your business grow with confidence.
      </p>
    </div>

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
            <Card
              className="
                p-8
                rounded-3xl
                bg-white
                border border-[#2DBCC7]/20
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                hover:border-[#2DBCC7]
                transition-all duration-500
                text-center
                group
              "
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-4">
                {service.title}
              </h3>

              {/* Accent Line */}
              <div className="w-12 h-1 bg-[#2DBCC7] rounded-full mx-auto mb-4"></div>

              {/* Description */}
              <p className="text-[#555555] leading-relaxed">
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
 <section className="py-28 bg-[#F8F8F8]">
  <Container>

    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D]">
        Why Choose AccountsZ CARE
      </h2>

      <div className="w-24 h-1 bg-[#2DBCC7] mx-auto rounded-full mt-4"></div>

      <p className="mt-6 text-[#555555] max-w-2xl mx-auto">
        A trusted partner delivering reliable, transparent, and professional
        accounting solutions tailored to your business needs.
      </p>
    </div>

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
          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all duration-300
              border border-[#2DBCC7]/20
              hover:border-[#2DBCC7]
              flex flex-col items-center
              text-center
            "
          >
            {/* Icon */}
            <div className="text-[#F88A0B] mb-5">
              {React.cloneElement(Icon, {
                className:
                  "w-12 h-12 mx-auto transition-transform duration-300",
              })}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[#2D2D2D] leading-snug">
              {feature.title}
            </h3>
          </div>
        );
      })}
    </div>

    {/* Highlighted Central Line */}
    <div className="mt-20 text-center">
      <p className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">
        AccountsZ CARE –
        <span className="text-[#F88A0B]">
          {" "}Complete Accounting Solution You Can Trust
        </span>
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
