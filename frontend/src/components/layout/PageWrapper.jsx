import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen w-full"
    >
      {children}
    </motion.main>
  );
};

export default PageWrapper;
