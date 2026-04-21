import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero.svg";

const HeroSection = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-8 items-center py-8 lg:py-20">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground">
          Navigating the digital landscape for success
        </h1>
        <div className="flex justify-center">
          <img
            src={heroIllustration}
            alt="Digital marketing illustration"
            className="md:hidden w-full max-w-lg"
          />
        </div>
        <p className="text-lg text-foreground max-w-md">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button className="w-full md:w-fit bg-foreground text-background leading-snug hover:bg-foreground/90 rounded-lg px-8 py-6 text-lg">
          Book a consultation
        </Button>
      </div>
      <div className="hidden md:flex justify-center">
        <img
          src={heroIllustration}
          alt="Digital marketing illustration"
          className="w-full max-w-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
