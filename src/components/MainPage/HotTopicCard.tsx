import { main, base } from '../../styles/tokens';

interface HotTopicCardProps {
  id: number;
  username: string;
  title: string;
  content: string;
  tags: string[];
  likeCount: number;
  commentCount: number;
  timeAgo: string;
  className?: string;
}

export const HotTopicCard = ({ 
  id,
  username, 
  title, 
  content, 
  tags,
  likeCount,
  commentCount,
  timeAgo,
  className = ""
}: HotTopicCardProps) => {
  return (
    <div 
      className={`rounded-[10px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative ${className}`}
      style={{ backgroundColor: base.colors.neutral.gray800 }} // #2d2d32
    >
      {/* 상단 컨텐츠 영역 */}
      <div 
        className="rounded-[10px] border-solid border-[6px] flex flex-col items-start justify-start self-stretch shrink-0 relative"
        style={{ 
          backgroundColor: base.colors.neutral.gray900, // #18181b
          borderColor: base.colors.neutral.gray800, // #2d2d32
          padding: `16px ${main.spacing.cardPadding} 16px ${main.spacing.cardPadding}`, // pt-4 pr-6 pb-4 pl-6
          gap: main.spacing.tagGap, // gap-5 (20px)
        }}
      >
        <div 
          className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
          style={{ gap: main.spacing.tagGap }} // gap-5 (20px)
        >
          <div 
            className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
            style={{ gap: main.spacing.innerCardGap }} // gap-1.5 (6px)
          >
            {/* 사용자명 */}
            <div 
              className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
              style={{ gap: main.spacing.tagGap }} // gap-5 (20px)
            >
              <div
                className="text-left relative self-stretch flex items-end justify-start"
                style={{ 
                  color: base.colors.neutral.gray400, // #b0b0b0
                  fontSize: main.typography.fontSize.meta, // 14px
                  lineHeight: main.typography.lineHeight.body, // 20px
                  letterSpacing: base.typography.letterSpacing.tight,
                  fontFamily: base.typography.fontFamily.primary,
                  fontWeight: main.typography.getDynamicWeight.meta(), // semibold for 14px
                }}
              >
                @{username}
              </div>
            </div>
            {/* 제목 */}
            <div 
              className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
              style={{ gap: main.spacing.tagGap }} // gap-5 (20px)
            >
              <div
                className="text-left relative self-stretch flex items-end justify-start"
                style={{ 
                  color: base.colors.neutral.gray100, // #eaeaea
                  fontSize: main.typography.fontSize.postTitle, // 18px
                  lineHeight: main.typography.lineHeight.postTitle, // 28px
                  letterSpacing: base.typography.letterSpacing.tight,
                  fontFamily: base.typography.fontFamily.primary,
                  fontWeight: main.typography.getDynamicWeight.postTitle(), // semibold for 18px
                }}
              >
                {title}
              </div>
            </div>
          </div>
          {/* 내용 */}
          <div
            className="text-left relative w-[100%] h-10 max-w-[364px] max-h-[60px] overflow-hidden"
            style={{
              color: base.colors.neutral.gray100, // #eaeaea
              fontSize: main.typography.fontSize.meta, // 14px
              lineHeight: main.typography.lineHeight.body, // 20px
              letterSpacing: base.typography.letterSpacing.tight,
              textOverflow: "ellipsis",
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: main.typography.getDynamicWeight.body(), // medium for 14px
            }}
          >
            {content}
          </div>
        </div>
        {/* 태그 */}
        <div 
          className="flex flex-row items-center justify-start self-stretch shrink-0 h-5 relative"
          style={{ gap: main.spacing.tagGap }} // gap-5 (20px)
        >
          <div
            className="text-left relative flex-1 h-5 overflow-hidden"
            style={{
              color: base.colors.neutral.gray400, // #b0b0b0
              fontSize: main.typography.fontSize.meta, // 12px
              lineHeight: main.typography.lineHeight.body, // 20px
              letterSpacing: base.typography.letterSpacing.tight,
              textOverflow: "ellipsis",
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: main.typography.getDynamicWeight.body(), // medium for 12px
            }}
          >
            {tags.map(tag => `#${tag}`).join(' ')}
          </div>
        </div>
      </div>
      {/* 하단 상호작용 영역 */}
      <div 
        className="rounded-br-[10px] rounded-bl-[10px] flex flex-row items-center justify-between self-stretch shrink-0 relative"
        style={{ 
          backgroundColor: base.colors.neutral.gray800, // #2d2d32
          padding: `12px ${main.spacing.cardPadding} 16px ${main.spacing.cardPadding}`, // pt-3 pr-6 pb-4 pl-6
        }}
      >
        <div 
          className="flex flex-row items-center justify-start shrink-0 relative"
          style={{ gap: main.spacing.tagGap }} // gap-5 (20px)
        >
          <div
            className="text-left relative flex items-center justify-start"
            style={{ 
              color: base.colors.neutral.gray100, // #eaeaea
              fontSize: main.typography.fontSize.postTitle, // 18px
              lineHeight: main.typography.lineHeight.body, // 20px
              letterSpacing: base.typography.letterSpacing.tight,
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: main.typography.getDynamicWeight.body(), // medium for 18px
            }}
          >
            😍 {likeCount}
          </div>
          <div
            className="text-left relative flex items-center justify-start"
            style={{ 
              color: base.colors.neutral.gray100, // #eaeaea
              fontSize: main.typography.fontSize.postTitle, // 18px
              lineHeight: main.typography.lineHeight.body, // 20px
              letterSpacing: base.typography.letterSpacing.tight,
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: main.typography.getDynamicWeight.body(), // medium for 18px
            }}
          >
            💬 {commentCount}
          </div>
        </div>
        <div
          className="text-right relative flex-1 max-w-[100px] flex items-center justify-end overflow-hidden"
          style={{
            color: base.colors.neutral.gray400, // #b0b0b0
            fontSize: main.typography.fontSize.meta, // 12px
            lineHeight: main.typography.lineHeight.body, // 20px
            letterSpacing: base.typography.letterSpacing.tight,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontFamily: base.typography.fontFamily.primary,
            fontWeight: main.typography.getDynamicWeight.body(), // medium for 12px
          }}
        >
          {timeAgo}
        </div>
      </div>
    </div>
  );
};
