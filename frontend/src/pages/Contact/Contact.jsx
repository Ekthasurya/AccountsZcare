import PageWrapper from "../../components/layout/PageWrapper";
import Container from "../../components/common/Container";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <PageWrapper>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#fff7ed] via-white to-gray-50 py-32 text-center">
        <Container>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We’re here to help. Reach out anytime for support or inquiries.
          </motion.p>
        </Container>
      </section>

      {/* INFO CARDS */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <InfoCard icon={<Mail />} title="Email Address" text="info@accountszcare.com" />
            <InfoCard icon={<Phone />} title="Phone Number" text="+91 98765 43210" />
            <InfoCard icon={<MapPin />} title="Office Location" text="Hyderabad, India" />
            <InfoCard icon={<Clock />} title="Working Hours" text="Mon – Fri: 9AM – 6PM" />
          </div>
        </Container>
      </section>

      {/* FORM SECTION */}
      <section className="py-28 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* TEXT */}
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Get In Touch With Us
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg">
                Have a question or need help? Fill out the form and our team will
                get back to you shortly.
              </p>

              <motion.img
                src="https://res.cloudinary.com/dhd5do52g/image/upload/v1768120968/file_00000000ba6c71faa39b6cb1891035c4_gpbbgm.png"
                alt="Team"
                className="rounded-3xl shadow-2xl hidden lg:block"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* FORM */}
            <motion.form
              className="bg-white/70 backdrop-blur-md p-12 rounded-3xl shadow-2xl space-y-6 border border-gray-200"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Input label="Name" type="text" />
              <Input label="Email" type="email" />
              <Input label="Phone Number" type="text" />
              <Textarea label="Message" />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-blue-500 to-orange-400 text-white py-4 rounded-xl font-semibold shadow-lg hover:from-orange-400 hover:to-blue-500 transition-all"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
          <div className="bg-gradient-to-r from-blue-100 to-orange-100 rounded-3xl text-center p-20 shadow-xl">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Get Your Free Consultation
            </h2>
            <p className="text-gray-600 mt-4">
              Let’s connect and grow together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-blue-500 to-orange-400 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:from-orange-400 hover:to-blue-500 transition-all"
            >
              Contact Us
            </motion.button>
          </div>
        </Container>
      </section>

    </PageWrapper>
  );
};

/* INFO CARD */
const InfoCard = ({ icon, title, text }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white/80 backdrop-blur-md rounded-3xl p-8 text-center shadow-lg transition-all border border-gray-100"
  >
    <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-r from-blue-500 to-orange-400 text-white rounded-full mb-4 text-2xl">
      {icon}
    </div>
    <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
    <p className="text-gray-600 mt-2 text-sm">{text}</p>
  </motion.div>
);

/* INPUT */
const Input = ({ label, type }) => (
  <div className="relative">
    <input
      type={type}
      placeholder=" "
      className="peer w-full rounded-xl bg-white/60 border border-gray-300 p-4 pt-6 focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none backdrop-blur-sm transition"
    />
    <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all
      peer-placeholder-shown:top-6
      peer-placeholder-shown:text-base
      peer-focus:top-3
      peer-focus:text-sm
      peer-focus:text-orange-500">
      {label}
    </label>
  </div>
);

/* TEXTAREA */
const Textarea = ({ label }) => (
  <div className="relative">
    <textarea
      rows="4"
      placeholder=" "
      className="peer w-full rounded-xl bg-white/60 border border-gray-300 p-4 pt-6 focus:ring-2 focus:ring-orange-400 outline-none resize-none backdrop-blur-sm transition"
    />
    <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all
      peer-placeholder-shown:top-6
      peer-placeholder-shown:text-base
      peer-focus:top-3
      peer-focus:text-sm
      peer-focus:text-orange-500">
      {label}
    </label>
  </div>
);

export default Contact;
