import { main, base } from '../../styles/tokens';

interface AnswerCardProps {
  questionTitle: string;
  answerPreview: string;
  tags: string;
  timeAgo: string;
}

export const AnswerCard = ({ questionTitle, answerPreview, tags, timeAgo }: AnswerCardProps) => {
  return (
    <div 
      className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
      style={{
        backgroundColor: main.colors.neutral.gray800,
        borderRadius: main.borderRadius.card,
        padding: main.spacing.cardPadding,
      }}
    >
      <div 
        className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
        style={{ gap: main.spacing.xl }}
      >
        <div 
          className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
          style={{ gap: main.spacing.lg }}
        >
          <div 
            className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
            style={{ gap: main.spacing.md }}
          >
            <div
              className="text-left font-semibold relative self-stretch flex items-end justify-start"
              style={{ 
                color: main.colors.neutral.gray100,
                fontSize: main.typography.fontSize.postTitle,
                lineHeight: main.typography.lineHeight.postTitle,
                letterSpacing: base.typography.letterSpacing.tight,
                fontFamily: base.typography.fontFamily.primary,
                fontWeight: main.typography.getDynamicWeight.getSemiBold(18), // 18px SemiBold
              }}
            >
              {questionTitle}
            </div>
          </div>
          <div
            className="text-left font-medium relative self-stretch max-h-[60px] overflow-hidden"
            style={{
              color: main.colors.neutral.gray100,
              fontSize: main.typography.fontSize.body,
              lineHeight: main.typography.lineHeight.body,
              letterSpacing: base.typography.letterSpacing.tight,
              textOverflow: "ellipsis",
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: main.typography.getDynamicWeight.getMedium(14), // 14px Medium
            }}
          >
            {answerPreview}
          </div>
        </div>
        <div 
          className="flex flex-row items-start justify-between self-stretch shrink-0 relative"
          style={{ height: main.typography.lineHeight.body }}
        >
          <div
            className="text-left font-medium relative flex-1 overflow-hidden"
            style={{
              color: main.colors.neutral.gray400,
              fontSize: main.typography.fontSize.meta,
              lineHeight: main.typography.lineHeight.meta,
              letterSpacing: base.typography.letterSpacing.tight,
              textOverflow: "ellipsis",
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: main.typography.getDynamicWeight.getMedium(12), // 12px Medium
              height: main.typography.lineHeight.body,
            }}
          >
            {tags}
          </div>
          <div
            className="text-right font-medium relative flex-1 flex items-center justify-end overflow-hidden"
            style={{
              color: main.colors.neutral.gray400,
              fontSize: main.typography.fontSize.meta,
              lineHeight: main.typography.lineHeight.meta,
              letterSpacing: base.typography.letterSpacing.tight,
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: main.typography.getDynamicWeight.getMedium(12), // 12px Medium
              maxWidth: '100px',
            }}
          >
            {timeAgo}
          </div>
        </div>
      </div>
    </div>
  );
};
