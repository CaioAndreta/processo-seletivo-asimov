interface ServiceCardProps {
  title: string;
  bgColor: string;
  titleBg: string;
  textColor: string;
  ctaColor: string;
  arrowBg: string;
  arrowColor: string;
  image: string;
}

const ServiceCard = ({
  title,
  bgColor,
  titleBg,
  textColor,
  ctaColor,
  arrowBg,
  arrowColor,
  image,
}: ServiceCardProps) => {
  return (
    <div
      className={`${bgColor} ${textColor} rounded-card border border-foreground p-10 flex flex-col md:flex-row items-start md:items-end justify-between min-h-[240px] shadow-[0_5px_0_0_hsl(var(--foreground))] transition-transform hover:-translate-y-1`}
    >
      <div className="flex flex-col justify-between h-full gap-6">
        <div>
          {title.split("\n").map((line, i) => (
            <span
              key={i}
              className={`${titleBg} inline px-2 py-1 rounded text-2xl md:text-[1.6rem] font-medium leading-relaxed box-decoration-clone`}
            >
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </div>
        <a href="#" className="hidden md:flex items-center gap-3 group">
          <span
            className={`${arrowBg} ${arrowColor} w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1`}
          >
            <ArrowIcon />
          </span>
          <span className={`${ctaColor} text-lg`}>Learn more</span>
        </a>
      </div>
      <div className="w-full md:w-fit flex items-end justify-between gap-4">
        <a href="#" className="md:hidden items-center">
          <span
            className={`${arrowBg} ${arrowColor} w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1`}
          >
            <ArrowIcon />
          </span>
        </a>
        <div className="w-36 md:w-48 h-40">
          <img
            src={image}
            alt={title.replace("\n", " ")}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M4 16L16 4M16 4H6M16 4V14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ServiceCard;
