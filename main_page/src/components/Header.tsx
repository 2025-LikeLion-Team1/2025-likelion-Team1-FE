import React from 'react';
import { designTokens } from '../tokens/designTokens';
import { assets, content } from '../data/content';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <div 
      className={`pt-1.5 pr-6 pb-1.5 pl-6 flex flex-row items-center justify-between absolute right-0 left-0 top-0 overflow-hidden ${className}`}
    >
      <div className="flex flex-row gap-[9px] items-center justify-start shrink-0 relative">
        <img
          className="shrink-0 w-[30px] h-[30px] relative overflow-visible"
          style={{ aspectRatio: "1" }}
          src={assets.logo}
          alt="QnAHub Logo"
        />
        <div
          className="text-white text-left leading-5 relative flex items-center justify-start"
          style={{ 
            letterSpacing: "-0.025em",
            color: designTokens.colors.text.primary,
            ...designTokens.typography.bold.xl,
          }}
        >
          {content.header.title}
        </div>
      </div>
      <div className="flex flex-row gap-6 items-center justify-end shrink-0 relative">
        <div
          className="text-left leading-5 relative flex items-center justify-end"
          style={{ 
            letterSpacing: "-0.025em",
            color: designTokens.colors.text.tertiary,
            ...designTokens.typography.bold.xs,
          }}
        >
          {content.header.url}
        </div>
        <div
          className="shrink-0 w-12 h-12 relative overflow-hidden"
          style={{ aspectRatio: "1" }}
        >
          <img
            className="h-[auto] absolute left-0 top-0 overflow-visible"
            src={assets.profile}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};
