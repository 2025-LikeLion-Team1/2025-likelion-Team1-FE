// Design System Typography
// 폰트 크기에 따른 동적 fontWeight 보정 함수
export const calculateOptimalFontWeight = (
  fontSize: number, 
  baseFontSize: number = 16, 
  baseFontWeight: number = 400
): number => {
  // 폰트 크기가 클수록 더 높은 fontWeight 필요
  const sizeRatio = fontSize / baseFontSize;
  const weightAdjustment = Math.log(sizeRatio) * 100; // 로그 스케일로 조정
  const adjustedWeight = baseFontWeight + weightAdjustment;
  
  // fontWeight를 100 단위로 반올림하고 범위 제한 (100-900)
  return Math.max(100, Math.min(900, Math.round(adjustedWeight / 100) * 100));
};

export const typography = {
  fontFamily: {
    primary: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
    hero: '156px', // QnAHub 메인 타이틀
    slogan: '60px', // 슬로건 텍스트 (기존)
    sloganBlue: '64px', // 슬로건 파란색 텍스트 ("질문", "신뢰")
    sloganWhite: '42px', // 슬로건 흰색 텍스트 ("으로", "를 만듭니다")
    feature: '150px', // 질문/답변 섹션용
    partner: '40px', // AI 텍스트
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    hero: '156px',
    slogan: '90px',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
  },
} as const;

export type Typography = typeof typography;
