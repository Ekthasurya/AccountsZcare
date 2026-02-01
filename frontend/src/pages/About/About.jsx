import PageWrapper from "../../components/layout/PageWrapper";
import Container from "../../components/common/Container";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    },
    {
      text: "Experienced professionals with updated legal knowledge",
      icon: <Scale className="w-6 h-6 text-orange-500" />,
    },
    {
      text: "Accurate, timely & compliant service delivery",
      icon: <Clock className="w-6 h-6 text-blue-600" />,
    },
    {
      text: "Personalized support for every client",
      icon: <UserCheck className="w-6 h-6 text-orange-500" />,
    },
    {
      text: "Transparent pricing with ethical practices",
      icon: <BadgeDollarSign className="w-6 h-6 text-blue-600" />,
    },
    {
      text: "Pan-India service availability",
      icon: <Globe className="w-6 h-6 text-orange-500" />,
    },
    {
      text: "Complete data security & confidentiality",
      icon: <Lock className="w-6 h-6 text-blue-600" />,
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
  <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">
          Company Overview
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <p className="text-gray-700 mb-5">
              <strong>AccountsZ CARE</strong> is a professional accounting and
              financial services firm dedicated to helping businesses manage
              their finances with clarity, accuracy, and confidence.
            </p>

            <p className="text-gray-700 mb-5">
              We offer complete accounting services including bookkeeping, GST
              compliance, income tax, TDS, payroll, financial reporting, and
              business advisory services.
            </p>

            <p className="text-gray-700">
              Our mission is to deliver{" "}
              <span className="font-semibold text-blue-600">
                Complete Accounting Solutions
              </span>{" "}
              so clients can focus on growing their business while we take care
              of the numbers.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold text-lg mb-1">
                End-to-End Accounting
              </h4>
              <p className="text-gray-600 text-sm">
                All accounting services under one roof.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold text-lg mb-1">
                Compliance & Accuracy
              </h4>
              <p className="text-gray-600 text-sm">
                Fully compliant and error-free processes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold text-lg mb-1">
                Client-First Approach
              </h4>
              <p className="text-gray-600 text-sm">
                Personalized support for every business.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-16">
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-orange-500">250+</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-blue-600">99%</h3>
            <p className="text-gray-600 mt-2">Accuracy Rate</p>
          </div>
        </div>

      </div>
    </section>

      {/* Mission & Vision */}
  <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Mission */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              Our Mission
            </span>

            <h3 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
              Driven by Accuracy & Trust
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              To deliver accurate, transparent, and reliable accounting and
              compliance services that empower businesses to operate confidently
              and grow sustainably.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <span className="text-sm font-semibold tracking-widest text-orange-500 uppercase">
              Our Vision
            </span>

            <h3 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
              Shaping the Future of Accounting
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              To be recognized as a leading professional accounting firm known for
              excellence, integrity, and innovation across industries.
            </p>
          </div>

        </div>
      </Container>
    </section>


      {/* Why Choose Us */}
   <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose AccountsZ CARE
          </h2>
          <p className="text-gray-600 text-lg">
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
                className={`bg-white rounded-2xl p-6 shadow-md
                  ${isLast ? "lg:col-span-3 flex justify-center" : ""}
                `}
              >
                <div className="flex items-start gap-4 max-w-xl">
                  <div className="shrink-0">{item.icon}</div>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="text-center mt-16">
          <p className="text-xl font-semibold text-gray-900">
            AccountsZ CARE –{" "}
            <span className="text-blue-600">
              Complete Accounting Solution You Can Trust
            </span>
          </p>
        </div>
      </Container>
    </section>


  


      {/* CTA Section */}
  <section className="py-24 bg-gradient-to-r from-blue-700 to-orange-500 text-white">
      <Container className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Elevate Your Business?
        </h2>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12">
          Partner with AccountsZ CARE for expert accounting, taxation, and
          compliance solutions designed for long-term growth and peace of mind.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-white text-blue-700 px-10 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition">
            Get Free Consultation
          </button>

          <button className="border border-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition">
            Talk to an Expert
          </button>
        </div>
      </Container>
    </section>




    </PageWrapper>
  );
};

export default About;
