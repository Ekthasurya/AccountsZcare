import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
