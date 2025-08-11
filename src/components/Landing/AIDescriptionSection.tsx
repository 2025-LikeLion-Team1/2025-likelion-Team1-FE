export interface IAIDescriptionSectionProps {
  className?: string;
}

export const AIDescriptionSection = ({ className = "" }: IAIDescriptionSectionProps): React.JSX.Element => {
  return (
    <div className={className}>
      {/* AI 텍스트 */}
      <div
        className="text-[#204efb] text-center font-['Inter',_sans-serif] text-[40px] leading-[60px] font-semibold absolute left-[calc(50%_-_235px)] top-[1739px] flex items-center justify-center"
        style={{ letterSpacing: "-0.025em" }}
      >
        AI
      </div>
      
      {/* 설명 텍스트 */}
      <div
        className="text-[#eaeaea] text-center font-['Inter',_sans-serif] text-xl leading-[60px] font-semibold absolute left-[50%] top-[1745px] flex items-center justify-center"
        style={{ letterSpacing: "-0.025em", translate: "-50%" }}
      >
        를 통해 모든 질문들은 무시되지 않고 요약됩니다.
        <br />
        그리고 모든 질문과 답변은 투명하게 공개하여 사용자에게 신뢰를 줍니다.
      </div>
    </div>
  );
};
