import { useRef } from "react";
import PageWrapper from "../../components/layout/PageWrapper";
import Container from "../../components/common/Container";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
        }
      );
  };

  return (
    <PageWrapper>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#fff7ed] via-white to-gray-50 py-32 text-center">
        <Container>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Contact Us
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re here to help. Reach out anytime for support or inquiries.
          </p>
        </Container>
      </section>

      {/* INFO */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <InfoCard icon={<Mail />} title="Email Address" text="allcarezacc@gmail.com" />
            <InfoCard icon={<Phone />} title="Phone Number" text="+91 6291653171" />
            <InfoCard icon={<MapPin />} title="Office Location" text="Hatiara, New Market, Kolkata-700157" />
            <InfoCard icon={<Clock />} title="Working Hours" text="Mon – Sat: 11AM – 8PM" />
          </div>
        </Container>
      </section>

      {/* FORM */}
      <section className="py-28 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-4">Get In Touch With Us</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you shortly.
              </p>
            </div>

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white/70 backdrop-blur-md p-12 rounded-3xl shadow-2xl space-y-6 border"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <Input label="Name" name="name" type="text" required />
              <Input label="Email" name="email" type="email" required />
              <Input label="Phone Number" name="phone" type="text" />
              <Textarea label="Message" name="message" required />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-blue-500 to-orange-400 text-white py-4 rounded-xl font-semibold shadow-lg"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </Container>
      </section>
    </PageWrapper>
  );
};

/* INFO CARD */
const InfoCard = ({ icon, title, text }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-3xl p-8 text-center shadow-lg"
  >
    <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-r from-blue-500 to-orange-400 text-white rounded-full mb-4">
      {icon}
    </div>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-gray-600 text-sm">{text}</p>
  </motion.div>
);

/* INPUT */
const Input = ({ label, type, name, required }) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      required={required}
      placeholder=" "
      className="peer w-full rounded-xl border p-4 pt-6 focus:ring-2 focus:ring-orange-400 outline-none"
    />
    <label className="absolute left-4 top-4 text-gray-400 text-sm peer-focus:text-orange-500">
      {label}
    </label>
  </div>
);

/* TEXTAREA */
const Textarea = ({ label, name, required }) => (
  <div className="relative">
    <textarea
      rows="4"
      name={name}
      required={required}
      placeholder=" "
      className="peer w-full rounded-xl border p-4 pt-6 focus:ring-2 focus:ring-orange-400 outline-none"
    />
    <label className="absolute left-4 top-4 text-gray-400 text-sm peer-focus:text-orange-500">
      {label}
    </label>
  </div>
);

export default Contact;