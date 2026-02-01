import { useNavigate } from "react-router-dom";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import ScrollReveal from "../../components/common/ScrollReveal";

const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-[#fff7ed] to-gray-50">
      <Container>
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-400">
                About AccountsZ CARE
              </h2>
              <p className="text-gray-700 max-w-3xl mb-8 text-lg md:text-xl leading-relaxed">
                AccountsZ CARE is a professional accounting and financial services firm dedicated to
                helping businesses manage their finances with clarity, accuracy, and confidence. We believe
                that proper accounting is the backbone of every successful business, and our goal is to
                provide reliable, timely, and cost-effective solutions tailored to our clients’ needs.
                <br /><br />
                Our mission is simple — to deliver <span className="text-orange-500 font-semibold">Complete Accounting Solutions</span> that allow our clients to
                focus on what they do best, while we take care of the numbers.
              </p>
              {/* Learn More Button with navigation */}
              <Button 
                variant="solid" 
                onClick={() => navigate("/about")}
                className="bg-gradient-to-r from-blue-500 to-orange-400 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Image Content */}
            <div className="flex justify-center md:justify-end">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
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
