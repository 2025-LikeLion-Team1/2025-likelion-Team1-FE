import React from 'react';
import { colors, typography, layout, calculateOptimalFontWeight } from '../../styles';

export interface IFeatureSectionProps {
  className?: string;
}

export const FeatureSection = ({ className = "" }: IFeatureSectionProps): React.JSX.Element => {
  // 동적 fontWeight 계산
  const featureFontSize = parseInt(typography.fontSize.feature); // feature 크기
  const subTextFontSize = parseInt(typography.fontSize['5xl']); // 5xl 크기
  
  const featureTextStyle = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.feature,
    lineHeight: layout.lineHeights.feature,
    fontWeight: calculateOptimalFontWeight(featureFontSize, 16, 600), // 동적 계산
    letterSpacing: typography.letterSpacing.tight,
  };

  const subTextStyle = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize['5xl'],
    lineHeight: layout.lineHeights.feature,
    fontWeight: calculateOptimalFontWeight(subTextFontSize, 16, 600), // 동적 계산
    letterSpacing: typography.letterSpacing.tight,
  };

  return (
    <div 
      className={`flex flex-row items-center justify-center absolute ${className}`}
      style={{
        gap: layout.spacing.featureGap,
        left: layout.positions.featureLeft,
        top: layout.positions.featureTop,
      }}
      data-aos="fade-up" // fade-up 애니메이션 적용
    >
      {/* 질문 섹션 */}
      <div className="flex flex-col items-start justify-center shrink-0 relative" style={{ gap: 0 }}>
        <div className="flex flex-row items-end justify-start shrink-0 relative" style={{ gap: 0 }}>
          <div
            className="text-left relative flex items-center justify-start"
            style={{ 
              ...featureTextStyle,
              color: colors.primary.blue,
            }}
            data-aos="fade-up" // fade-up 애니메이션 적용
          >
            질문
          </div>
          <div
            className="text-left relative flex items-center justify-start"
            style={{ 
              ...subTextStyle,
              color: colors.neutral.gray100,
              width: layout.maxWidth.featureSmallText,
              height: layout.heights.featureText,
            }}
            data-aos="fade-up" // fade-up 애니메이션 적용
          >
            은
          </div>
        </div>
        <div 
          className="flex flex-row items-end justify-start shrink-0 relative"
          style={{ 
            gap: 0,
            width: layout.maxWidth.featureRow,
          }}
        >
          <div
            className="text-left relative flex items-center justify-start"
            style={{ 
              ...featureTextStyle,
              color: colors.neutral.gray100,
              
            }}
            data-aos="fade-up" // fade-up 애니메이션 적용
          >
            무시
          </div>
          <div
            className="text-left relative flex items-center justify-start"
            style={{ 
              ...subTextStyle,
              color: colors.neutral.gray100,
              minWidth: 0,
              flex: 1,
              height: layout.heights.featureText,
              whiteSpace: 'nowrap',
              overflow: 'visible',
            }}
            data-aos="fade-up" // fade-up 애니메이션 적용
          >
            되지 않습니다
          </div>
        </div>
      </div>

      {/* 답변 섹션 */}
      <div className="flex flex-col items-start justify-center shrink-0 relative" style={{ gap: 0 }}>
        <div className="flex flex-row items-end justify-start shrink-0 relative" style={{ gap: 0 }}>
          <div
            className="text-left relative flex items-center justify-start"
            style={{ 
              ...featureTextStyle,
              color: colors.primary.blue,
            }}
            data-aos="fade-up" // fade-up 애니메이션 적용
          >
            답변
          </div>
          <div
            className="text-left relative flex items-center justify-start"
            style={{ 
              ...subTextStyle,
              color: colors.neutral.gray100,
              width: layout.maxWidth.featureSmallText,
              height: layout.heights.featureText,
            }}
            data-aos="fade-up" // fade-up 애니메이션 적용
          >
            은
          </div>
        </div>
        <div 
          className="flex flex-row items-end justify-start self-stretch shrink-0 relative"
          style={{ gap: 0 }}
        >
          <div
            className="text-left relative flex items-center justify-start"
            style={{ 
              ...featureTextStyle,
              color: colors.neutral.gray100,
            }}
            data-aos="fade-up" // fade-up 애니메이션 적용
          >
            투명
          </div>
          <div
            className="text-left relative flex items-center justify-start"
            style={{ 
              ...subTextStyle,
              color: colors.neutral.gray100,
              width: layout.maxWidth.featureSubText,
              height: layout.heights.featureText,
              whiteSpace: 'nowrap',
            }}
            data-aos="fade-up" // fade-up 애니메이션 적용
          >
            하게 공개됩니다
          </div>
        </div>
      </div>
    </div>
  );
};
