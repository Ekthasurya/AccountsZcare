import { services } from "../../constants/services";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  // Show only first 3 services
  const displayedServices = services.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-[#b78c25]">
          Our Professional Services
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Expert accounting, taxation, and compliance solutions tailored for your business. 
          We provide accurate bookkeeping, timely tax filings, and strategic advisory services to help your company grow efficiently.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {displayedServices.map((service) => (
          <div
            key={service.title}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-400 rounded-2xl p-1 pointer-events-none"></div>

            {/* Card Content */}
            <div className="bg-white rounded-2xl overflow-hidden relative z-10">
              {/* Image */}
              <div className="h-40 w-full bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Gradient Title */}
                <h3 className="font-heading font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-400">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add More Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/services")}
          className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-orange-400 hover:scale-105 transition-transform duration-300"
        >
          Add More
        </button>
      </div>
    </section>
  );
};

export default Services;
