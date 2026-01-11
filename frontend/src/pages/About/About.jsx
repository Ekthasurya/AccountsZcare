import PageWrapper from "../../components/layout/PageWrapper";
import Container from "../../components/common/Container";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32 text-white"
        style={{
          backgroundImage: `url('data:image/jpeg;base64,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')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <Container className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About AccountsZ CARE
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Expert accounting, taxation & compliance solutions tailored for your business.
          </p>
        </Container>
      </section>

      {/* Company Overview */}
     <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
  <Container>
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Text Content */}
      <div>
        <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
          Our Story
        </span>

        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
          Building Trust Through <br /> Financial Excellence
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-xl">
          AccountsZ CARE is a professional accounting firm delivering end-to-end
          bookkeeping, taxation, payroll, and compliance services for businesses
          of all sizes.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
          By combining deep financial expertise with modern technology, we ensure
          accuracy, transparency, and peace of mind — allowing our clients to focus
          confidently on growth.
        </p>
      </div>

      {/* Premium Highlight Card */}
      <div className="relative">
        <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl"></div>

        <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-xl">
          <div className="grid grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary">10+</h3>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary">500+</h3>
              <p className="text-gray-600 mt-2">Clients Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary">99%</h3>
              <p className="text-gray-600 mt-2">Compliance Accuracy</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary">24/7</h3>
              <p className="text-gray-600 mt-2">Client Support</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </Container>
</section>


      {/* Mission & Vision */}
    <section className="py-28 bg-white">
  <Container className="grid lg:grid-cols-2 gap-16">
    
    {/* Mission */}
    <div className="relative group">
      <div className="absolute inset-0 bg-primary/15 blur-2xl rounded-3xl opacity-60 group-hover:opacity-80 transition"></div>

      <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-xl">
        <span className="text-sm font-semibold tracking-widest text-primary uppercase">
          Our Mission
        </span>
        <h3 className="text-3xl font-heading font-bold text-gray-900 mt-3 mb-4">
          Driven by Accuracy & Trust
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          To deliver accurate, transparent, and reliable accounting and compliance
          services that empower businesses to operate confidently and grow sustainably.
        </p>
      </div>
    </div>

    {/* Vision */}
    <div className="relative group">
      <div className="absolute inset-0 bg-primary/15 blur-2xl rounded-3xl opacity-60 group-hover:opacity-80 transition"></div>

      <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-xl">
        <span className="text-sm font-semibold tracking-widest text-primary uppercase">
          Our Vision
        </span>
        <h3 className="text-3xl font-heading font-bold text-gray-900 mt-3 mb-4">
          Shaping the Future of Accounting
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          To be recognized as a leading professional accounting firm known for
          excellence, integrity, and innovation across industries.
        </p>
      </div>
    </div>

  </Container>
</section>


      {/* Why Choose Us */}
     <section className="py-28 bg-gray-50">
  <Container>
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-heading font-bold text-primary mb-4">
        Why Choose AccountsZ CARE
      </h2>
      <p className="text-gray-600 text-lg">
        Trusted expertise, tailored solutions, and unwavering commitment to excellence.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-12">
      
      {/* Card 1 */}
      <div className="group relative">
        <div className="absolute inset-0 bg-[#b78c25]/20 blur-2xl rounded-3xl opacity-60 group-hover:opacity-80 transition"></div>
        <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
          <FaCheckCircle className="text-[#b78c25] text-4xl mb-5" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Expert Professionals
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Highly experienced accountants ensuring accuracy, compliance,
            and complete peace of mind.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group relative">
        <div className="absolute inset-0 bg-[#b78c25]/20 blur-2xl rounded-3xl opacity-60 group-hover:opacity-80 transition"></div>
        <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
          <FaCheckCircle className="text-[#b78c25] text-4xl mb-5" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Tailored Solutions
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Customized accounting and compliance strategies designed around
            your business goals.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group relative">
        <div className="absolute inset-0 bg-[#b78c25]/20 blur-2xl rounded-3xl opacity-60 group-hover:opacity-80 transition"></div>
        <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
          <FaCheckCircle className="text-[#b78c25] text-4xl mb-5" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Trusted & Transparent
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Reliable, timely, and transparent financial reporting that helps
            you make confident decisions.
          </p>
        </div>
      </div>

    </div>
  </Container>
</section>


      {/* Team Highlight */}
     <section className="py-28 bg-white">
  <Container>
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-heading font-bold text-primary mb-4">
        Our Leadership Team
      </h2>
      <p className="text-gray-600 text-lg">
        Experienced professionals dedicated to accuracy, compliance, and business growth.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        { name: "Alice Johnson", role: "Senior Accounting Advisor" },
        { name: "Rahul Sharma", role: "Tax & Compliance Head" },
        { name: "Priya Singh", role: "Payroll & Audit Specialist" },
        { name: "Sanjay Mehta", role: "Financial Strategy Consultant" },
      ].map((member) => (
        <div
          key={member.name}
          className="group relative bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          {/* Soft gold glow */}
          <div className="absolute inset-0 bg-[#b78c25]/10 blur-2xl opacity-0 group-hover:opacity-100 transition rounded-3xl"></div>

          <div className="relative">
            <img
              src={`https://i.pravatar.cc/300?u=${member.name}`}
              alt={member.name}
              className="mx-auto w-32 h-32 rounded-full object-cover border-4 border-white shadow-md mb-6"
            />

            <h4 className="text-lg font-semibold text-gray-900">
              {member.name}
            </h4>

            <p className="text-[#b78c25] font-medium text-sm mt-1">
              {member.role}
            </p>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Bringing deep expertise and a commitment to delivering reliable
              financial solutions.
            </p>
          </div>
        </div>
      ))}
    </div>
  </Container>
</section>


      {/* CTA Section */}
  <section className="relative py-24 bg-gradient-to-r from-blue-800 via-purple-700 to-indigo-800 text-white overflow-hidden">
  {/* Decorative floating shapes */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
  <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-indigo-500 rounded-full opacity-20 blur-2xl pointer-events-none"></div>

  <Container className="relative z-10 text-center">
    <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight drop-shadow-lg">
      Ready to Elevate Your Business?
    </h2>

    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
      Partner with AccountsZ CARE for expert accounting, taxation, and compliance solutions tailored for sustainable growth and success.
    </p>

    <div className="flex justify-center gap-6 flex-wrap">
      <button className="bg-white text-blue-800 px-12 py-4 rounded-3xl font-semibold shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-2 transform transition-all duration-500">
        Get Consultation
      </button>

      <button className="border border-white/50 px-12 py-4 rounded-3xl font-semibold hover:bg-white/10 hover:scale-105 transform transition-all duration-500">
        Talk to Expert
      </button>
    </div>
  </Container>
</section>




    </PageWrapper>
  );
};

export default About;
