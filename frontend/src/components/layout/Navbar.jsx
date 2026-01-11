import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";

const Navbar = () => {
  return (
    <nav className="
      sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200
    ">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center h-full">
          <div className="h-20 w-auto overflow-visible">
            <img
              src="https://res.cloudinary.com/dhd5do52g/image/upload/v1768120968/file_00000000ba6c71faa39b6cb1891035c4_gpbbgm.png"
              alt="AccountsZ Care Logo"
              className="h-full w-auto object-contain transform scale-170 transition-transform duration-300 hover:scale-175 "
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition-colors duration-300 ${
                  isActive ? "text-[#b78c25]" : "text-gray-800 hover:text-[#b78c25]"
                } group flex items-center h-full`
              }
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#b78c25] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}

          {/* CTA Button */}
          <Link
            to="/contact"
            className="ml-6 bg-[#b78c25] hover:bg-[#a36f1f] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
          >
            Get Consultation
          </Link>
        </div>

        {/* Mobile menu placeholder */}
        <div className="md:hidden">
          {/* Hamburger menu can be added here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
