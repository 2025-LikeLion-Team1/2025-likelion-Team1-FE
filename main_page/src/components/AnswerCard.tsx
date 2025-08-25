import React from 'react';
import { designTokens } from '../tokens/designTokens';
import { Answer } from '../data/qnaData';

interface AnswerCardProps {
  answer: Answer;
  className?: string;
  onLike?: (answerId: string) => void;
  isLiking?: boolean;
}

export const AnswerCard: React.FC<AnswerCardProps> = ({ 
  answer, 
  className = '', 
  onLike,
  isLiking = false 
}) => {
  const handleLike = () => {
    if (onLike && !isLiking) {
      onLike(answer.id);
    }
  };
  return (
    <div 
      className={`rounded-[10px] pt-6 pr-6 pb-9 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative ${className}`}
      style={{
        backgroundColor: designTokens.colors.background.secondary,
      }}
    >
      <div className="flex flex-col gap-12 items-start justify-start self-stretch shrink-0 relative">
        <div className="flex flex-col gap-9 items-start justify-start self-stretch shrink-0 relative">
          <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
            <div
              className="text-left leading-7 relative self-stretch flex items-end justify-start"
              style={{ 
                letterSpacing: "-0.025em",
                color: designTokens.colors.text.secondary,
                ...designTokens.typography.semibold.lg,
              }}
            >
              {answer.question}
            </div>
          </div>
          <div
            className="text-left leading-5 relative self-stretch max-h-[60px] overflow-hidden"
            style={{
              letterSpacing: "-0.025em",
              textOverflow: "ellipsis",
              color: designTokens.colors.text.secondary,
              ...designTokens.typography.medium.sm,
            }}
          >
            {answer.answer}
          </div>
        </div>
        <div className="flex flex-row items-start justify-between self-stretch shrink-0 h-5 relative">
          <button
            onClick={handleLike}
            disabled={isLiking}
            className={`text-left leading-5 relative transition-colors ${
              isLiking 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:opacity-80 cursor-pointer'
            }`}
            style={{ 
              letterSpacing: "-0.025em",
              color: designTokens.colors.text.secondary,
              ...designTokens.typography.medium.lg,
            }}
          >
            👍 {answer.likes}
          </button>
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
            {answer.timeAgo}
          </div>
        </div>
      </div>
    </div>
  );
};
