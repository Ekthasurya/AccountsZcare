import { services } from "../../constants/services";

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-[#b78c25]">
          Our Professional Services
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
  Expert accounting, taxation, and compliance solutions tailored for your business. 
  We provide accurate bookkeeping, timely tax filings, payroll management, 
  and strategic advisory services to help your company grow efficiently and remain fully compliant. 
  Our team of experienced professionals ensures peace of mind while you focus on scaling your business.
</p>

      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Image from online (Unsplash pro business pics) */}
            <div className="h-40 w-full bg-gray-200">
              <img
                src={service.image} 
                alt={service.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-heading font-semibold text-xl text-[#b78c25]">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
