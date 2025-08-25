import React from 'react';
import { Question } from '../types';
import { colors, typography, borderRadius, shadows, spacing, layout } from '../tokens';
import { Button } from './Button';
import { formatDaysLeft, formatLikeCount, createTextStyle } from '../utils';

interface QuestionCardProps {
  question: Question;
  onAnswer?: (questionId: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
}) => {
  const getDayColor = () => {
    if (question.isUrgent) {
      return {
        background: `linear-gradient(to left, rgba(32, 78, 251, 0.03), rgba(32, 78, 251, 0.03)), linear-gradient(to left, ${colors.brand.danger}, ${colors.brand.danger})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
    }
    return {
      color: colors.brand.primary,
    };
  };

  const cardStyles = {
    backgroundColor: colors.bg.secondary,
    borderRadius: borderRadius.lg,
    padding: spacing.card.padding,
    width: layout.card.width,
    height: layout.card.height,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.card.gap,
    boxShadow: shadows.card,
  };

  const titleStyles = {
    color: colors.text.secondary,
    fontFamily: typography.fonts.primary,
    lineHeight: typography.lineHeights.relaxed,
    letterSpacing: typography.letterSpacing.tight,
    flex: 1,
    display: 'flex',
    alignItems: 'start',
    ...createTextStyle(typography.sizes.lg, typography.weights.semibold),
  };

  const statsContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.xl,
  };

  const statsStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  };

  const likeStyles = {
    color: colors.text.secondary,
    fontFamily: typography.fonts.primary,
    letterSpacing: typography.letterSpacing.tight,
    ...createTextStyle(typography.sizes.lg, typography.weights.medium),
  };

  const dayStyles = {
    fontFamily: typography.fonts.primary,
    letterSpacing: typography.letterSpacing.tight,
    textAlign: 'right' as const,
    flex: 1,
    maxWidth: '100px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
    ...createTextStyle(typography.sizes.sm, typography.weights.semibold),
    ...getDayColor(),
  };

  return (
    <div style={cardStyles}>
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        gap: spacing.xl 
      }}>
        <div style={titleStyles}>
          {question.title}
        </div>
        <div style={statsContainerStyles}>
          <div style={statsStyles}>
            <div style={likeStyles}>
              {formatLikeCount(question.likeCount)}
            </div>
            <div style={dayStyles}>
              {formatDaysLeft(question.daysLeft)}
            </div>
          </div>
          <Button 
            variant="secondary" 
            size="sm"
            onClick={() => onAnswer?.(question.id)}
          >
            답변하기
          </Button>
        </div>
      </div>
    </div>
  );
};
