import { main, base } from '../../styles/tokens';

interface TrendingQuestionCardProps {
  title: string;
  hotCount: number;
  tags: string[];
  status: 'new' | 'answered';
  timeAgo?: string;
  isHighlighted?: boolean;
  className?: string;
}

export const TrendingQuestionCard = ({ 
  title, 
  hotCount, 
  tags, 
  status,
  timeAgo,
  isHighlighted = false,
  className = ""
}: TrendingQuestionCardProps) => {
  if (isHighlighted) {
    return (
      <div
        className={`flex flex-col items-start justify-start self-stretch shrink-0 relative ${className}`}
        style={{
          background: main.gradients.hotQuestionBorder,
          borderRadius: main.borderRadius.card,
          padding: main.spacing.cardBorderWidth, // 2px
        }}
      >
        <div
          className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
          style={{
            backgroundColor: base.colors.neutral.gray800,
            borderRadius: main.borderRadius.card,
            padding: `${main.spacing.cardPadding} ${main.spacing.cardPadding} ${main.spacing['2xl']} ${main.spacing.cardPadding}`,
            gap: main.spacing.cardInnerGap, // 10px
          }}
        >
          <div 
            className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
            style={{ gap: main.spacing.cardGap }} // gap-6 -> gap-3 (12px) 원본에 맞춤
          >
            {/* 질문 제목 */}
            <div 
              className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
              style={{ gap: main.spacing.tagGap }} // gap-5 (20px)
            >
              <div
                className="text-left relative self-stretch flex items-end justify-start"
                style={{
                  color: base.colors.neutral.gray100,
                  fontSize: main.typography.fontSize.postTitle,
                  lineHeight: main.typography.lineHeight.postTitle,
                  letterSpacing: base.typography.letterSpacing.tight,
                  fontFamily: base.typography.fontFamily.primary,
                  fontWeight: main.typography.getDynamicWeight.getSemiBold(18), // 18px SemiBold
                }}
              >
                {title}
              </div>
            </div>
            
            {/* 하단 정보 영역 */}
            <div 
              className="flex flex-row items-start justify-between self-stretch shrink-0 relative"
              style={{ height: main.sizes.cardInfoHeight }} // 20px
            >
              <div 
                className="flex flex-row items-center justify-start flex-1 relative"
                style={{ gap: main.spacing.tagGap }} // gap-5 (20px)
              >
                {/* Hot 카운트 */}
                <div
                  className="text-left relative"
                  style={{
                    color: base.colors.neutral.gray100,
                    fontSize: main.typography.fontSize.postTitle,
                    lineHeight: main.typography.lineHeight.body,
                    letterSpacing: base.typography.letterSpacing.tight,
                    fontFamily: base.typography.fontFamily.primary,
                    fontWeight: main.typography.getDynamicWeight.getMedium(18), // 18px Medium
                  }}
                >
                  🔥 {hotCount}
                </div>
                
                {/* 태그들 */}
                <div
                  className="text-left relative flex-1 h-5 overflow-hidden"
                  style={{
                    color: base.colors.neutral.gray400,
                    fontSize: main.typography.fontSize.meta,
                    lineHeight: main.typography.lineHeight.body,
                    letterSpacing: base.typography.letterSpacing.tight,
                    fontFamily: base.typography.fontFamily.primary,
                    fontWeight: main.typography.getDynamicWeight.getMedium(12), // 12px Medium
                    textOverflow: "ellipsis",
                  }}
                >
                  {tags.map(tag => `#${tag}`).join(' ')}
                </div>
              </div>
              
              {/* 상태 및 시간 */}
              <div
                className="text-right relative flex-1 overflow-hidden"
                style={{
                  maxWidth: main.sizes.statusMaxWidth, // 100px
                  color: status === 'new' ? base.colors.primary.blue : base.colors.neutral.gray400,
                  fontSize: main.typography.fontSize.meta,
                  lineHeight: main.typography.lineHeight.body,
                  letterSpacing: base.typography.letterSpacing.tight,
                  fontFamily: base.typography.fontFamily.primary,
                  fontWeight: status === 'new' 
                    ? main.typography.getDynamicWeight.getSemiBold(12) // 12px SemiBold
                    : main.typography.getDynamicWeight.getMedium(12), // 12px Medium
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {status === 'new' ? '새 질문' : timeAgo}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-start justify-start self-stretch shrink-0 relative ${className}`}
      style={{
        backgroundColor: base.colors.neutral.gray800,
        borderRadius: main.borderRadius.card,
        padding: `${main.spacing.cardPadding} ${main.spacing.cardPadding} ${main.spacing['2xl']} ${main.spacing.cardPadding}`,
        gap: main.spacing.cardInnerGap, // 10px
      }}
    >
      <div 
        className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
        style={{ gap: main.spacing.cardGap }} // gap-6 -> gap-3 (12px) 원본에 맞춤
      >
        {/* 질문 제목 */}
        <div 
          className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
          style={{ gap: main.spacing.tagGap }} // gap-5 (20px)
        >
          <div
            className="text-left relative self-stretch flex items-end justify-start"
            style={{
              color: base.colors.neutral.gray100,
              fontSize: main.typography.fontSize.postTitle,
              lineHeight: main.typography.lineHeight.postTitle,
              letterSpacing: base.typography.letterSpacing.tight,
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: main.typography.getDynamicWeight.getSemiBold(18), // 18px SemiBold
            }}
          >
            {title}
          </div>
        </div>
        
        {/* 하단 정보 영역 */}
        <div 
          className="flex flex-row items-start justify-between self-stretch shrink-0 relative"
          style={{ height: main.sizes.cardInfoHeight }} // 20px
        >
          <div 
            className="flex flex-row items-center justify-start flex-1 relative"
            style={{ gap: main.spacing.tagGap }} // gap-5 (20px)
          >
            {/* Hot 카운트 */}
            <div
              className="text-left relative"
              style={{
                color: base.colors.neutral.gray100,
                fontSize: main.typography.fontSize.postTitle,
                lineHeight: main.typography.lineHeight.body,
                letterSpacing: base.typography.letterSpacing.tight,
                fontFamily: base.typography.fontFamily.primary,
                fontWeight: main.typography.getDynamicWeight.getMedium(18), // 18px Medium
              }}
            >
              🔥 {hotCount}
            </div>
            
            {/* 태그들 */}
            <div
              className="text-left relative flex-1 overflow-hidden"
              style={{
                height: main.sizes.cardInfoHeight, // 20px
                color: base.colors.neutral.gray400,
                fontSize: main.typography.fontSize.meta,
                lineHeight: main.typography.lineHeight.body,
                letterSpacing: base.typography.letterSpacing.tight,
                fontFamily: base.typography.fontFamily.primary,
                fontWeight: main.typography.getDynamicWeight.getMedium(12), // 12px Medium
                textOverflow: "ellipsis",
              }}
            >
              {tags.map(tag => `#${tag}`).join(' ')}
            </div>
          </div>
          
          {/* 상태 및 시간 */}
          <div
            className="text-right relative flex-1 overflow-hidden"
            style={{
              maxWidth: main.sizes.statusMaxWidth, // 100px
              color: status === 'new' ? base.colors.primary.blue : base.colors.neutral.gray400,
              fontSize: main.typography.fontSize.meta,
              lineHeight: main.typography.lineHeight.body,
              letterSpacing: base.typography.letterSpacing.tight,
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: status === 'new' 
                ? main.typography.getDynamicWeight.getSemiBold(12) // 12px SemiBold
                : main.typography.getDynamicWeight.getMedium(12), // 12px Medium
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {status === 'new' ? '새 질문' : timeAgo}
          </div>
        </div>
      </div>
    </div>
  );
};
