import { motion } from "framer-motion";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";

const floatingVariants = {
  float: {
    y: [0, -20, 0], // up and down movement
    x: [0, 10, 0],  // slight horizontal sway
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const CTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-blue-500 to-orange-400 text-white text-center overflow-hidden">
      
      {/* Animated Decorative Shapes */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-white/20 rounded-full filter blur-3xl pointer-events-none"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full filter blur-3xl pointer-events-none"
        variants={floatingVariants}
        animate="float"
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#fff8e5]">
          Need Professional Accounting Support?
        </h2>
        <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Contact AccountsZ CARE for reliable, accurate, and fully compliant accounting, taxation, and payroll solutions. 
          Our experts are here to help your business grow with confidence.
        </p>
        <Button 
          className="bg-gradient-to-r from-blue-500 to-orange-400 text-white px-10 py-4 rounded-xl shadow-lg text-lg font-semibold hover:scale-105 transition-transform duration-300"
          onClick={() => window.location.href = "/contact"} // navigate to contact page
        >
          Contact Us
        </Button>
      </Container>
    </section>
  );
};

export default CTA;
