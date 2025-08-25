import React from 'react';
import { designTokens } from '../tokens/designTokens';
import { content, assets } from '../data/content';

interface BannerProps {
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({ className = '' }) => {
  return (
    <div 
      className={`rounded-[20px] border-solid border-2 w-[1040px] h-80 absolute left-[calc(50%_-_521px)] top-[108px] overflow-hidden ${className}`}
      style={{
        backgroundColor: designTokens.colors.background.primary,
        borderColor: designTokens.colors.border.primary,
      }}
    >
      {/* 배너 이미지 */}
      <img
        src={assets.banner}
        alt="QnAHub Banner"
        className="w-full h-full object-cover rounded-[18px]"
      />
      
    </div>
  );
};
