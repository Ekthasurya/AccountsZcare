import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import ScrollReveal from "../../components/common/ScrollReveal";

const AboutPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#fff7ed] to-gray-50">
      <Container>
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#b78c25] mb-6">
                About AccountsZ CARE
              </h2>
              <p className="text-gray-700 max-w-3xl mb-8 text-lg md:text-xl leading-relaxed">
                At AccountsZ CARE, we deliver reliable accounting, taxation, and compliance services 
                designed to empower businesses to grow confidently. 
                Our team of experienced professionals ensures accurate bookkeeping, 
                timely tax filings, payroll management, and strategic advisory 
                services tailored to your unique business needs. 
                With our expertise, you can focus on scaling your business while we take care of the numbers.
              </p>
              <Button 
                variant="solid" 
                className="bg-[#b78c25] hover:bg-[#a36f1f] text-white px-8 py-3 rounded-xl shadow-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Image Content */}
            <div className="flex justify-center md:justify-end">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" // professional business image
                alt="Professional Accounting"
                className="rounded-3xl shadow-2xl object-cover w-full max-w-md hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default AboutPreview;
