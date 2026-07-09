import { services } from "../../constants/services";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const displayedServices = services.slice(0, 3);

  return (
    <section className="py-20 bg-[#F8F8F8]">

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-[#2D2D2D]">
          Our Professional Services
        </h2>

        <div className="w-24 h-1 bg-[#2DBCC7] mx-auto rounded-full mt-4 mb-4"></div>

        <p className="text-[#555555] mt-3 max-w-2xl mx-auto leading-relaxed">
          Expert accounting, taxation, and compliance solutions tailored for your business.
          We provide accurate bookkeeping, timely tax filings, and strategic advisory services
          to help your company grow efficiently.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {displayedServices.map((service) => (
          <div
            key={service.title}
            className="
              rounded-2xl overflow-hidden
              border border-[#2DBCC7]/20
              shadow-md hover:shadow-xl
              transition-all duration-300 hover:-translate-y-2
              bg-white
            "
          >
            {/* Image */}
            <div className="h-40 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">

              {/* Title */}
              <h3 className="font-heading font-bold text-xl text-[#2D2D2D]">
                {service.title}
              </h3>

              {/* Accent Line */}
              <div className="w-12 h-1 bg-[#2DBCC7] rounded-full my-3"></div>

              {/* Description */}
              <p className="text-[#555555] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/services")}
          className="
            px-8 py-3 rounded-full font-semibold text-white
            bg-[#F88A0B]
            hover:bg-[#E86F00]
            hover:scale-105
            shadow-lg hover:shadow-xl
            transition-all duration-300
          "
        >
          View All Services
        </button>
      </div>

    </section>
  );
};

export default Services;