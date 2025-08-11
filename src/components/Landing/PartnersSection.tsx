export interface IPartnersSectionProps {
  className?: string;
}

export const PartnersSection = ({ className = "" }: IPartnersSectionProps): React.JSX.Element => {
  return (
    <div className={className}>
      {/* 파트너십 타이틀 */}
      <div
        className="text-[#eaeaea] text-center font-['Inter',_sans-serif] text-5xl leading-[48px] font-bold absolute left-[50%] top-[2580px] w-[451px] h-12 flex items-center justify-center"
        style={{ letterSpacing: "-0.025em", translate: "-50%" }}
      >
        함께하는 파트너십 기업
      </div>
      
      {/* 파트너 이미지들 */}
      <div 
        className="flex flex-row gap-5 items-start justify-center flex-wrap content-start w-[930px] absolute left-[50%] top-[2700px]"
        style={{ translate: "-50%" }}
      >
        <img
          className="rounded-[20px] shrink-0 w-[454px] h-[284px] relative"
          style={{
            background: "linear-gradient(to left, rgba(8, 8, 8, 0.20), rgba(8, 8, 8, 0.20))",
            objectFit: "cover",
            marginRight: "20px",
            marginBottom: "20px",
          }}
          src="/rectangle-40.png"
          alt="Partner 1"
        />
        <img
          className="rounded-[20px] shrink-0 w-[456px] h-[284px] relative"
          style={{
            background: "linear-gradient(to left, rgba(8, 8, 8, 0.20), rgba(8, 8, 8, 0.20))",
            objectFit: "cover",
            marginBottom: "20px",
          }}
          src="/rectangle-50.png"
          alt="Partner 2"
        />
        <img
          className="rounded-[20px] shrink-0 w-[454px] h-[284px] relative"
          style={{
            background: "linear-gradient(to left, rgba(8, 8, 8, 0.20), rgba(8, 8, 8, 0.20))",
            objectFit: "cover",
            marginRight: "20px",
          }}
          src="/rectangle-60.png"
          alt="Partner 3"
        />
        <img
          className="rounded-[20px] shrink-0 w-[456px] h-[284px] relative"
          style={{
            background: "linear-gradient(to left, rgba(8, 8, 8, 0.20), rgba(8, 8, 8, 0.20))",
            objectFit: "cover",
          }}
          src="/rectangle-70.png"
          alt="Partner 4"
        />
      </div>
    </div>
  );
};
