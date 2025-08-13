import React from 'react';
import { colors, typography, layout, calculateOptimalFontWeight } from '../../styles';
import { Slogan } from './Slogan';

export interface IHeroSectionProps {
  className?: string;
}

export const HeroSection = ({ className = "" }: IHeroSectionProps): React.JSX.Element => {
  // Hero 타이틀의 동적 fontWeight 계산
  const heroFontSize = parseInt(typography.fontSize.hero); // 156px
  const dynamicFontWeight = calculateOptimalFontWeight(heroFontSize, 16, 600);

  return (
    <div
      className={`w-full absolute left-0 right-0 overflow-hidden flex flex-col items-center justify-center ${className}`}
      style={{
        background: "linear-gradient(180deg, rgba(8, 8, 8, 1.00) 84.61538553237915%, rgba(8, 8, 8, 0.00) 100%)",
        borderTopLeftRadius: layout.borderRadius['2xl'],
        borderTopRightRadius: layout.borderRadius['2xl'],
        height: layout.spacing.heroHeight,
        top: layout.spacing['4xl'], // 헤더 60px + 마진 20px = 80px
      }}
    >
      {/* Main Logo and Title */}
      <div 
        className="flex flex-row items-center justify-center"
        style={{ 
          gap: layout.spacing.heroLogoGap,
          marginBottom: layout.spacing.heroBottomMargin,
        }}
      >
        <div
          className="overflow-hidden shrink-0"
          style={{ 
            width: layout.spacing.heroLogoSize,
            height: layout.spacing.heroLogoSize,
            aspectRatio: "1" 
          }}
        >
          <img
            className="w-[100%] h-[100%] overflow-visible"
            src="/qnahub-logo-11.svg"
            alt="QnAHub Logo"
          />
        </div>
        <div
          className="text-left flex items-center justify-start"
          style={{ 
            color: colors.neutral.white,
            fontFamily: typography.fontFamily.primary,
            fontSize: typography.fontSize.hero,
            lineHeight: typography.lineHeight.tight,
            fontWeight: dynamicFontWeight, // 동적 계산된 fontWeight
            letterSpacing: typography.letterSpacing.tight,
          }}
        >
          QnAHub
        </div>
      </div>

      {/* Slogan */}
      <Slogan />
    </div>
  );
};
