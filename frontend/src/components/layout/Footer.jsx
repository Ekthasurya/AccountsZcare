import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

// Subtle floating animation for Footer
const floatingVariants = {
  float: {
    y: [0, -8, 0],  // smaller vertical movement
    x: [0, 4, 0],   // subtle horizontal sway
    transition: {
      duration: 20,   // slower than CTA
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#b78c25]/90 to-[#d4880a]/80 text-white py-16 overflow-hidden">
      
      {/* Animated Background Overlays */}
      <motion.div
        className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-white/8 rounded-full filter blur-3xl pointer-events-none"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-white/5 rounded-full filter blur-3xl pointer-events-none"
        variants={floatingVariants}
        animate="float"
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 relative z-10">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">AccountsZ CARE</h3>
          <p className="text-gray-100 text-sm leading-relaxed">
            Expert accounting, taxation & compliance solutions for your business. 
            Trusted by companies nationwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/services" className="hover:text-gray-200 transition-colors">Services</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200 transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200 transition-colors">Contact</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-200 transition-colors">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/40 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/40 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/40 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/40 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/30 pt-6 text-center text-sm text-gray-100">
        © {new Date().getFullYear()} AccountsZ CARE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
