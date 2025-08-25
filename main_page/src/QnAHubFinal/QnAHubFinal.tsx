import React from 'react';
import { designTokens } from '../tokens/designTokens';
import { content } from '../data/content';
import { recentAnswers, hotQuestions } from '../data/qnaData';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { QuestionInput } from '../components/QuestionInput';
import { AnswerCard } from '../components/AnswerCard';
import { QuestionCard } from '../components/QuestionCard';
import { SectionHeader } from '../components/SectionHeader';

export interface IQnAHubFinalProps {
  className?: string;
}

export const QnAHubFinal = ({
  className = '',
  ...props
}: IQnAHubFinalProps): JSX.Element => {
  const handleQuestionSubmit = (question: string) => {
    console.log('새 질문:', question);
    // TODO: 실제 질문 제출 로직 구현
  };

  const handleSeeMoreAnswers = () => {
    console.log('더 많은 답변 보기');
    // TODO: 더 많은 답변 보기 로직 구현
  };

  const handleSeeMoreQuestions = () => {
    console.log('더 많은 질문 보기');
    // TODO: 더 많은 질문 보기 로직 구현
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

      {/* Banner */}
      <Banner />

      {/* Main Content */}
      <div
        className="flex flex-col gap-[120px] items-center justify-start w-[1240px] absolute left-[50%] top-[434px]"
        style={{ translate: "-50%" }}
      >
        {/* Question Input */}
        <QuestionInput onSubmit={handleQuestionSubmit} />

        {/* Q&A Sections */}
        <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
          {/* Recent Answers Section */}
          <div className="flex flex-col gap-16 items-start justify-start flex-1 max-w-[544px] relative">
            <div className="flex flex-col gap-[18px] items-start justify-start self-stretch shrink-0 relative">
              <SectionHeader 
                title={content.sections.recentAnswers}
                onSeeMore={handleSeeMoreAnswers}
              />
              <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
                {recentAnswers.map((answer) => (
                  <AnswerCard key={answer.id} answer={answer} />
                ))}
              </div>
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
              <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
                {hotQuestions.map((question) => (
                  <QuestionCard key={question.id} question={question} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
