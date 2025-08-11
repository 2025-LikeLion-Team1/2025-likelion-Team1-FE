import { Slogan } from './Slogan';

export interface IHeroSectionProps {
  className?: string;
}

export const HeroSection = ({ className = "" }: IHeroSectionProps): React.JSX.Element => {
  return (
    <div
      className={`rounded-tl-[20px] rounded-tr-[20px] w-[1880px] h-[1004px] absolute left-[50%] top-20 overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(180deg, rgba(8, 8, 8, 1.00) 84.61538553237915%,rgba(8, 8, 8, 0.00) 100%)",
        translate: "-50%",
      }}
    >
      {/* Main Logo and Title */}
      <div
        className="w-[930px] h-[236px] absolute left-[50%] bottom-[558px]"
        style={{ translate: "-50%" }}
      >
        <div
          className="w-[236px] h-[236px] absolute left-0 top-0 overflow-hidden"
          style={{ aspectRatio: "1" }}
        >
          <img
            className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
            src="/qnahub-logo-11.svg"
            alt="QnAHub Logo"
          />
        </div>
        <div
          className="text-[#ffffff] text-left font-['Inter',_sans-serif] text-[156px] leading-[156px] font-bold absolute left-[295.03px] top-[50%] flex items-center justify-start"
          style={{ letterSpacing: "-0.025em", translate: "0 -50%" }}
        >
          QnAHub
        </div>
      </div>

      {/* Slogan */}
      <Slogan />
    </div>
  );
};
