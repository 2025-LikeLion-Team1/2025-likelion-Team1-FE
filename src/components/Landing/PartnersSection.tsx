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

  // 멋쟁이사자처럼 로고 클릭 핸들러
  const handleLikeLionClick = () => {
    // 개발 환경에서는 localhost:3001, 배포 환경에서는 /likelion_univ로 이동
      window.location.href = 'http://3.36.109.149/likelion_univ';
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
          className="relative cursor-pointer hover:opacity-80 transition-opacity duration-200"
          style={{
            ...partnerImageStyle,
            width: '100%',
            height: layout.spacing.imageHeight,
            minWidth: layout.minWidth.partnerImage,
          }}
          src="/rectangle-40.png"
          alt="멋쟁이사자처럼"
          title="멋쟁이사자처럼 - 클릭하면 메인페이지로 이동합니다"
          onClick={handleLikeLionClick}
        />
        <img
          className="relative cursor-pointer hover:opacity-80 transition-opacity duration-200"
          style={{
            ...partnerImageStyle,
            width: '100%',
            height: layout.spacing.imageHeight,
            minWidth: layout.minWidth.partnerImage,
          }}
          src="/rectangle-50.png"
          alt="Partner 2"
          title="클릭하면 메인페이지로 이동합니다"
          onClick={handleLikeLionClick}
        />
        <img
          className="relative cursor-pointer hover:opacity-80 transition-opacity duration-200"
          style={{
            ...partnerImageStyle,
            width: '100%',
            height: layout.spacing.imageHeight,
            minWidth: layout.minWidth.partnerImage,
          }}
          src="/rectangle-60.png"
          alt="Partner 3"
          title="클릭하면 메인페이지로 이동합니다"
          onClick={handleLikeLionClick}
        />
        <img
          className="relative cursor-pointer hover:opacity-80 transition-opacity duration-200"
          style={{
            ...partnerImageStyle,
            width: '100%',
            height: layout.spacing.imageHeight,
            minWidth: layout.minWidth.partnerImage,
          }}
          src="/rectangle-70.png"
          alt="Partner 4"
          title="클릭하면 메인페이지로 이동합니다"
          onClick={handleLikeLionClick}
        />
      </div>
    </div>
  );
};
