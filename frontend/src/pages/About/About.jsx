import PageWrapper from "../../components/layout/PageWrapper";
import Container from "../../components/common/Container";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  Briefcase,
  Scale,
  Clock,
  UserCheck,
  BadgeDollarSign,
  Globe,
  Lock,
} from "lucide-react";


const heroImage =
  "https://res.cloudinary.com/dhd5do52g/image/upload/v1769883564/hero-image_cdfkmu.webp";
const points = [
    {
      text: "One-stop solution for all Accounting, Tax & Compliance services",
      icon: <Briefcase className="w-6 h-6 text-orange-500" />,
    },
    {
      text: "Experienced professionals with updated legal knowledge",
      icon: <Scale className="w-6 h-6 text-orange-500" />,
    },
    {
      text: "Accurate, timely & compliant service delivery",
      icon: <Clock className="w-6 h-6 text-orange-500" />,
    },
    {
      text: "Personalized support for every client",
      icon: <UserCheck className="w-6 h-6 text-orange-500" />,
    },
    {
      text: "Transparent pricing with ethical practices",
      icon: <BadgeDollarSign className="w-6 h-6 text-orange-500" />,
    },
    {
      text: "Pan-India service availability",
      icon: <Globe className="w-6 h-6 text-orange-500" />,
    },
    {
      text: "Complete data security & confidentiality",
      icon: <Lock className="w-6 h-6 text-orange-500" />,
    },
  ];
 


