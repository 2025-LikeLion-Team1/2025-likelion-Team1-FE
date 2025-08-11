export interface IFeatureSectionProps {
  className?: string;
}

export const FeatureSection = ({ className = "" }: IFeatureSectionProps): React.JSX.Element => {
  return (
    <div className={`flex flex-row gap-[280px] items-center justify-center absolute left-[calc(50%_-_689px)] top-[calc(50%_-_516.5px)] ${className}`}>
      {/* 질문 섹션 */}
      <div className="flex flex-col gap-0 items-start justify-center shrink-0 relative">
        <div className="flex flex-row gap-0 items-end justify-start shrink-0 relative">
          <div
            className="text-[#204efb] text-left font-['Inter',_sans-serif] text-[150px] leading-[220px] font-semibold relative flex items-center justify-start"
            style={{ letterSpacing: "-0.025em" }}
          >
            질문
          </div>
          <div
            className="text-[#eaeaea] text-left font-['Inter',_sans-serif] text-5xl leading-[220px] font-semibold relative w-[45px] h-[145px] flex items-center justify-start"
            style={{ letterSpacing: "-0.025em" }}
          >
            은
          </div>
        </div>
        <div className="flex flex-row gap-0 items-end justify-start shrink-0 w-[555px] relative">
          <div
            className="text-[#eaeaea] text-left font-['Inter',_sans-serif] text-[150px] leading-[220px] font-semibold relative flex items-center justify-start"
            style={{ letterSpacing: "-0.025em" }}
          >
            무시
          </div>
          <div
            className="text-[#eaeaea] text-left font-['Inter',_sans-serif] text-5xl leading-[220px] font-semibold relative flex-1 h-[145px] flex items-center justify-start"
            style={{ letterSpacing: "-0.025em" }}
          >
            되지 않습니다
          </div>
        </div>
      </div>

      {/* 답변 섹션 */}
      <div className="flex flex-col gap-0 items-start justify-center shrink-0 relative">
        <div className="flex flex-row gap-0 items-end justify-start shrink-0 relative">
          <div
            className="text-[#204efb] text-left font-['Inter',_sans-serif] text-[150px] leading-[220px] font-semibold relative flex items-center justify-start"
            style={{ letterSpacing: "-0.025em" }}
          >
            답변
          </div>
          <div
            className="text-[#eaeaea] text-left font-['Inter',_sans-serif] text-5xl leading-[220px] font-semibold relative w-[45px] h-[145px] flex items-center justify-start"
            style={{ letterSpacing: "-0.025em" }}
          >
            은
          </div>
        </div>
        <div className="flex flex-row gap-0 items-end justify-start self-stretch shrink-0 relative">
          <div
            className="text-[#eaeaea] text-left font-['Inter',_sans-serif] text-[150px] leading-[220px] font-semibold relative flex items-center justify-start"
            style={{ letterSpacing: "-0.025em" }}
          >
            투명
          </div>
          <div
            className="text-[#eaeaea] text-left font-['Inter',_sans-serif] text-5xl leading-[220px] font-semibold relative w-[313px] h-[145px] flex items-center justify-start"
            style={{ letterSpacing: "-0.025em" }}
          >
            하게 공개됩니다
          </div>
        </div>
      </div>
    </div>
  );
};
