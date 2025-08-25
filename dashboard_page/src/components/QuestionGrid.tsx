import React from 'react';
import { Question, FilterOption } from '../types';
import { colors, typography, spacing, layout } from '../tokens';
import { Button } from './Button';
import { QuestionCard } from './QuestionCard';
import { createTextStyle } from '../utils';

interface QuestionGridProps {
  questions: Question[];
  filters: FilterOption[];
  onFilterChange?: (filterId: string) => void;
  onAnswer?: (questionId: string) => void;
}

export const QuestionGrid: React.FC<QuestionGridProps> = ({
  questions,
  filters,
  onFilterChange,
  onAnswer,
}) => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.lg,
    alignItems: 'start',
    justifyContent: 'start',
    position: 'absolute' as const,
    left: layout.sidebar.width,
    top: '140px',
  };

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '350px',
  };

  const titleSectionStyles = {
    padding: '0 ' + spacing.sm,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  };

  const titleStyles = {
    color: colors.text.secondary,
    fontFamily: typography.fonts.primary,
    lineHeight: typography.lineHeights.normal,
    letterSpacing: typography.letterSpacing.tight,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
    ...createTextStyle(typography.sizes['2xl'], typography.weights.semibold),
  };

  const filterSectionStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: spacing.card.gap,
  };

  const gridStyles = {
    display: 'grid',
    gap: spacing.md,
    gridTemplateColumns: `repeat(${layout.grid.columns}, ${layout.card.width})`,
    gridTemplateRows: `repeat(3, ${layout.card.height})`, // 3행으로 변경
  };

  const getGridPosition = (index: number) => {
    // 4열 3행 그리드에서 순서대로 배치
    const row = Math.floor(index / layout.grid.columns) + 1;
    const col = (index % layout.grid.columns) + 1;
    
    return {
      gridColumn: `${col} / span 1`,
      gridRow: `${row} / span 1`,
    };
  };

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <div style={titleSectionStyles}>
          <div style={titleStyles}>
            질문 리스트
          </div>
        </div>
        <div style={filterSectionStyles}>
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant="filter"
              size="sm"
              active={filter.active}
              onClick={() => onFilterChange?.(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>
      
      <div style={gridStyles}>
        {questions.map((question, index) => (
          <div
            key={question.id}
            style={getGridPosition(index)}
          >
            <QuestionCard
              question={question}
              onAnswer={onAnswer}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
