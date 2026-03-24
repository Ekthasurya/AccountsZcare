import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#ff6b01] text-white pt-7 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 ">

        {/* Logo + About */}
        <div>
          <img
            src="https://res.cloudinary.com/dhd5do52g/image/upload/v1768120968/file_00000000ba6c71faa39b6cb1891035c4_gpbbgm.png"
            alt="AccountsZ CARE"
            className="w-48 mb-4"
          />

          <p className="text-sm text-white/90 leading-relaxed">
            AccountsZ CARE provides professional accounting, taxation,
            compliance, and business support services across India with
            accuracy and reliability.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            OUR SERVICES
          </h3>

          <ul className="space-y-2 text-white/90 text-sm">
            <li>
              <Link to="/services#GeneralServices" className="hover:text-[#00a2a9] transition">
                Audit & Assurance
              </Link>
            </li>

            <li>
              <Link to="/services#GeneralServices" className="hover:text-[#00a2a9] transition">
                Income Tax & GST
              </Link>
            </li>

            <li>
              <Link to="/services#TechnicalServices" className="hover:text-[#00a2a9] transition">
                PF & ESIC Services
              </Link>
            </li>

            <li>
              <Link to="/services#TechnicalServices" className="hover:text-[#00a2a9] transition">
                Trade License
              </Link>
            </li>

            <li>
              <Link to="/services#SoftServices" className="hover:text-[#00a2a9] transition">
                DSC Registration
              </Link>
            </li>
          </ul>
        </div>

        {/* Office Address */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            OFFICE ADDRESS
          </h3>

          <p className="text-sm text-white/90 leading-relaxed">
            Hatiara, New Market, Kolkata-700157
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            GET SOCIAL
          </h3>

          <div className="flex gap-4 text-xl mb-4">

            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-[#00a2a9] transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-[#00a2a9] transition"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-[#00a2a9] transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-[#00a2a9] transition"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 mt-10 pt-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-white/90">

          <p>© 2026 AccountsZ CARE | All rights reserved.</p>

          <p>
            Site designed & developed by{" "}
            <span className="font-semibold">LUMINEST</span>
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;