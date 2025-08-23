import { main, base } from '../../styles/tokens';

export const BannerSection = () => {
  return (
    <div
      className="border-solid border absolute overflow-hidden"
      style={{
        backgroundColor: base.colors.neutral.gray900,
        borderRadius: main.borderRadius.banner,
        borderColor: main.colors.borderGray,
        width: '1040px',
        height: '320px',
        left: main.positions.bannerLeft,
        top: main.positions.bannerTop,
      }}
    >
      <div
        className="text-center absolute flex items-center justify-center"
        style={{ 
          color: base.colors.neutral.black,
          fontSize: '140px',
          lineHeight: '140px',
          letterSpacing: base.typography.letterSpacing.tight,
          fontFamily: base.typography.fontFamily.primary,
          fontWeight: main.typography.getDynamicWeight.emoji(), // 동적 계산
          top: 'calc(-20%)',
          width: '100%',
          height: '100%',
        }}
      >
        🦁
      </div>
      <div
        className="text-center absolute flex items-center justify-center"
        style={{ 
          color: main.colors.bannerText,
          fontSize: '40px',
          lineHeight: '140px',
          letterSpacing: base.typography.letterSpacing.tight,
          transform: "translateX(-50%)",
          fontFamily: base.typography.fontFamily.primary,
          fontWeight: main.typography.getDynamicWeight.bannerTitle(), // 동적 계산
          left: '50%',
          top: 'calc(48% + 12px)',
          width: '765px',
          height: '100px',
        }}
      >
        멋대 친구들의 공개 질문 환영!
        </div>
      <div
        className="text-center font-semibold absolute flex items-center justify-center"
        style={{ 
          color: main.colors.neutral.gray100,
          fontSize: main.typography.fontSize.sectionTitle,
          lineHeight: '40px',
          letterSpacing: base.typography.letterSpacing.tight,
          fontFamily: base.typography.fontFamily.primary,
          fontWeight: main.typography.fontWeight.semibold,
          left: 'calc(50% - 166px)',
          top: 'calc(45% + 96px)',
          width: '330px',
          height: '40px',
          whiteSpace: 'nowrap',
          overflow: 'visible',
        }}
      >
        멋사 QnAHub에서 궁금한 거 다 물어봐~
      </div>
      <div
        className="text-left font-medium absolute"
        style={{ 
          color: main.colors.neutral.white,
          fontSize: main.typography.fontSize.body,
          lineHeight: main.typography.lineHeight.body,
          letterSpacing: base.typography.letterSpacing.tight,
          fontFamily: base.typography.fontFamily.primary,
          fontWeight: main.typography.fontWeight.medium,
          left: '12px',
          top: '2px',
        }}
      >
      </div>
    </div>
  );
};
