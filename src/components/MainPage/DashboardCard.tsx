import { main, base } from '../../styles/tokens';

interface DashboardCardProps {
  title: string;
  subtitle?: string;
  value: string;
  unit: string;
  emoji?: string;
  className?: string;
}

export const DashboardCard = ({ 
  title, 
  subtitle, 
  value, 
  unit, 
  emoji,
  className = ""
}: DashboardCardProps) => {
  return (
    <div
      className={`rounded-[10px] border-solid border-[transparent] border-[6px] flex flex-col items-start justify-start self-stretch ${className} relative`}
      style={{
        backgroundColor: base.colors.dashboard.cardBackground,
        borderRadius: main.borderRadius.card,
        padding: main.sizes.dashboardCardPadding,
        gap: main.sizes.dashboardCardGap,
        boxShadow: main.shadows.dashboardCardSoft,
      }}
    >
      <div className="flex flex-col items-start justify-between self-stretch flex-1 relative">
        <div className="flex flex-col items-start justify-start self-stretch shrink-0 relative" style={{ gap: main.sizes.dashboardTitleGap }}>
          <div
            className="text-left relative"
            style={{ 
              color: base.colors.dashboard.titleText,
              fontSize: main.typography.fontSize.dashboardTitle,
              lineHeight: main.typography.lineHeight.dashboardTitle,
              letterSpacing: base.typography.letterSpacing.tight,
              fontFamily: base.typography.fontFamily.primary,
              fontWeight: main.typography.getDynamicWeight.dashboardTitle(),
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              className="text-center relative flex items-end justify-center"
              style={{ 
                color: base.colors.dashboard.subtitleText,
                fontSize: main.typography.fontSize.dashboardSubtitle,
                lineHeight: main.typography.lineHeight.dashboardSubtitle,
                letterSpacing: base.typography.letterSpacing.tight,
                fontFamily: base.typography.fontFamily.primary,
                fontWeight: main.typography.getDynamicWeight.dashboardSubtitle(),
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
        <div 
          className="flex flex-row items-end justify-between self-stretch flex-1 relative"
          style={{ paddingRight: main.sizes.dashboardValueAreaPadding }}
        >
          {emoji && (
            <div
              className="text-center relative flex items-end justify-center"
              style={{ 
                color: base.colors.dashboard.emojiText,
                fontSize: main.typography.fontSize.dashboardEmoji,
                letterSpacing: base.typography.letterSpacing.tight,
                fontFamily: base.typography.fontFamily.primary,
                fontWeight: main.typography.getDynamicWeight.dashboardEmoji(),
                width: main.sizes.dashboardEmojiWidth,
                height: main.sizes.dashboardEmojiHeight,
              }}
            >
              {emoji}
            </div>
          )}
          <div 
            className="flex flex-row items-center justify-start shrink-0 relative"
            style={{ gap: main.sizes.dashboardEmojiGap }}
          >
            <div
              className="text-center relative flex items-end justify-center"
              style={{ 
                color: base.colors.dashboard.valueText,
                fontSize: main.typography.fontSize.dashboardValue,
                letterSpacing: base.typography.letterSpacing.tight,
                fontFamily: base.typography.fontFamily.primary,
                fontWeight: main.typography.getDynamicWeight.dashboardValue(),
              }}
            >
              {value}
            </div>
            <div
              className="text-center relative flex items-end justify-center"
              style={{ 
                color: base.colors.dashboard.unitText,
                fontSize: main.typography.fontSize.dashboardUnit,
                letterSpacing: base.typography.letterSpacing.tight,
                fontFamily: base.typography.fontFamily.primary,
                fontWeight: main.typography.getDynamicWeight.dashboardUnit(),
              }}
            >
              {unit}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
