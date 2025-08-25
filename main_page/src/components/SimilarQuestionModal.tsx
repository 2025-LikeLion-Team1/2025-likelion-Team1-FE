import React from 'react';
import { SimilarQuestion } from '../services/api';
import { designTokens } from '../tokens/designTokens';

interface SimilarQuestionModalProps {
  isOpen: boolean;
  similarQuestion: SimilarQuestion | null;
  message: string;
  onDismiss: () => void;
  onSubmitAnyway: () => void;
  isLoading: boolean;
}

export const SimilarQuestionModal: React.FC<SimilarQuestionModalProps> = ({
  isOpen,
  similarQuestion,
  message,
  onDismiss,
  onSubmitAnyway,
  isLoading
}) => {
  if (!isOpen || !similarQuestion) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            유사한 질문 발견
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {message}
          </p>
        </div>

        <div 
          className="border border-gray-200 rounded-lg p-4 mb-4"
          style={{ backgroundColor: designTokens.colors.background.input }}
        >
          <div className="mb-2">
            <span className="text-xs text-gray-500">기존 질문</span>
          </div>
          <h4 className="font-medium text-gray-800 mb-2">
            {similarQuestion.title}
          </h4>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>좋아요 {similarQuestion.total_votes}개</span>
            <span>
              상태: {similarQuestion.status === 'answered' ? '답변됨' : '미답변'}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onDismiss}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            취소
          </button>
          <button
            onClick={onSubmitAnyway}
            disabled={isLoading}
            className={`flex-1 px-4 py-2 rounded-md text-white transition-colors ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isLoading ? '제출 중...' : '그래도 등록'}
          </button>
        </div>
      </div>
    </div>
  );
};
