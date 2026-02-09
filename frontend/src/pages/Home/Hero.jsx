import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeUp } from "../../animations/variants";
import { Link } from "react-router-dom";

const slides = [
  {
    title: (
      <>
        Welcome to AccountsZ CARE <br />
        
      </>
    ),
    description:
      "We take care of your accounts, taxes, and compliance—so you can focus on what matters most.",
    image:
      "https://res.cloudinary.com/dhd5do52g/image/upload/v1769883564/hero-image_cdfkmu.webp",
  },
  {
    title: (
      <>
        Smart Financial Planning <br />
        That Scales With You
      </>
    ),
    description:
      "From startups to enterprises, we design financial systems that grow with your business.",
    image:
      "https://res.cloudinary.com/dhd5do52g/image/upload/v1769884164/How-to-Prepare-for-a-Team-Meeting_Content-image2-min-1024x569_hkbyrb.webp",
  },
  {
    title: (
      <>
        Compliance. Clarity. <br />
        Confidence.
      </>
    ),
    description:
      "Stay compliant with evolving regulations while focusing on what matters most—your growth.",
    image:
      "https://res.cloudinary.com/dhd5do52g/image/upload/v1768159103/pexels-photo-3182763_gvdx6s.jpg",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(false); // wait for next image
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Current Image (always visible) */}
      <motion.img
        src={slides[index].image}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        onLoad={() => setLoaded(true)}
        initial={false}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-primary/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              {slides[index].title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              {slides[index].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          <button className="bg-primary hover:bg-primary/90 px-10 py-4 rounded-xl font-semibold shadow-xl transition">
            Get a Free Consultation
          </button>

          <Link to ="/services"><button className="border border-white/40 px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition">
            Our Services
          </button></Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
