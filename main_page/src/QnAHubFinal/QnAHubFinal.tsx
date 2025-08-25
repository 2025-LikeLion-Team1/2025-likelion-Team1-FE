import React, { useState } from 'react';
import { designTokens } from '../tokens/designTokens';
import { content } from '../data/content';
import { recentAnswers, hotQuestions } from '../data/qnaData';
import { useRecentAnswers, useHotQuestions, useSubmitQuestion, useLike } from '../hooks/useApi';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { QuestionInput } from '../components/QuestionInput';
import { AnswerCard } from '../components/AnswerCard';
import { QuestionCard } from '../components/QuestionCard';
import { SectionHeader } from '../components/SectionHeader';
import { LoadingSection, ErrorCard } from '../components';
import { SimilarQuestionModal } from '../components/SimilarQuestionModal';

export interface IQnAHubFinalProps {
  className?: string;
}

export const QnAHubFinal = ({
  className = '',
  ...props
}: IQnAHubFinalProps): JSX.Element => {
  const [useApiData, setUseApiData] = useState(false); // API 데이터 사용 여부를 토글할 수 있도록
  
  // API 훅들
  const { 
    answers: apiAnswers, 
    loading: answersLoading, 
    error: answersError,
    refetch: refetchAnswers 
  } = useRecentAnswers(0, 3);
  
  const { 
    questions: apiQuestions, 
    loading: questionsLoading, 
    error: questionsError,
    refetch: refetchQuestions 
  } = useHotQuestions(0, 4);
  
  const { 
    submitQuestion, 
    submitWithForce,
    loading: submitLoading, 
    error: submitError,
    similarQuestion,
    showSimilarQuestion,
    dismissSimilarQuestion
  } = useSubmitQuestion();

  const { 
    likeQuestion, 
    likeAnswer, 
    isLoading: isLikeLoading, 
    error: likeError 
  } = useLike();

  // 좋아요 성공 후 데이터 새로고침을 위한 핸들러
  const handleQuestionLike = async (questionId: string) => {
    const success = await likeQuestion(questionId);
    if (success && useApiData) {
      console.log('질문 좋아요 성공 - 데이터 새로고침');
      refetchQuestions(); // 질문 데이터 새로고침
    }
  };

  const handleAnswerLike = async (answerId: string) => {
    const success = await likeAnswer(answerId);
    if (success && useApiData) {
      console.log('답변 좋아요 성공 - 데이터 새로고침');
      refetchAnswers(); // 답변 데이터 새로고침
    }
  };

  // 사용할 데이터 결정
  const displayAnswers = useApiData ? apiAnswers : recentAnswers;
  const displayQuestions = useApiData ? apiQuestions : hotQuestions;

  const handleQuestionSubmit = async (question: string) => {
    console.log('새 질문:', question);
    
    if (useApiData) {
      const result = await submitQuestion(question);
      if (result.success) {
        console.log('질문이 성공적으로 제출되었습니다:', result.message);
        // 질문 목록 새로고침
        refetchQuestions();
      } else if (result.status === "similar_question_found") {
        console.log('유사한 질문 발견:', result.message);
        // SimilarQuestionModal이 자동으로 표시됨
      } else if (result.status === "invalid_question") {
        console.error('부적절한 질문:', result.message);
        // 에러는 QuestionInput 컴포넌트에 전달되어 표시됨
      }
    } else {
      // TODO: 실제 질문 제출 로직 구현 (로컬 모드)
    }
  };

  const handleSimilarQuestionSubmit = async () => {
    if (similarQuestion) {
      const result = await submitWithForce(similarQuestion.title);
      if (result.success) {
        console.log('강제 제출 성공:', result.message);
        dismissSimilarQuestion();
        refetchQuestions();
      }
    }
  };

  const handleSeeMoreAnswers = () => {
    console.log('더 많은 답변 보기');
    if (useApiData) {
      // TODO: 페이지네이션 또는 더 많은 데이터 로드
    }
    // TODO: 더 많은 답변 보기 로직 구현
  };

  const handleSeeMoreQuestions = () => {
    console.log('더 많은 질문 보기');
    if (useApiData) {
      // TODO: 페이지네이션 또는 더 많은 데이터 로드
    }
    // TODO: 더 많은 질문 보기 로직 구현
  };

  const toggleApiMode = () => {
    setUseApiData(!useApiData);
  };

  return (
    <div
      className={`h-[1800px] relative overflow-hidden ${className}`}
      style={{
        backgroundColor: designTokens.colors.background.primary,
      }}
    >
      {/* Header */}
      <Header />

      {/* API 모드 토글 버튼 (개발용) */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={toggleApiMode}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            useApiData 
              ? 'bg-green-500 text-white hover:bg-green-600' 
              : 'bg-gray-500 text-white hover:bg-gray-600'
          }`}
        >
          {useApiData ? 'API 모드' : '로컬 모드'}
        </button>
      </div>

      {/* 로딩/에러 상태 표시 */}
      {useApiData && (answersLoading || questionsLoading) && (
        <div className="absolute top-20 right-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-sm">
          데이터 로딩 중...
        </div>
      )}

      {useApiData && (answersError || questionsError) && (
        <div className="absolute top-20 right-4 bg-red-100 text-red-800 px-4 py-2 rounded-md text-sm">
          {answersError || questionsError}
        </div>
      )}

      {/* Banner */}
      <Banner />

      {/* Main Content */}
      <div
        className="flex flex-col gap-[120px] items-center justify-start w-[1240px] absolute left-[50%] top-[434px]"
        style={{ translate: "-50%" }}
      >
        {/* Question Input */}
        <QuestionInput 
          onSubmit={handleQuestionSubmit}
          isLoading={submitLoading}
          error={submitError}
        />

        {/* Q&A Sections */}
        <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
          {/* Recent Answers Section */}
          <div className="flex flex-col gap-16 items-start justify-start flex-1 max-w-[544px] relative">
            <div className="flex flex-col gap-[18px] items-start justify-start self-stretch shrink-0 relative">
              <SectionHeader 
                title={content.sections.recentAnswers}
                onSeeMore={handleSeeMoreAnswers}
              />
              
              {useApiData && answersLoading ? (
                <LoadingSection title="" type="answer" count={3} />
              ) : useApiData && answersError ? (
                <ErrorCard message={answersError} onRetry={refetchAnswers} />
              ) : (
                <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
                  {displayAnswers.map((answer) => (
                    <AnswerCard 
                      key={answer.id} 
                      answer={answer}
                      onLike={handleAnswerLike}
                      isLiking={isLikeLoading(answer.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Hot Questions Section */}
          <div className="flex flex-col gap-16 items-start justify-start flex-1 max-w-[544px] relative">
            <div className="flex flex-col gap-[18px] items-start justify-start self-stretch shrink-0 relative">
              <SectionHeader 
                title={content.sections.hotQuestions}
                onSeeMore={handleSeeMoreQuestions}
                arrowIcon="frame-351.svg"
              />
              
              {useApiData && questionsLoading ? (
                <LoadingSection title="" type="question" count={4} />
              ) : useApiData && questionsError ? (
                <ErrorCard message={questionsError} onRetry={refetchQuestions} />
              ) : (
                <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
                  {displayQuestions.map((question) => (
                    <QuestionCard 
                      key={question.id} 
                      question={question}
                      onLike={handleQuestionLike}
                      isLiking={isLikeLoading(question.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 유사 질문 모달 */}
      <SimilarQuestionModal
        isOpen={showSimilarQuestion}
        similarQuestion={similarQuestion}
        message="매우 유사한 질문이 이미 존재합니다. 기존 질문에 공감하시거나, 새로운 질문으로 등록해주세요."
        onDismiss={dismissSimilarQuestion}
        onSubmitAnyway={handleSimilarQuestionSubmit}
        isLoading={submitLoading}
      />
    </div>
  );
};
