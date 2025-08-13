import React from 'react';
import { colors, typography, layout, calculateOptimalFontWeight } from '../../styles';

export interface IAIDescriptionSectionProps {
  className?: string;
}

export const AIDescriptionSection = ({ className = "" }: IAIDescriptionSectionProps): React.JSX.Element => {
  // 동적 fontWeight 계산
  const aiTextFontSize = parseInt(typography.fontSize.partner);
  const descriptionFontSize = parseInt(typography.fontSize.xl);
  
  return (
    <div className={className}>
      
      {/* AI 텍스트 */}
      <div
        className="text-center absolute flex items-center justify-center"
        style={{
          color: colors.primary.blue,
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize.partner,
          lineHeight: layout.lineHeights.ai,
          fontWeight: calculateOptimalFontWeight(aiTextFontSize, 16, 600), // 동적 계산
          letterSpacing: typography.letterSpacing.tight,
          left: layout.positions.aiTextLeft,
          top: layout.positions.aiTextTop,
        }}
        data-aos="fade-up" // fade-up 애니메이션 적용
      >
        AI
      </div>
      
      {/* 설명 텍스트 */}
      <div
        className="text-center absolute flex items-center justify-center"
        style={{
          color: colors.neutral.gray100,
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize.xl,
          lineHeight: layout.lineHeights.ai,
          fontWeight: calculateOptimalFontWeight(descriptionFontSize, 16, 600), // 동적 계산
          letterSpacing: typography.letterSpacing.tight,
          left: '51%',
          top: layout.positions.aiDescTop,
          translate: '-50%',
        }}
        data-aos="fade-up" // fade-up 애니메이션 적용
      >
        를 통해 모든 질문들은 무시되지 않고 요약됩니다.
        <br />
        그리고 모든 질문과 답변은 투명하게 공개하여 사용자에게 신뢰를 줍니다.
      </div>
    </div>
  );
};
