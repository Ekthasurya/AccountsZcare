import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <footer className="bg-[#F8F8F8] border-t-4 border-[#2DBCC7] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <img
            src="https://res.cloudinary.com/dhd5do52g/image/upload/v1768120968/file_00000000ba6c71faa39b6cb1891035c4_gpbbgm.png"
            alt="AccountsZ CARE"
            className="w-48 mb-4"
          />

          <div className="w-16 h-1 bg-[#F88A0B] rounded-full mb-4"></div>

          <p className="text-sm text-[#C5C7CC] leading-relaxed">
            AccountsZ CARE provides professional accounting, taxation,
            compliance, and business support services across India with
            accuracy, reliability, and integrity.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#2DBCC7]">
            OUR SERVICES
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/services#GeneralServices"
                className="text-[#C5C7CC] hover:text-[#F88A0B] transition-colors duration-300"
              >
                Audit & Assurance
              </Link>
            </li>

            <li>
              <Link
                to="/services#GeneralServices"
                className="text-[#C5C7CC] hover:text-[#F88A0B] transition-colors duration-300"
              >
                Income Tax & GST
              </Link>
            </li>

            <li>
              <Link
                to="/services#TechnicalServices"
                className="text-[#C5C7CC] hover:text-[#F88A0B] transition-colors duration-300"
              >
                PF & ESIC Services
              </Link>
            </li>

            <li>
              <Link
                to="/services#TechnicalServices"
                className="text-[#C5C7CC] hover:text-[#F88A0B] transition-colors duration-300"
              >
                Trade License
              </Link>
            </li>

            <li>
              <Link
                to="/services#SoftServices"
                className="text-[#C5C7CC] hover:text-[#F88A0B] transition-colors duration-300"
              >
                DSC Registration
              </Link>
            </li>
          </ul>
        </div>

        {/* Office Address */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#2DBCC7]">
            OFFICE ADDRESS
          </h3>

          <p className="text-sm text-[#C5C7CC] leading-relaxed">
            Hatiara, New Market
            <br />
            Kolkata - 700157
          </p>

          <div className="mt-4 text-sm text-[#C5C7CC] space-y-1">
            <p>Email: allcarezacc@gmail.com</p>
            <p>Phone: +91 6291653171</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#2DBCC7]">
            GET SOCIAL
          </h3>

          <div className="flex gap-4 text-xl">

            <a
              href="#"
              className="
                bg-[#3A3A3A]
                text-white
                p-3
                rounded-full
                hover:bg-[#2DBCC7]
                hover:scale-110
                transition-all duration-300
              "
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="
                bg-[#3A3A3A]
                text-white
                p-3
                rounded-full
                hover:bg-[#F88A0B]
                hover:scale-110
                transition-all duration-300
              "
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              className="
                bg-[#3A3A3A]
                text-white
                p-3
                rounded-full
                hover:bg-[#2DBCC7]
                hover:scale-110
                transition-all duration-300
              "
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="
                bg-[#3A3A3A]
                text-white
                p-3
                rounded-full
                hover:bg-[#F88A0B]
                hover:scale-110
                transition-all duration-300
              "
            >
              <FaInstagram />
            </a>

          </div>

          {/* CTA */}
          <div className="mt-6">
            <Link
              to="/contact"
              className="
                inline-block
                bg-[#F88A0B]
                text-white
                px-5
                py-2.5
                rounded-lg
                font-medium
                hover:bg-[#E67E0A]
                transition-all duration-300
              "
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2DBCC7]/20 mt-10 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-sm text-[#C5C7CC]">
            © 2026 AccountsZ CARE. All rights reserved.
          </p>

          <p className="text-sm text-[#C5C7CC]">
            Site designed & developed by{" "}
            <span className="font-semibold text-[#F88A0B]">
              LUMINEST
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
