import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";

const floatingVariants = {
  float: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative py-32 text-center overflow-hidden 
                 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6693650/pexels-photo-6693650.jpeg')",
      }}
    >
      
      {/* Stronger Overlay for Better Text Clarity */}
      <div className="absolute inset-0 bg-black/75 pointer-events-none"></div>

      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
        variants={floatingVariants}
        animate="float"
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
        variants={floatingVariants}
        animate="float"
      />

      <Container className="relative z-10 text-white">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 drop-shadow-lg text-white">
  Need Professional Accounting Support?
</h2>

        <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-white drop-shadow-md">
          Contact AccountsZ CARE for reliable, accurate, and fully compliant accounting,
          taxation, and payroll solutions. Our experts are here to help your business grow with confidence.
        </p>

        <Button
          type="button"
          className="bg-[#ea580c] text-white px-10 py-4 rounded-xl shadow-xl text-lg font-semibold hover:bg-[#c2410c] hover:scale-105 transition-all duration-300"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </Button>
      </Container>

    </section>
  );
};

export default CTA;