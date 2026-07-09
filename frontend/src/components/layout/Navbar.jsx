import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";
import { HiMenu, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const whatsappLink =
  "https://wa.me/916291653171?text=Hello%20I%20need%20consultation";

  return (
    <nav className="sticky top-0 z-50 bg-[#F8F8F8]/95 backdrop-blur-md border-b border-[#C5C7CC]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center h-full">
          <div className="h-20 w-auto overflow-visible">
            <img
              src="https://res.cloudinary.com/dhd5do52g/image/upload/v1768120968/file_00000000ba6c71faa39b6cb1891035c4_gpbbgm.png"
              alt="AccountsZ Care Logo"
              className="h-full w-auto object-contain scale-170 transition-transform duration-300 hover:scale-175"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition-all duration-300 group ${
                  isActive
                    ? "text-[#2DBCC7]"
                    : "text-[#2D2D2D] hover:text-[#F88A0B]"
                }`
              }
            >
              {link.label}

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-[2px]
                  w-0
                  bg-[#F88A0B]
                  group-hover:w-full
                  transition-all
                  duration-300
                "
              ></span>
            </NavLink>
          ))}

         
         

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              bg-[#2DBCC7]
              text-white
              px-5
              py-3
              rounded-xl
              font-semibold
              shadow-md
              hover:bg-[#25AAB3]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </a>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#2D2D2D] hover:text-[#F88A0B]"
          >
            {isOpen ? (
              <HiX className="w-8 h-8" />
            ) : (
              <HiMenu className="w-8 h-8" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F8F8F8] border-t border-[#C5C7CC]/30 shadow-lg">
          <div className="flex flex-col px-6 py-5 space-y-5">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-base font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#2DBCC7]"
                      : "text-[#2D2D2D] hover:text-[#F88A0B]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="
                text-center
                bg-[#F88A0B]
                text-white
                py-3
                rounded-xl
                font-semibold
              "
            >
              Get Consultation
            </Link>

            {/* Mobile WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="
                flex
                items-center
                justify-center
                gap-2
                bg-[#2DBCC7]
                text-white
                py-3
                rounded-xl
                font-semibold
              "
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Us
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;