import React from 'react';
import { Header, Sidebar, QuestionGrid } from '../components';
import { appConfig } from '../config/app';
import { filterOptions, navigationItems as initialNavItems } from '../data/mockData';
import { colors, layout, typography } from '../tokens';
import { useQuestions, useNavigation } from '../hooks';
import { createTextStyle } from '../utils';

export interface IQnAHubDashBoardProps {
  className?: string;
}

export const QnAHubDashBoard = ({
  className,
  ...props
}: IQnAHubDashBoardProps): JSX.Element => {
  const { questions, filters, handleFilterChange, loading, error, refetch } = useQuestions({
    initialFilters: filterOptions,
    skip: 0,
    limit: 10,
  });

  const { navigationItems, handleNavigate } = useNavigation({
    initialItems: initialNavItems,
  });

  const handleAnswer = (questionId: string) => {
    // TODO: Implement answer functionality
    console.log('Answer question:', questionId);
  };

  const containerStyles = {
    backgroundColor: colors.bg.primary,
    height: layout.container.height,
    position: 'relative' as const,
    overflow: 'hidden',
  };

  const pageHeaderStyles = {
    color: colors.text.primary,
    fontFamily: typography.fonts.primary,
    lineHeight: typography.lineHeights.relaxed,
    letterSpacing: typography.letterSpacing.tight,
    position: 'absolute' as const,
    left: '18rem',
    top: layout.header.height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    ...createTextStyle(typography.sizes['3xl'], typography.weights.medium),
  };

  const errorStyles = {
    color: colors.brand.danger,
    fontFamily: typography.fonts.primary,
    padding: '2rem',
    textAlign: 'center' as const,
    position: 'absolute' as const,
    left: '18rem',
    top: '50%',
    transform: 'translateY(-50%)',
    ...createTextStyle(typography.sizes.lg, typography.weights.medium),
  };

  const loadingStyles = {
    color: colors.text.secondary,
    fontFamily: typography.fonts.primary,
    padding: '2rem',
    textAlign: 'center' as const,
    position: 'absolute' as const,
    left: '18rem',
    top: '50%',
    transform: 'translateY(-50%)',
    ...createTextStyle(typography.sizes.lg, typography.weights.medium),
  };

  return (
    <div style={containerStyles} className={className}>
      <Header config={appConfig} />
      
      <div style={pageHeaderStyles}>
        홈
      </div>
      
      <Sidebar 
        navigationItems={navigationItems}
        onNavigate={handleNavigate}
      />
      
      {loading && (
        <div style={loadingStyles}>
          질문을 불러오는 중...
        </div>
      )}
      
      {error && (
        <div style={errorStyles}>
          데이터를 불러오는 중 오류가 발생했습니다: {error}
          <button 
            onClick={refetch}
            style={{
              display: 'block',
              margin: '1rem auto',
              padding: '0.5rem 1rem',
              backgroundColor: colors.brand.primary,
              color: colors.text.primary,
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer',
            }}
          >
            다시 시도
          </button>
        </div>
      )}
      
      {!loading && !error && (
        <QuestionGrid
          questions={questions}
          filters={filters}
          onFilterChange={handleFilterChange}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};
