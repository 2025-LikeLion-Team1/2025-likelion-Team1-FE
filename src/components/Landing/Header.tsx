import React from 'react';
import { colors, typography, layout, calculateOptimalFontWeight } from '../../styles';

export interface IHeaderProps {
  className?: string;
}

export const Header = ({ className = "" }: IHeaderProps): React.JSX.Element => {
  // QnAHub 로고 텍스트의 동적 fontWeight 계산
  const logoFontSize = parseInt(typography.fontSize.xl); // 20px
  const dynamicFontWeight = calculateOptimalFontWeight(logoFontSize, 16, 600);

  return (
    <div 
      className={`flex flex-row items-center justify-between w-full absolute right-0 left-0 top-0 overflow-hidden bg-transparent ${className}`}
      style={{ 
        height: layout.spacing.header,
        paddingLeft: layout.spacing.lg,
        paddingRight: layout.spacing.lg,
        paddingTop: layout.spacing.headerPadding,
        paddingBottom: layout.spacing.headerPadding,
        zIndex: layout.zIndex.header,
      }}
    >
      <div 
        className="flex flex-row items-center justify-start shrink-0 relative" 
        style={{ gap: layout.spacing.logoGap }}
      >
        <img
          className="shrink-0 relative overflow-visible"
          style={{ 
            width: layout.spacing.logoSize,
            height: layout.spacing.logoSize,
            aspectRatio: "1" 
          }}
          src="/div11.svg"
          alt="QnAHub Logo"
        />
        <div
          className="text-left relative flex items-center justify-start"
          style={{ 
            color: colors.neutral.white,
            fontFamily: typography.fontFamily.primary,
            fontSize: typography.fontSize.xl,
            lineHeight: typography.lineHeight.tight,
            fontWeight: dynamicFontWeight, // 동적 계산된 fontWeight
            letterSpacing: typography.letterSpacing.tight,
          }}
        >
          QnAHub
        </div>
      </div>
    </div>
  );
};
