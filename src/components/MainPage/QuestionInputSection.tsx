import { useState } from "react";
import { main, base } from '../../styles/tokens';

export const QuestionInputSection = () => {
    const [question, setQuestion] = useState("");
    const [isClicked, setIsClicked] = useState(false);

  return (
    <div 
      className="flex flex-col items-start justify-start shrink-0 relative"
      style={{ 
        gap: main.spacing.headerGap, // 18px
        width: main.sizes.questionWidth, // 590px
      }}
    >
      <div 
        className="flex flex-row items-end justify-start self-stretch shrink-0 relative" 
        style={{ gap: base.spacing.md }} // 16px

      >{/* 입력창 + 버튼 */}
        <div 
          className="border-solid border-2 flex flex-row items-start justify-center flex-1 relative"
          style={{
            backgroundColor: base.colors.neutral.black,
            borderRadius: main.borderRadius.question, // 25px
            borderColor: base.colors.primary.blue,
            borderWidth: main.spacing.borderMedium, // 2px
            padding: main.spacing.questionPadding, // 12px 28px
            gap: main.spacing.cardInnerGap, // 10px
          }}

        >{/* 입력창 */}
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="질문을 입력하세요..."
            className="text-left relative flex-1"
            style={{ 
              color: base.colors.neutral.gray400,
              fontSize: main.typography.fontSize.body, // 14px
              lineHeight: main.typography.lineHeight.tight, // 24px
              letterSpacing: base.typography.letterSpacing.tight,
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: main.typography.getDynamicWeight.getMedium(14), // 14px Medium
            }}
          >
          </input>
        </div>

        {/* 질문하기 버튼 */}
        <div
          className="flex flex-row items-center justify-start shrink-0 relative"
          style={{
            borderRadius: main.borderRadius.button, // 100px
            padding: main.spacing.buttonBorderWidth, // 2px (그라디언트 테두리 두께)
            background: main.gradients.questionBorder, // 그라디언트 배경
            width: main.sizes.questionButtonWidth, // 120px
          }}
          onMouseDown={() => setIsClicked(true)}
          onMouseUp={() => setIsClicked(false)}
        >
          <div
            className="flex flex-row items-center justify-center flex-1 relative"
            style={{
              borderRadius: main.borderRadius.button, // 100px
              padding: main.spacing.buttonPadding, // 9px 14px
              gap: main.spacing.cardInnerGap, // 10px
              background: isClicked
                ? "linear-gradient(90deg, #04163eff, #05248dff)" // 클릭 시 더 진한 파랑
                : main.gradients.questionButton,
              transition: "background 0.2s ease-in-out"
            }}
          >
            <img
              className="shrink-0 relative overflow-visible"
              style={{ 
                width: main.sizes.iconLarge, // 30px
                height: main.sizes.iconLarge, // 30px
                aspectRatio: "1",
              }}
              src="/div5.svg"
              alt="Question Icon"
            />
            <div
              className="text-left relative flex items-center justify-start"
              style={{ 
                color: base.colors.neutral.white, // 흰색 텍스트
                fontSize: main.typography.fontSize.body, // 14px
                lineHeight: main.typography.lineHeight.body, // 20px
                letterSpacing: base.typography.letterSpacing.tight,
                fontFamily: base.typography.fontFamily.primary,
                fontWeight: main.typography.getDynamicWeight.getSemiBold(14), // 14px SemiBold
                whiteSpace: 'nowrap',
                overflow: 'hidden',
               }}
            >
              질문하기
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-center justify-start shrink-0 relative"
        style={{ 
          paddingRight: main.spacing.lg, // 24px
          paddingLeft: main.spacing.lg, // 24px
          gap: main.spacing.tagGap, // 20px
        }}
      >
        <div 
          className="flex flex-row items-center justify-start shrink-0 relative" 
          style={{ gap: main.spacing.questionIconGap }} // 11px
        >
          <img
            className="shrink-0 relative overflow-visible"
            style={{ 
              width: main.sizes.questionIconSize, // 40px
              height: main.sizes.questionIconHeight, // 24px
            }}
            src="/group-10.svg"
            alt="1:1 Icon"
          />
          <div
            className="text-left relative flex items-center justify-start"
            style={{ 
              color: base.colors.neutral.gray400,
              fontSize: main.typography.fontSize.body, // 14px
              lineHeight: main.typography.lineHeight.tight, // 24px
              letterSpacing: base.typography.letterSpacing.tight,
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: main.typography.getDynamicWeight.getSemiBold(14), // 14px SemiBold
            }}
          >
            1:1 질문하기
          </div>
        </div>
        <img
          className="shrink-0 relative overflow-visible"
          style={{ 
            width: main.sizes.iconSmall, // 16px
            height: main.sizes.iconSmall, // 16px
          }}
          src="/info-icon0.svg"
          alt="Info Icon"
        />
        <div 
          className="flex flex-col items-start justify-start shrink-0 relative" 
          style={{ gap: main.spacing.cardInnerGap }} // 10px
        >
          <div 
            className="flex flex-row items-start justify-start shrink-0 relative"
            style={{
              backgroundColor: base.colors.primary.blue,
              borderRadius: main.borderRadius.tooltip, // 3px
              padding: main.spacing.tooltipPadding, // 4px 8px
            }}
          >
            <div
              className="text-left relative"
              style={{ 
                color: base.colors.neutral.white,
                fontSize: main.typography.fontSize.tooltip, // 10px
                lineHeight: main.typography.lineHeight.tooltip, // 16px
                letterSpacing: base.typography.letterSpacing.tight,
                fontFamily: base.typography.fontFamily.primary,
                fontWeight: main.typography.getDynamicWeight.getSemiBold(10), // 10px SemiBold
              }}
            >
              개인정보가 담긴 질문은 해당 옵션을 꼭 체크해주세요!
            </div>
          </div>
          <img
            className="shrink-0 absolute overflow-visible"
            style={{ 
              width: main.sizes.tooltipWidth, // 12px
              height: main.sizes.tooltipHeight, // 10px
              left: main.positions.tooltipLeft, // -11px
              top: main.positions.tooltipTop, // 7px
            }}
            src="/vector-40.svg"
            alt="Tooltip Arrow"
          />
        </div>
      </div>
    </div>
  );
};