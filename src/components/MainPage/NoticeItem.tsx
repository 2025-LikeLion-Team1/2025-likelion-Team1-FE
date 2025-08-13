import { main, base } from '../../styles/tokens';

interface NoticeItemProps {
  title: string;
  date: string;
  hasIcon?: boolean;
}

export const NoticeItem = ({ title, date, hasIcon = false }: NoticeItemProps) => {
  return (
    <div 
      className="flex flex-row items-start justify-start self-stretch shrink-0 relative"
      style={{
        // 완전 토큰화된 6px 대시 점선
        ...main.borders.customDash6px,
        gap: main.spacing.noticeItemGap, // 4px
        paddingTop: main.spacing.noticeItemVertical, // 4px
        paddingBottom: main.spacing.noticeItemVertical, // 4px
      }}
    >
      <div 
        className="flex flex-row items-center justify-start shrink-0 relative overflow-hidden"
        style={{
          paddingTop: main.spacing.noticeItemVertical, // 4px
          paddingBottom: main.spacing.noticeItemVertical, // 4px
          gap: main.spacing.noticeIconGap, // 10px
        }}
      >
        {hasIcon && (
          <img
            className="shrink-0 relative overflow-visible"
            style={{ 
              width: main.sizes.iconSmall,
              height: main.sizes.iconSmall,
              aspectRatio: "1",
            }}
            src="/group-30.svg"
            alt="Notice"
          />
        )}
      </div>
        <div
          className="text-left relative flex-1 overflow-hidden flex items-center justify-start"
          style={{
            maxHeight: main.sizes.noticeItemMaxHeight, // 48px
            maxWidth: main.sizes.noticeTitleMaxWidth, // 340px
            color: base.colors.neutral.gray100,
            fontSize: main.typography.fontSize.body,
            lineHeight: main.typography.lineHeight.tight,
            letterSpacing: base.typography.letterSpacing.tight,
            fontFamily: base.typography.fontFamily.primary,
            fontWeight: main.typography.getDynamicWeight.getSemiBold(14), // 14px SemiBold
            textOverflow: "ellipsis",
          }}
        >
        {title}
      </div>
        <div
          className="text-right relative flex-1 flex items-center justify-end overflow-hidden"
          style={{
            maxWidth: main.sizes.noticeDateMaxWidth, // 80px
            color: base.colors.neutral.gray400,
            fontSize: main.typography.fontSize.meta,
            lineHeight: main.typography.lineHeight.meta,
            letterSpacing: base.typography.letterSpacing.tight,
            fontFamily: base.typography.fontFamily.primary,
            fontWeight: main.typography.getDynamicWeight.getMedium(12), // 12px Medium
            textOverflow: "ellipsis",
          }}
        >
        {date}
      </div>
    </div>
  );
};
