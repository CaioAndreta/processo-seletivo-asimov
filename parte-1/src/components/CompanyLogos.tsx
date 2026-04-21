import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import amazonLogo from "@/assets/logos/amazon.svg";
import dribbbleLogo from "@/assets/logos/dribbble.svg";
import hubspotLogo from "@/assets/logos/hubspot.svg";
import notionLogo from "@/assets/logos/notion.svg";
import netflixLogo from "@/assets/logos/netflix.svg";
import zoomLogo from "@/assets/logos/zoom.svg";

const logos = [
  { src: amazonLogo, alt: "Amazon" },
  { src: dribbbleLogo, alt: "Dribbble" },
  { src: hubspotLogo, alt: "HubSpot" },
  { src: notionLogo, alt: "Notion" },
  { src: netflixLogo, alt: "Netflix" },
  { src: zoomLogo, alt: "Zoom" },
];

const row1 = logos.slice(0, 3);
const row2 = logos.slice(3);

const LogoCarouselRow = ({
  items,
  direction,
}: {
  items: typeof logos;
  direction: "forward" | "backward";
}) => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, watchDrag: false },
    [AutoScroll({ speed: 0.5, direction, stopOnInteraction: false, stopOnFocusIn: false })]
  );

  // Duplicate items for seamless loop
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {duplicated.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex-none basis-1/3 min-w-0 flex items-center justify-center px-4 py-3"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-7 grayscale opacity-70 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const CompanyLogos = () => {
  return (
    <section className="py-12">
      {/* Desktop */}
      <div className="hidden md:flex flex-wrap items-center justify-between gap-4 md:gap-8">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>

      {/* Mobile: 2 rows of auto-scrolling carousels */}
      <div className="md:hidden space-y-2">
        <LogoCarouselRow items={row1} direction="forward" />
        <LogoCarouselRow items={row2} direction="backward" />
      </div>
    </section>
  );
};

export default CompanyLogos;