const About = () => {
  
  return (
    <PageWrapper>
      {/* Hero Section */}
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-20 w-full">
        <Container className="text-center px-4">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Expert Accounting & Tax Solutions
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Precision-driven financial services tailored for your business growth.
          </p>

          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <button className="bg-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              Get Consultation
            </button>

            <button className="border border-white/60 px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
              Explore Services
            </button>
          </div>

        </Container>
      </div>
    </section>
      {/* Company Overview */}
 <section className="py-20 bg-[#F8F8F8]">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D]">
        Company Overview
      </h2>

      <div className="w-24 h-1 bg-[#2DBCC7] mx-auto rounded-full mt-4"></div>
    </div>

    {/* Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      {/* Left */}
      <div>
        <p className="mb-5 leading-relaxed text-[#555555] text-lg">
          <strong className="text-[#2D2D2D]">AccountsZ CARE</strong> is a
          professional accounting and financial services firm dedicated to
          helping businesses manage their finances with clarity, accuracy, and
          confidence. We believe that proper accounting is the backbone of
          every successful business, and our goal is to provide reliable,
          timely, and cost-effective solutions tailored to our clients’ needs.
        </p>

        <p className="mb-5 leading-relaxed text-[#555555] text-lg">
          We offer end-to-end accounting support, including bookkeeping, GST
          compliance, income tax services, TDS, payroll, financial reporting,
          and business advisory services. Whether you are a startup, small
          business, professional, or growing enterprise, we ensure your
          financial records remain compliant, organized, and stress-free.
        </p>

        <p className="mb-5 leading-relaxed text-[#555555] text-lg">
          At AccountsZ CARE, we focus on accuracy, transparency, and
          personalized service. We take the time to understand each client’s
          business and provide practical solutions that support growth and
          long-term stability. Our approach combines technical expertise with a
          client-first mindset, ensuring dependable support at every stage of
          your business journey.
        </p>

        <p className="leading-relaxed text-[#555555] text-lg">
          Our mission is simple — to deliver{" "}
          <span className="font-semibold text-[#2DBCC7]">
            Complete Accounting Solutions
          </span>{" "}
          that allow our clients to focus on what they do best, while we take
          care of the numbers.
        </p>
      </div>

      {/* Right */}
      <div className="space-y-6">

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#2DBCC7]/20 hover:border-[#2DBCC7] transition-all duration-300">
          <h4 className="font-semibold text-lg mb-2 text-[#2D2D2D]">
            End-to-End Accounting
          </h4>
          <p className="text-[#555555]">
            All accounting services under one roof.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#2DBCC7]/20 hover:border-[#2DBCC7] transition-all duration-300">
          <h4 className="font-semibold text-lg mb-2 text-[#2D2D2D]">
            Compliance & Accuracy
          </h4>
          <p className="text-[#555555]">
            Fully compliant and error-free processes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#2DBCC7]/20 hover:border-[#2DBCC7] transition-all duration-300">
          <h4 className="font-semibold text-lg mb-2 text-[#2D2D2D]">
            Client-First Approach
          </h4>
          <p className="text-[#555555]">
            Personalized support for every business.
          </p>
        </div>

      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-16">

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#2DBCC7]/20 hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-4xl font-bold text-[#2DBCC7]">10+</h3>
        <p className="mt-2 text-[#555555]">Years Experience</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#2DBCC7]/20 hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-4xl font-bold text-[#2DBCC7]">250+</h3>
        <p className="mt-2 text-[#555555]">Happy Clients</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#2DBCC7]/20 hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-4xl font-bold text-[#2DBCC7]">99%</h3>
        <p className="mt-2 text-[#555555]">Accuracy Rate</p>
      </div>

    </div>

  </div>
</section>

      {/* Mission & Vision */}
<section className="py-24 bg-[#F8F8F8]">
  <Container>

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D]">
        Our Mission & Vision
      </h2>

      <div className="w-24 h-1 bg-[#2DBCC7] mx-auto rounded-full mt-4"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* Mission */}
      <div
        className="
          bg-white
          rounded-3xl
          p-10
          shadow-lg
          border border-[#2DBCC7]/20
          hover:border-[#2DBCC7]
          hover:-translate-y-2
          transition-all duration-300
        "
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-[#F88A0B]">
          Our Mission
        </span>

        <h3 className="text-3xl font-bold mt-4 mb-4 text-[#2D2D2D]">
          Driven by Accuracy & Trust
        </h3>

        <p className="text-lg leading-relaxed text-[#555555]">
          To deliver accurate, transparent, and reliable accounting and
          compliance services that empower businesses to operate confidently
          and grow sustainably.
        </p>
      </div>

      {/* Vision */}
      <div
        className="
          bg-white
          rounded-3xl
          p-10
          shadow-lg
          border border-[#2DBCC7]/20
          hover:border-[#2DBCC7]
          hover:-translate-y-2
          transition-all duration-300
        "
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-[#F88A0B]">
          Our Vision
        </span>

        <h3 className="text-3xl font-bold mt-4 mb-4 text-[#2D2D2D]">
          Shaping the Future of Accounting
        </h3>

        <p className="text-lg leading-relaxed text-[#555555]">
          To be recognized as a leading professional accounting firm known for
          excellence, integrity, and innovation across industries.
        </p>
      </div>

    </div>
  </Container>
</section>


      {/* Why Choose Us */}
  <section className="py-24 bg-[#F8F8F8]">
  <Container>

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2D2D2D]">
        Why Choose AccountsZ CARE
      </h2>

      <div className="w-24 h-1 bg-[#2DBCC7] mx-auto rounded-full mb-6"></div>

      <p className="text-lg text-[#555555]">
        A trusted partner delivering reliable and ethical accounting
        solutions.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {points.map((item, index) => {
        const isLast = index === points.length - 1;

        return (
          <div
            key={index}
            className={`
              bg-white
              rounded-3xl
              p-6
              shadow-lg
              border border-[#2DBCC7]/20
              hover:border-[#2DBCC7]
              hover:-translate-y-2
              transition-all duration-300
              ${isLast ? "lg:col-span-3 flex justify-center" : ""}
            `}
          >
            <div className="flex items-start gap-4 max-w-xl">

              {/* Icon */}
              <div className="shrink-0 text-[#F88A0B]">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-[#555555] leading-relaxed">
                {item.text}
              </p>

            </div>
          </div>
        );
      })}
    </div>

    {/* Tagline */}
    <div className="text-center mt-16">
      <p className="text-xl font-semibold text-[#2D2D2D]">
        AccountsZ CARE –{" "}
        <span className="text-[#F88A0B]">
          Complete Accounting Solution You Can Trust
        </span>
      </p>
    </div>

  </Container>
</section>


  


      {/* CTA Section */}
 <section
  className="py-16 bg-fixed bg-center bg-cover text-white"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')",
  }}
>
  <Container className="text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ce">
      Ready to Elevate Your Business?
    </h2>

    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
      Partner with AccountsZ CARE for expert accounting, taxation, and
      compliance solutions designed for long-term growth and peace of mind.
    </p>

    <div className="flex justify-center">
      <button className="bg-orange-500 px-10 py-4 rounded-xl font-semibold shadow-lg hover:bg-orange-600 transition">
        Get Free Consultation
      </button>
    </div>

  </Container>
</section>




    </PageWrapper>
  );
};

export default About;
