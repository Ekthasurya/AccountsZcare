import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About"; 
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Footer from "../components/layout/Footer"; // import Footer

const AppRoutes = () => {
  return (
    <>
      {/* All page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer visible on all pages */}
      {/* <Footer /> */}
    </>
  );
};

export default AppRoutes;
