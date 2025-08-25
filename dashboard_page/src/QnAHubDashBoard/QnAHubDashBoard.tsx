import React from 'react';
import { Header, Sidebar, QuestionGrid } from '../components';
import { appConfig } from '../config/app';
import { mockQuestions, filterOptions, navigationItems as initialNavItems } from '../data/mockData';
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
  const { questions, filters, handleFilterChange } = useQuestions({
    initialQuestions: mockQuestions,
    initialFilters: filterOptions,
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
      
      <QuestionGrid
        questions={questions}
        filters={filters}
        onFilterChange={handleFilterChange}
        onAnswer={handleAnswer}
      />
    </div>
  );
};
