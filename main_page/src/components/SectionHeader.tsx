import React from 'react';
import { designTokens } from '../tokens/designTokens';
import { assets, content } from '../data/content';

interface SectionHeaderProps {
  title: string;
  onSeeMore?: () => void;
  arrowIcon?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  onSeeMore, 
  arrowIcon = assets.arrowRight,
  className = '' 
}) => {
  return (
    <div className={`flex flex-row items-center justify-between self-stretch shrink-0 relative ${className}`}>
      <div className="pr-2 pl-2 flex flex-row gap-2.5 items-center justify-center flex-1 relative">
        <div
          className="text-left leading-9 relative flex-1 flex items-center justify-start overflow-hidden"
          style={{
            letterSpacing: "-0.025em",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: designTokens.colors.text.secondary,
            ...designTokens.typography.semibold['2xl'],
          }}
        >
          {title}
        </div>
      </div>
      {onSeeMore && (
        <button
          onClick={onSeeMore}
          className="pr-[3px] pl-[3px] flex flex-row gap-0 items-center justify-start shrink-0 relative cursor-pointer transition-opacity hover:opacity-80"
        >
          <div
            className="text-left font-semibold text-base leading-5 relative flex items-center justify-start"
            style={{ 
              letterSpacing: "-0.025em",
              color: designTokens.colors.text.tertiary,
              fontFamily: designTokens.fontFamily.semibold,
            }}
          >
            {content.sections.seeMore}
          </div>
          <img
            className="shrink-0 w-4 h-4 relative overflow-visible"
            src={arrowIcon}
            alt="See more"
          />
        </button>
      )}
    </div>
  );
};
