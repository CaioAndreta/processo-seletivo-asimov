import { Button } from "@/components/ui/button";
import ctaIllustration from "@/assets/lets-make-things-happen.svg";

const CtaBanner = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="bg-secondary rounded-card py-10 px-10 md:py-0 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-6 max-w-md">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground">
            Let's make things happen
          </h2>
          <p className="text-foreground text-lg">
            Contact us today to learn more about how our digital marketing services can help your
            business grow and succeed online.
          </p>
          <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-lg px-8 py-6 text-lg">
            Get your free proposal
          </Button>
        </div>
        <div className="hidden md:flex flex-shrink-0">
          <img src={ctaIllustration} alt="Let's make things happen" className="h-[400px] -my-6 md:pr-16 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
