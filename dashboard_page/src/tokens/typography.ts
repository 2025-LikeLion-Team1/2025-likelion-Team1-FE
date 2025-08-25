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
  fonts: {
    primary: "Inter, sans-serif",
  },
  
  weights: {
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
  },
  
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
  
  letterSpacing: {
    tight: '-0.025em',
  },
} as const;

// 폰트 크기에 따른 최적 폰트 굵기를 계산하는 헬퍼 함수
export const getOptimalFontWeight = (fontSize: string | number, baseWeight: number = 500): number => {
  // rem이나 px 단위를 숫자로 변환
  const numericSize = typeof fontSize === 'string' 
    ? parseFloat(fontSize.replace(/[^\d.]/g, '')) * (fontSize.includes('rem') ? 16 : 1)
    : fontSize;
    
  return calculateOptimalFontWeight(numericSize, 16, baseWeight);
};
