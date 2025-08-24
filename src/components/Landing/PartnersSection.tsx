import React from 'react';
import { colors, typography, layout, calculateOptimalFontWeight } from '../../styles';

export interface IPartnersSectionProps {
  className?: string;
}

export const PartnersSection = ({ className = "" }: IPartnersSectionProps): React.JSX.Element => {
  // 동적 fontWeight 계산
  const partnerTitleFontSize = parseInt(typography.fontSize['5xl']);
  
  const partnerImageStyle = {
    borderRadius: layout.borderRadius['2xl'],
    background: "linear-gradient(to left, rgba(8, 8, 8, 0.20), rgba(8, 8, 8, 0.20))",
    objectFit: "cover" as const,
  };

  return (
    <div className={className}>
      {/* 파트너십 타이틀 */}
      <div
        className="text-center absolute flex items-center justify-center"
        style={{
          color: colors.neutral.gray100,
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize['5xl'],
          lineHeight: layout.lineHeights.partner,
          fontWeight: calculateOptimalFontWeight(partnerTitleFontSize, 16, 600), // 동적 계산
          letterSpacing: typography.letterSpacing.tight,
          left: '50%',
          top: layout.positions.partnerTitleTop,
          width: layout.maxWidth.partnerTitle,
          height: layout.heights.partnerTitle,
          translate: '-50%',
          minWidth: 0, // 최소 너비 설정
          whiteSpace: 'nowrap', // 줄바꿈 방지
          overflow: 'visible', // 넘치는 텍스트 숨김
        }}
        data-aos="fade-up" // fade-up 애니메이션 적용
      >
        함께하는 파트너십 기업
      </div>
      
      {/* 파트너 이미지들 */}
      <div 
        className="absolute px-4"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // 무조건 2열
          gap: layout.spacing.lg,
          maxWidth: layout.maxWidth.partner,
          width: '100%',
          left: '50%',
          top: layout.positions.partnerImagesTop,
          translate: '-50%',
        }}
        data-aos="fade-up" // fade-up 애니메이션 적용
      >
        <img
          className="relative"
          style={{
            ...partnerImageStyle,
            width: '100%',
            height: layout.spacing.imageHeight,
            minWidth: layout.minWidth.partnerImage,
          }}
          src="/rectangle-40.png"
          alt="Partner 1"
        />
        <img
          className="relative"
          style={{
            ...partnerImageStyle,
            width: '100%',
            height: layout.spacing.imageHeight,
            minWidth: layout.minWidth.partnerImage,
          }}
          src="/rectangle-50.png"
          alt="Partner 2"
        />
        <img
          className="relative"
          style={{
            ...partnerImageStyle,
            width: '100%',
            height: layout.spacing.imageHeight,
            minWidth: layout.minWidth.partnerImage,
          }}
          src="/rectangle-60.png"
          alt="Partner 3"
        />
        <img
          className="relative"
          style={{
            ...partnerImageStyle,
            width: '100%',
            height: layout.spacing.imageHeight,
            minWidth: layout.minWidth.partnerImage,
          }}
          src="/rectangle-70.png"
          alt="Partner 4"
        />
      </div>
    </div>
  );
};
