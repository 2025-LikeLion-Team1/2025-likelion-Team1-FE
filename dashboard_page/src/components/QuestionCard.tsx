import React from 'react';
import { Question } from '../types';
import { colors, typography, borderRadius, shadows, spacing, layout } from '../tokens';
import { Button } from './Button';
import { formatDaysLeft, formatLikeCount, createTextStyle, isUrgent, formatStatus, calculateDaysLeft } from '../utils';

interface QuestionCardProps {
  question: Question;
  onAnswer?: (questionId: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
}) => {
  const questionIsUrgent = isUrgent(question.created_at);
  const daysLeft = calculateDaysLeft(question.created_at);
  
  const getDayColor = () => {
    if (daysLeft < 0) {
      // 마감일이 지난 경우
      return {
        color: colors.brand.danger,
      };
    } else if (daysLeft <= 1) {
      // 1일 이하 남은 경우 (urgent)
      return {
        background: `linear-gradient(to left, rgba(32, 78, 251, 0.03), rgba(32, 78, 251, 0.03)), linear-gradient(to left, ${colors.brand.danger}, ${colors.brand.danger})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
    } else if (daysLeft <= 3) {
      // 3일 이하 남은 경우
      return {
        color: colors.brand.warning,
      };
    }
    // 일반적인 경우
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

  const statusStyles = {
    color: question.status === 'answered' ? colors.brand.success : colors.brand.warning,
    fontFamily: typography.fonts.primary,
    letterSpacing: typography.letterSpacing.tight,
    ...createTextStyle(typography.sizes.xs, typography.weights.medium),
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
        <div>
          <div style={statusStyles}>
            {formatStatus(question.status)}
          </div>
          <div style={titleStyles}>
            {question.title}
          </div>
        </div>
        <div style={statsContainerStyles}>
          <div style={statsStyles}>
            <div style={likeStyles}>
              {formatLikeCount(question.total_votes)}
            </div>
            <div style={dayStyles}>
              {formatDaysLeft(question.created_at)}
            </div>
          </div>
          <Button 
            variant="secondary" 
            size="sm"
            onClick={() => onAnswer?.(question._id)}
          >
            답변하기
          </Button>
        </div>
      </div>
    </div>
  );
};
