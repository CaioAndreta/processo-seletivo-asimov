import ServiceCard from "./ServiceCard";
import seoImg from "@/assets/search-engine-optimization.png";
import ppcImg from "@/assets/pay-per-click.png";
import socialImg from "@/assets/social-media-marketing.png";
import emailImg from "@/assets/email-marketing.png";
import contentImg from "@/assets/content-creation.png";
import analyticsImg from "@/assets/analytics-and-tracking.png";

const services = [
  {
    title: "Search engine\noptimization",
    bgColor: "bg-secondary",
    titleBg: "bg-primary",
    textColor: "text-foreground",
    ctaColor: "text-foreground",
    arrowBg: "bg-foreground",
    arrowColor: "text-primary",
    image: seoImg,
  },
  {
    title: "Pay-per-click\nadvertising",
    bgColor: "bg-primary",
    titleBg: "bg-background",
    textColor: "text-foreground",
    ctaColor: "text-foreground",
    arrowBg: "bg-foreground",
    arrowColor: "text-primary",
    image: ppcImg,
  },
  {
    title: "Social Media\nMarketing",
    bgColor: "bg-foreground",
    titleBg: "bg-background",
    textColor: "text-foreground",
    ctaColor: "text-background",
    arrowBg: "bg-background",
    arrowColor: "text-foreground",
    image: socialImg,
  },
  {
    title: "Email\nMarketing",
    bgColor: "bg-secondary",
    titleBg: "bg-primary",
    textColor: "text-foreground",
    ctaColor: "text-foreground",
    arrowBg: "bg-foreground",
    arrowColor: "text-primary",
    image: emailImg,
  },
  {
    title: "Content\nCreation",
    bgColor: "bg-primary",
    titleBg: "bg-background",
    textColor: "text-foreground",
    ctaColor: "text-foreground",
    arrowBg: "bg-foreground",
    arrowColor: "text-primary",
    image: contentImg,
  },
  {
    title: "Analytics and\nTracking",
    bgColor: "bg-foreground",
    titleBg: "bg-primary",
    textColor: "text-foreground",
    ctaColor: "text-background",
    arrowBg: "bg-primary",
    arrowColor: "text-foreground",
    image: analyticsImg,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16" id="services">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
        <h2 className="mx-auto md:mx-0 inline-block bg-primary text-primary-foreground px-3 py-1 rounded-md text-3xl md:text-4xl font-medium">
          Services
        </h2>
        <p className="text-foreground max-w-lg text-lg text-center md:text-left">
          At our digital marketing agency, we offer a range of services to help businesses grow and
          succeed online. These services include:
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
