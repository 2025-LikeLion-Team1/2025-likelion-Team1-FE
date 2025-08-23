import { main, base } from '../../styles/tokens';

export const AIAnalysisCard = () => {
  return (
    <div
      className="bg-[#2d2d32] rounded-[10px] border-solid border-[transparent] border-[6px] pt-2.5 pr-[18px] pb-2.5 pl-[18px] flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative"
      style={{
        boxShadow: "inset -2px -2px 2px 0px rgba(255, 255, 255, 0.20), inset 2px 2px 4px 0px rgba(0, 0, 0, 1.00)",
      }}
    >
      <div className="pt-1.5 pb-1.5 flex flex-col gap-0 items-start justify-start self-stretch flex-1 relative">
        <div
          className="text-[#eaeaea] text-left text-xl leading-7 font-semibold relative self-stretch"
          style={{ 
            letterSpacing: base.typography.letterSpacing.tight,
            fontFamily: base.typography.fontFamily.primary,
            fontWeight: main.typography.getDynamicWeight.postTitle() // 동적 계산
          }}
        >
          AI 분석 현황
        </div>
        <div className="pr-3 pl-3 flex flex-row gap-0 items-center justify-center self-stretch flex-1 relative">
          <div
            className="text-center relative flex-1 flex items-center justify-center overflow-hidden text-sm"
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: "#eaeaea",
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: main.typography.getDynamicWeight.body() // 동적 계산
            }}
          >
            "QnAHub AI가{" "}
            <span 
              style={{ 
                color: "#204efb",
                fontWeight: main.typography.getDynamicWeight.body() // 동적 계산
              }}
            >
              87
            </span>
            개의 질문을 종합중입니다..."
          </div>
        </div>
      </div>
    </div>
  );
};
