import React from 'react';
import { designTokens } from '../tokens/designTokens';
import { Question } from '../data/qnaData';

interface QuestionCardProps {
  question: Question;
  className?: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, className = '' }) => {
  if (question.isNew) {
    // 새 질문인 경우 그라데이션 테두리 적용
    return (
      <div className={`relative self-stretch ${className}`}>
        {/* 그라데이션 테두리 배경 */}
        <div 
          className="absolute inset-0 rounded-[10px]"
          style={{
            background: designTokens.colors.gradient.hotBorder,
            padding: '2px',
          }}
        >
          <div 
            className="w-full h-full rounded-[8px]"
            style={{
              backgroundColor: designTokens.colors.background.secondary,
            }}
          />
        </div>
        
        {/* 콘텐츠 */}
        <div className="relative z-10 pt-6 pr-6 pb-9 pl-6 flex flex-col gap-6 items-start justify-start">
          <div className="flex flex-col gap-5 items-start justify-start self-stretch relative">
            <div
              className="text-left leading-7 relative self-stretch flex items-end justify-start"
              style={{ 
                letterSpacing: "-0.025em",
                color: designTokens.colors.text.secondary,
                ...designTokens.typography.semibold.lg,
              }}
            >
              {question.question}
            </div>
          </div>
          <div className="flex flex-row items-start justify-between self-stretch h-5 relative">
            <div className="flex flex-row gap-5 items-center justify-start flex-1 relative">
              <div
                className="text-left leading-5 relative"
                style={{ 
                  letterSpacing: "-0.025em",
                  color: designTokens.colors.text.secondary,
                  ...designTokens.typography.medium.lg,
                }}
              >
                🔥 {question.fires}
              </div>
            </div>
            <div
              className="text-right leading-5 relative flex-1 max-w-[100px] overflow-hidden"
              style={{
                letterSpacing: "-0.025em",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                color: designTokens.colors.text.brand,
                ...designTokens.typography.semibold.xs,
              }}
            >
              {question.timeAgo}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 일반 질문인 경우
  return (
    <div 
      className={`rounded-[10px] pt-6 pr-6 pb-9 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative ${className}`}
      style={{
        backgroundColor: designTokens.colors.background.secondary,
      }}
    >
      <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
        <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
          <div
            className="text-left leading-7 relative self-stretch flex items-end justify-start"
            style={{ 
              letterSpacing: "-0.025em",
              color: designTokens.colors.text.secondary,
              ...designTokens.typography.semibold.lg,
            }}
          >
            {question.question}
          </div>
        </div>
        <div className="flex flex-row items-start justify-between self-stretch shrink-0 h-5 relative">
          <div className="flex flex-row gap-5 items-center justify-start flex-1 relative">
            <div
              className="text-left leading-5 relative"
              style={{ 
                letterSpacing: "-0.025em",
                color: designTokens.colors.text.secondary,
                ...designTokens.typography.medium.lg,
              }}
            >
              🔥 {question.fires}
            </div>
          </div>
          <div
            className="text-right leading-5 relative flex-1 max-w-[100px] overflow-hidden"
            style={{
              letterSpacing: "-0.025em",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: designTokens.colors.text.tertiary,
              ...designTokens.typography.medium.xs,
            }}
          >
            {question.timeAgo}
          </div>
        </div>
      </div>
    </div>
  );
};
