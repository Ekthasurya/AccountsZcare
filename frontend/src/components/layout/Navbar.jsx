import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center h-full">
          <div className="h-20 w-auto overflow-visible">
            <img
              src="https://res.cloudinary.com/dhd5do52g/image/upload/v1768120968/file_00000000ba6c71faa39b6cb1891035c4_gpbbgm.png"
              alt="AccountsZ Care Logo"
              className="h-full w-auto object-contain transform scale-170 transition-transform duration-300 hover:scale-175"
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
                `relative text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400"
                    : "text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-orange-400"
                } group flex items-center h-full`
              }
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-orange-400 group-hover:w-full transition-all duration-300"></span>
            </NavLink>
          ))}

          {/* CTA Button */}
          <Link
            to="/contact"
            className="ml-6 bg-gradient-to-r from-blue-500 to-orange-400 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:from-orange-400 hover:to-blue-500 transition-all duration-300"
          >
            Get Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-[#b78c25] focus:outline-none"
          >
            {isOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)} // close menu on click
                className={({ isActive }) =>
                  `text-base font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400"
                      : "text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-orange-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-blue-500 to-orange-400 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:from-orange-400 hover:to-blue-500 transition-all duration-300 text-center"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
