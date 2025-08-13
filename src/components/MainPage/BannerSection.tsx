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
          fontSize: main.typography.fontSize.emoji,
          lineHeight: '140px',
          letterSpacing: base.typography.letterSpacing.tight,
          fontFamily: base.typography.fontFamily.primary,
          fontWeight: main.typography.getDynamicWeight.emoji(), // 동적 계산
          left: 'calc(50% - 149px)',
          top: 'calc(50% - 133px)',
          width: '295px',
          height: '165px',
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
          top: 'calc(50% + 12px)',
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
          top: 'calc(50% + 96px)',
          width: '330px',
          height: '40px',
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
        배너 사진입니다
      </div>
    </div>
  );
};
