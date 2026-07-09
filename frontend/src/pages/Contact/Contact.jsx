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
{/* HERO IMAGE */}
<section
  className="h-[60vh] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/dhd5do52g/image/upload/v1781454861/Gemini_Generated_Image_yatfpuyatfpuyatf_zomgl2.png')",
  }}
></section>

{/* HERO CONTENT BELOW IMAGE */}
<section className="py-16 bg-[#F8F8F8] text-center">
  <Container>
    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#2D2D2D] mb-6">
        Contact Us
      </h1>

      <div className="w-24 h-1 bg-[#2DBCC7] mx-auto rounded-full mb-6"></div>

      <p className="text-lg md:text-xl text-[#555555] leading-relaxed">
        We’re here to help. Reach out anytime for support, accounting,
        taxation, compliance services, or business inquiries.
      </p>
    </div>
  </Container>
</section>

      {/* INFO CARDS */}
      <section className="py-20 bg-[#F8F8F8]">
        
  <Container>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      <InfoCard
        icon={<Mail className="w-8 h-8 text-[#F88A0B]" />}
        title="Email"
        text="allcarezacc@gmail.com"
      />

      <InfoCard
        icon={<Phone className="w-8 h-8 text-[#F88A0B]" />}
        title="Phone"
        text="+91 6291653171"
      />

      <InfoCard
        icon={<MapPin className="w-8 h-8 text-[#F88A0B]" />}
        title="Location"
        text="Hatiara, New Market, Kolkata-700157"
      />

      <InfoCard
        icon={<Clock className="w-8 h-8 text-[#F88A0B]" />}
        title="Hours"
        text="Mon – Sat: 11AM – 8PM"
      />

    </div>
  </Container>
</section>

      {/* CONTACT FORM */}
      <section className="py-24 bg-[#F8F8F8]">
  <Container>
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
          Get In Touch
        </h2>

        <div className="w-24 h-1 bg-[#2DBCC7] rounded-full mb-6"></div>

        <p className="text-[#555555] text-lg leading-relaxed">
          Fill out the form and our team will get back to you shortly.
          We're here to help with all your accounting, taxation, and
          compliance needs.
        </p>

        {/* PROFILE IMAGE */}
        <div className="mt-8">
          <img
            src="https://res.cloudinary.com/dhd5do52g/image/upload/v1773840294/PK_txctsj.png"
            alt="Profile"
            className="
              w-full
              max-w-md
              object-cover
              rounded-3xl
              shadow-xl
              border-4
              border-[#2DBCC7]/30
              hover:border-[#2DBCC7]
              transition-all duration-300
            "
          />
        </div>
      </div>

      {/* FORM */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="
          bg-white
          p-10
          rounded-3xl
          shadow-xl
          border
          border-[#2DBCC7]/20
          space-y-6
        "
      >
        <Input label="Name" name="name" type="text" required />
        <Input label="Email" name="email" type="email" required />
        <Input label="Phone" name="phone" type="text" />
        <Textarea label="Message" name="message" required />

        <button
          type="submit"
          className="
            w-full
            bg-[#F88A0B]
            text-white
            py-4
            rounded-xl
            font-semibold
            shadow-lg
            hover:bg-[#E86F00]
            hover:scale-[1.02]
            transition-all duration-300
          "
        >
          Send Message
        </button>
      </motion.form>

    </div>
  </Container>
</section>

      {/* GOOGLE MAP */}
      <section className="py-20 bg-[#F8F8F8]">
  <Container>

    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D]">
        Find Us
      </h2>

      <div className="w-24 h-1 bg-[#2DBCC7] mx-auto rounded-full mt-4"></div>

      <p className="mt-6 text-[#555555] max-w-2xl mx-auto">
        Visit our office for personalized accounting, taxation, and business
        advisory services.
      </p>
    </div>

    {/* Google Map */}
    <div
      className="
        rounded-3xl
        overflow-hidden
        shadow-xl
        border
        border-[#2DBCC7]/20
      "
    >
      <iframe
        src="https://www.google.com/maps?q=Hatiara%20New%20Market%20Kolkata%20700157&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        title="AccountsZ CARE Location"
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