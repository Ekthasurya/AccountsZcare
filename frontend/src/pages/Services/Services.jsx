import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import PageWrapper from "../../components/layout/PageWrapper";
import Container from "../../components/common/Container";
import Card from "../../components/ui/Card";
import { services } from "../../constants/services";

const premiumFeatures = [
  { icon: <FaStar />, title: "Expert Team", desc: "Certified professionals handling your business." },
  { icon: <FaStar />, title: "Timely Delivery", desc: "We meet deadlines and exceed expectations." },
  { icon: <FaStar />, title: "Customized Solutions", desc: "Tailored strategies for your unique business." },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleProcess = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-purple-700 to-indigo-800 text-white py-32 text-center overflow-hidden">
        <Container>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Services & How We Work
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            AccountsZ CARE provides top-notch accounting, taxation, payroll, and business advisory solutions. Here’s how we help your business thrive.
          </motion.p>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-28 bg-gray-50">
        <Container>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 hover:bg-gradient-to-tr hover:from-blue-50 hover:to-purple-50 transition-all duration-500 bg-white border border-gray-200">
                  {/* Image */}
                  <div className="mb-6 flex justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-24 h-24 object-cover rounded-full shadow-md hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-600 text-center mb-4">{service.description}</p>

                  {/* Article */}
                  <p className="text-gray-700 text-center mb-6">{service.details}</p>

                  {/* Process Steps Accordion */}
                  <div>
                    <button
                      onClick={() => toggleProcess(index)}
                      className="w-full text-left bg-blue-50 text-blue-800 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-all duration-300 flex justify-between items-center"
                    >
                      {openIndex === index ? "Hide Process" : "View Process"}
                      <span className="ml-2">{openIndex === index ? "▲" : "▼"}</span>
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.ol
                          className="list-decimal list-inside text-gray-700 mt-4 space-y-2"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          {service.process.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-2">
                              <FaCheckCircle className="text-blue-800 mt-1" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </motion.ol>
                      )}
                    </AnimatePresence>
                  </div>

                  </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 bg-white">
        <Container>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900">
            Why Choose AccountsZ CARE
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {premiumFeatures.map((feature, i) => (
              <Card key={i} className="p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center">
                <div className="text-blue-800 text-4xl mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-blue-800 via-purple-700 to-indigo-800 text-white text-center">
        <Container>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Contact AccountsZ CARE for reliable accounting, taxation, and compliance solutions designed for long-term growth.
          </p>
          <button className="bg-white text-blue-800 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:-translate-y-1 transition-all duration-300">
            Get Consultation
          </button>
        </Container>
      </section>
    </PageWrapper>
  );
};

export default Services;
