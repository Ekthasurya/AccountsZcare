import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dhd5do52g/image/upload/v1768159103/pexels-photo-3182763_gvdx6s.jpg)",
      }}
    >
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-primary/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
        >
          Precision-Driven Accounting <br />
          for Modern Businesses
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
        >
          Strategic accounting, taxation, and compliance solutions built on
          accuracy, transparency, and long-term business value.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          <button className="bg-primary hover:bg-primary/90 px-10 py-4 rounded-xl font-semibold shadow-xl transition">
            Get a Free Consultation
          </button>

          <button className="border border-white/40 px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition">
            Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
