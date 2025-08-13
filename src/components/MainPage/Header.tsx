import { main, base } from '../../styles/tokens';

export const MainPageHeader = () => {
  return (
    <div 
      className="flex flex-row items-center justify-between w-full absolute top-0 left-0 right-0"
      style={{
        height: main.sizes.headerHeight, // 60px
        paddingTop: main.spacing.headerVertical, // 6px
        paddingRight: main.spacing.headerHorizontal, // 24px
        paddingBottom: main.spacing.headerVertical, // 6px
        paddingLeft: main.spacing.headerHorizontal, // 24px
        zIndex: base.zIndex.fixed, // 1030
      }}
    >
      {/* 왼쪽: QnAHub 로고 + 텍스트 */}
      <div 
        className="flex flex-row items-center justify-start relative"
        style={{ gap: main.spacing.sm }} // 8px
      >
        <img
          className="relative"
          style={{ 
            width: main.sizes.iconLarge, // 30px
            height: main.sizes.iconLarge, // 30px
          }}
          src="/div0.svg"
          alt="QnAHub Logo"
        />
        <div
          className="text-left relative"
          style={{ 
            color: base.colors.neutral.white, // #ffffff
            fontFamily: base.typography.fontFamily.primary,
            fontSize: main.typography.fontSize.headerTitle, // 20px
            fontWeight: main.typography.getDynamicWeight.getBold(20), // 20px Bold
          }}
        >
          QnAHub
        </div>
      </div>

      {/* 오른쪽: URL + LikeLion 로고 */}
      <div 
        className="flex flex-row items-center justify-end relative"
        style={{ gap: main.spacing.md }} // 16px
      >
        <div
          className="text-right relative"
          style={{ 
            color: base.colors.neutral.gray400, // #b0b0b0
            fontFamily: base.typography.fontFamily.primary,
            fontSize: main.typography.fontSize.meta, // 12px
            fontWeight: main.typography.getDynamicWeight.getBold(12), // 12px Bold
          }}
        >
          https://qnahub.xyz/likelion_univ
        </div>
        <img
          className="relative"
          style={{ 
            width: main.sizes.iconXL, // 48px
            height: main.sizes.iconXL, // 48px
          }}
          src="/clip-path-group0.svg"
          alt="LikeLion Logo"
        />
      </div>
    </div>
  );
};