import React from 'react';
import { designTokens } from '../tokens/designTokens';
import { assets, content } from '../data/content';

interface QuestionInputProps {
  className?: string;
  onSubmit?: (question: string) => void;
  isLoading?: boolean;
  error?: string | null;
}

export const QuestionInput: React.FC<QuestionInputProps> = ({ 
  className = '', 
  onSubmit,
  isLoading = false,
  error = null
}) => {
  const [question, setQuestion] = React.useState('');

  const handleSubmit = () => {
    if (question.trim() && onSubmit && !isLoading) {
      onSubmit(question.trim());
      setQuestion('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSubmit();
    }
  };

  return (
    <div className={`flex flex-col gap-[18px] items-start justify-start shrink-0 w-[590px] relative ${className}`}>
      <div className="flex flex-row gap-4 items-center justify-start self-stretch shrink-0 relative">
        {/* Input 필드 */}
        <div 
          className="flex-1 rounded-[25px] border-solid border-2 pt-3 pr-7 pb-3 pl-7 flex flex-row gap-2.5 items-center justify-center relative"
          style={{
            backgroundColor: designTokens.colors.background.input,
            borderColor: designTokens.colors.border.accent,
          }}
        >
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={content.input.placeholder}
            className="bg-transparent outline-none w-full leading-6"
            style={{ 
              letterSpacing: "-0.025em",
              color: question ? designTokens.colors.text.primary : designTokens.colors.text.tertiary,
              ...designTokens.typography.sm,
            }}
          />
        </div>
        
        {/* 질문하기 버튼 */}
        <div className="relative shrink-0 w-[120px] h-[48px]">
          {/* 그라데이션 테두리 */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: designTokens.colors.gradient.border,
              padding: '2px',
            }}
          >
            <div 
              className="w-full h-full rounded-full"
              style={{
                background: designTokens.colors.gradient.button,
              }}
            />
          </div>
          
          {/* 버튼 콘텐츠 */}
          <button
            onClick={handleSubmit}
            disabled={isLoading || !question.trim()}
            className={`absolute inset-0 rounded-full flex flex-row gap-2.5 items-center justify-center transition-opacity border-none bg-transparent z-10 ${
              isLoading || !question.trim() 
                ? 'opacity-50 cursor-not-allowed' 
                : 'cursor-pointer hover:opacity-80'
            }`}
          >
            {isLoading ? (
              <div className="w-[30px] h-[30px] border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <img
                className="shrink-0 w-[30px] h-[30px] relative overflow-visible"
                style={{ aspectRatio: "1" }}
                src={assets.submit}
                alt="Submit"
              />
            )}
            <div
              className="text-left leading-5 relative flex items-center justify-start"
              style={{ 
                letterSpacing: "-0.025em",
                color: designTokens.colors.text.secondary,
                ...designTokens.typography.semibold.sm,
              }}
            >
              {isLoading ? '제출 중...' : content.input.buttonText}
            </div>
          </button>
        </div>
      </div>
      
      {/* 에러 메시지 */}
      {error && (
        <div className="w-full bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};
