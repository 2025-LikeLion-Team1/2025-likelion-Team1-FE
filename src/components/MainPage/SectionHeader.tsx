import React from 'react';
import { base, main } from '../../styles/tokens';

interface SectionHeaderProps {
  title: string;
  showMoreButton?: boolean;
  arrowIcon?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  showMoreButton = true, 
  arrowIcon = 'frame-350.svg',
  className = ''
}) => {
  return (
    <div 
      className={`flex flex-row items-center justify-between self-stretch shrink-0 relative ${className}`}
    >
      {/* 좌측: 제목 */}
      <div 
        className="flex flex-row gap-0 items-center justify-center flex-1 relative"
        style={{ 
          paddingRight: main.spacing.sectionHeaderTitlePadding,
          paddingLeft: main.spacing.sectionHeaderTitlePadding,
          gap: main.spacing.sectionHeaderIconGap,
        }}
      >
        <div
          className="text-left relative flex-1 flex items-center justify-start overflow-hidden"
          style={{ 
            color: base.colors.neutral.gray100,
            fontSize: main.typography.fontSize.sectionTitle,
            lineHeight: main.typography.lineHeight.sectionTitle,
            letterSpacing: base.typography.letterSpacing.tight,
            fontFamily: base.typography.fontFamily.primary,
            fontWeight: main.typography.getDynamicWeight.getSemiBold(24),
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </div>
      </div>
      
      {/* 우측: 더보기 버튼 */}
      {showMoreButton && (
        <div 
          className="flex flex-row gap-0 items-center justify-start shrink-0 relative"
          style={{ 
            paddingRight: main.spacing.sectionHeaderButtonPadding,
            paddingLeft: main.spacing.sectionHeaderButtonPadding,
            gap: main.spacing.sectionHeaderButtonGap,
          }}
        >
          <div
            className="text-left relative flex items-center justify-start"
            style={{ 
              color: base.colors.neutral.gray400,
              fontSize: main.typography.fontSize.sectionButton,
              lineHeight: main.typography.lineHeight.sectionButton,
              letterSpacing: base.typography.letterSpacing.tight,
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: main.typography.getDynamicWeight.getSemiBold(16),
            }}
          >
            더보기
          </div>
          <img
            className="shrink-0 relative overflow-visible"
            style={{ 
              width: main.sizes.sectionHeaderArrowSize,
              height: main.sizes.sectionHeaderArrowSize,
            }}
            src={arrowIcon}
            alt="더보기 화살표"
          />
        </div>
      )}
    </div>
  );
};
