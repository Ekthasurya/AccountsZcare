import { services } from "../../constants/services";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const displayedServices = services.slice(0, 3);

  return (
    <section className="py-20 bg-[#FF6B00]/5">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-[#003c50]">
          Our Professional Services
        </h2>

        <p className="text-[#003c50]/90 mt-3 max-w-2xl mx-auto leading-relaxed">
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
              border border-[#FF6B00]/30
              shadow-sm hover:shadow-lg
              transition-all duration-300 hover:-translate-y-1
              bg-white
            "
          >
            
            {/* Image */}
            <div className="h-40 w-full bg-gray-200 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">

              {/* Title */}
              <h3 className="font-heading font-bold text-xl text-[#003c50]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
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
            bg-[#FF6B00]
            hover:bg-[#E65C00]
            hover:scale-105
            shadow-md hover:shadow-lg
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