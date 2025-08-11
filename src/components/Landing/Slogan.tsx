export interface ISloganProps {
  className?: string;
}

export const Slogan = ({ className = "" }: ISloganProps): React.JSX.Element => {
  return (
    <div
      className={`text-center absolute left-[50%] bottom-[268px] w-[586px] h-[180px] flex items-center justify-center ${className}`}
      style={{ translate: "-50%" }}
    >
      <span>
        <span className="text-[#204efb] font-['Inter',_sans-serif] text-[60px] leading-[90px] font-bold" style={{ letterSpacing: "-0.025em" }}>질문</span>
        <span className="text-[#eaeaea] font-['Inter',_sans-serif] text-[60px] leading-[90px] font-semibold" style={{ letterSpacing: "-0.025em" }}>으로</span>
        <span className="text-[#204efb] font-['Inter',_sans-serif] text-[60px] leading-[90px] font-bold" style={{ letterSpacing: "-0.025em" }}> 신뢰</span>
        <span className="text-[#eaeaea] font-['Inter',_sans-serif] text-[60px] leading-[90px] font-semibold" style={{ letterSpacing: "-0.025em" }}>를 만듭니다</span>
      </span>
    </div>
  );
};
