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
      <section className="py-24 text-center bg-[#fff0e0]">
        <Container>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0c3750] mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-[#0c3750] max-w-2xl mx-auto">
            We’re here to help. Reach out anytime for support or inquiries.
          </p>
        </Container>
      </section>

      {/* INFO CARDS */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <InfoCard icon={<Mail />} title="Email" text="allcarezacc@gmail.com" />
            <InfoCard icon={<Phone />} title="Phone" text="+91 6291653171" />
            <InfoCard icon={<MapPin />} title="Location" text="Hatiara, New Market, Kolkata-700157" />
            <InfoCard icon={<Clock />} title="Hours" text="Mon – Sat: 11AM – 8PM" />
          </div>
        </Container>
      </section>

      {/* CONTACT FORM */}
      <section className="py-24 bg-[#fff0e0]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT SIDE (TEXT + IMAGE BELOW) */}
            <div>
              <h2 className="text-4xl font-bold text-[#0c3750] mb-4">
                Get In Touch
              </h2>
              <p className="text-[#0c3750]">
                Fill the form and our team will contact you shortly.
              </p>

              {/* SQUARE PROFILE IMAGE */}
              <div className="mt-6">
                <img
                  src="https://res.cloudinary.com/dhd5do52g/image/upload/v1773840294/PK_txctsj.png"
                  alt="Profile"
                  className="w-120 h-120 object-cover rounded-xl shadow-lg border-4 border-orange-400"
                />
              </div>
            </div>

            {/* FORM */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white p-10 rounded-2xl shadow-xl space-y-6"
            >
              <Input label="Name" name="name" type="text" required />
              <Input label="Email" name="email" type="email" required />
              <Input label="Phone" name="phone" type="text" />
              <Textarea label="Message" name="message" required />

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </motion.form>

          </div>
        </Container>
      </section>

      {/* GOOGLE MAP */}
      <section className="py-20 bg-white">
        <Container>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Hatiara%20New%20Market%20Kolkata%20700157&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </Container>
      </section>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/916291653171"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600"
      >
        WhatsApp
      </a>

    </PageWrapper>
  );
};

const InfoCard = ({ icon, title, text }) => (
  <div className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-lg">
    <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4 bg-orange-500 text-white rounded-full">
      {icon}
    </div>
    <h3 className="font-semibold text-[#0c3750]">{title}</h3>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);

const Input = ({ label, type, name, required }) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      required={required}
      placeholder=" "
      className="peer w-full border rounded-xl p-4 pt-6 outline-none focus:ring-2 focus:ring-orange-400"
    />
    <label className="absolute left-4 top-4 text-gray-400 text-sm peer-focus:text-orange-500">
      {label}
    </label>
  </div>
);

const Textarea = ({ label, name, required }) => (
  <div className="relative">
    <textarea
      rows="4"
      name={name}
      required={required}
      placeholder=" "
      className="peer w-full border rounded-xl p-4 pt-6 outline-none focus:ring-2 focus:ring-orange-400"
    />
    <label className="absolute left-4 top-4 text-gray-400 text-sm peer-focus:text-orange-500">
      {label}
    </label>
  </div>
);

export default Contact;