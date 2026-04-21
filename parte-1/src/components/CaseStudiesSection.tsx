import useEmblaCarousel from "embla-carousel-react";

const caseStudies = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

const CaseCard = ({ text }: { text: string }) => (
  <div className="bg-foreground rounded-card p-8 space-y-5 h-full flex flex-col">
    <p className="text-accent-foreground text-lg leading-relaxed flex-1">
      {text}
    </p>
    <a
      href="#"
      className="inline-flex items-center gap-2 text-primary text-lg font-medium group"
    >
      Learn more
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="transition-transform group-hover:translate-x-1"
      >
        <path
          d="M4 16L16 4M16 4H6M16 4V14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  </div>
);

const CaseStudiesSection = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: false,
  });

  return (
    <section className="py-16" id="use-cases">
      <div className="flex flex-col px-6 md:px-0 md:flex-row items-start md:items-center gap-6 mb-12">
        <h2 className="mx-auto md:mx-0 inline-block bg-primary text-primary-foreground px-3 py-1 rounded-md text-3xl md:text-4xl font-medium">
          Case Studies
        </h2>
        <p className="text-center md:text-left text-foreground max-w-lg text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden md:block bg-foreground rounded-card p-10 md:p-16">
        <div className="grid md:grid-cols-3 gap-8 md:divide-x md:divide-accent-foreground/30">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="md:px-8 first:md:pl-0 last:md:pr-0 space-y-5"
            >
              <p className="text-accent-foreground text-lg leading-relaxed">
                {study.text}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary text-lg font-medium group"
              >
                Learn more
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M4 16L16 4M16 4H6M16 4V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: swipeable carousel */}
      <div className="md:hidden overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {caseStudies.map((study, i) => (
            <div key={i} className={`flex-none pl-6`} style={{ width: "80%" }}>
              <CaseCard text={study.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
