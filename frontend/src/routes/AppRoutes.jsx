import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";

// Individual Service Pages
import Accounting from "../pages/Services/Accounting";
import IncomeTax from "../pages/Services/IncomeTax";
import TDSReturn from "../pages/Services/TDSReturn";
import GST from "../pages/Services/GST";
import PFESIC from "../pages/Services/PFESIC";
import PANTAN from "../pages/Services/PANTAN";
import TradeLicense from "../pages/Services/TradeLicense";
import Audit from "../pages/Services/Audit";
import DSCRegistration from "../pages/Services/DSCRegistration";

// Layout
import Footer from "../components/layout/Footer";

const AppRoutes = () => {
  return (
    <>
      {/* All page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Individual Service Pages */}
        <Route path="/services/accounting" element={<Accounting />} />
        <Route path="/services/income-tax" element={<IncomeTax />} />
        <Route path="/services/tds-return" element={<TDSReturn />} />
        <Route path="/services/gst" element={<GST />} />
        <Route path="/services/pf-esic" element={<PFESIC />} />
        <Route path="/services/pan-tan" element={<PANTAN />} />
        <Route path="/services/trade-license" element={<TradeLicense />} />
        <Route path="/services/audit" element={<Audit />} />
        <Route path="/services/dsc-registration" element={<DSCRegistration />} />
      </Routes>

      {/* Footer visible on all pages */}
    </>
  );
};

export default AppRoutes;
