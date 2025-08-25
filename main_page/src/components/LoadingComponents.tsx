import React from 'react';

export interface LoadingCardProps {
  type: 'answer' | 'question';
}

export const LoadingCard: React.FC<LoadingCardProps> = ({ type }) => {
  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-4 animate-pulse">
      <div className="space-y-3">
        {/* 제목 스켈레톤 */}
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        
        {type === 'answer' && (
          <>
            {/* 답변 내용 스켈레톤 */}
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              <div className="h-3 bg-gray-200 rounded w-4/6"></div>
            </div>
            
            {/* 좋아요와 시간 스켈레톤 */}
            <div className="flex justify-between items-center">
              <div className="h-3 bg-gray-200 rounded w-16"></div>
              <div className="h-3 bg-gray-200 rounded w-20"></div>
            </div>
          </>
        )}
        
        {type === 'question' && (
          <>
            {/* 질문 하단 정보 스켈레톤 */}
            <div className="flex justify-between items-center">
              <div className="h-3 bg-gray-200 rounded w-12"></div>
              <div className="h-3 bg-gray-200 rounded w-24"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export interface LoadingSectionProps {
  title: string;
  type: 'answer' | 'question';
  count: number;
}

export const LoadingSection: React.FC<LoadingSectionProps> = ({ title, type, count }) => {
  return (
    <div className="flex flex-col gap-4 items-start justify-start flex-1 relative">
      <div className="flex flex-row items-center justify-between self-stretch">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
      </div>
      
      <div className="flex flex-col gap-3 items-start justify-start self-stretch">
        {Array.from({ length: count }, (_, index) => (
          <LoadingCard key={index} type={type} />
        ))}
      </div>
    </div>
  );
};
