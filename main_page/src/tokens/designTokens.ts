// Design Tokens - 디자인 시스템 토큰 정의

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

// 폰트 크기를 픽셀 값으로 변환하는 헬퍼 함수
const parsePixelValue = (value: string): number => {
  if (value.endsWith('rem')) {
    return parseFloat(value) * 16; // 1rem = 16px
  }
  if (value.endsWith('px')) {
    return parseFloat(value);
  }
  return 16; // 기본값
};

// 타이포그래피 스타일 생성 헬퍼
export const createTypographyStyle = (fontSize: string, baseFontWeight: number = 400) => {
  const pixelSize = parsePixelValue(fontSize);
  const optimalWeight = calculateOptimalFontWeight(pixelSize, 16, baseFontWeight);
  
  return {
    fontSize,
    fontWeight: optimalWeight.toString(),
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  };
};

export const designTokens = {
  colors: {
    background: {
      primary: '#18181b',
      secondary: '#2d2d32',
      input: '#080808',
    },
    text: {
      primary: '#ffffff',
      secondary: '#eaeaea',
      tertiary: '#b0b0b0',
      accent: '#ffe81d',
      brand: '#204efb',
    },
    border: {
      primary: '#747474',
      accent: '#204efb',
    },
    gradient: {
      button: 'linear-gradient(-90deg, rgba(32, 78, 251, 1.00) 19.23076957464218%, rgba(32, 78, 251, 0.87) 34.618714451789856%, rgba(25, 16, 101, 1.00) 85.28342247009277%, rgba(16, 17, 101, 1.00) 100%)',
      border: 'linear-gradient(90deg, rgba(87, 122, 255, 1.00) 0%, rgba(19, 46, 149, 1.00) 100%)',
      hotBorder: 'linear-gradient(94.87deg, rgba(32, 78, 251, 1.00) 0%, rgba(19, 46, 149, 1.00) 100%)',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '48px',
    '4xl': '64px',
    '5xl': '96px',
    '6xl': '120px',
  },
  typography: {
    // 동적 폰트 굵기가 적용된 스타일들
    xs: createTypographyStyle('0.75rem'),      // 12px
    sm: createTypographyStyle('0.875rem'),     // 14px
    base: createTypographyStyle('1rem'),       // 16px
    lg: createTypographyStyle('1.125rem'),     // 18px
    xl: createTypographyStyle('1.25rem'),      // 20px
    '2xl': createTypographyStyle('1.5rem'),    // 24px
    '3xl': createTypographyStyle('2.5rem'),    // 40px
    '9xl': createTypographyStyle('9rem'),      // 144px
    
    // 특별한 케이스들 (미디엄/세미볼드/볼드 기본값)
    medium: {
      xs: createTypographyStyle('0.75rem', 500),
      sm: createTypographyStyle('0.875rem', 500),
      base: createTypographyStyle('1rem', 500),
      lg: createTypographyStyle('1.125rem', 500),
      xl: createTypographyStyle('1.25rem', 500),
      '2xl': createTypographyStyle('1.5rem', 500),
      '3xl': createTypographyStyle('2.5rem', 500),
    },
    semibold: {
      xs: createTypographyStyle('0.75rem', 600),
      sm: createTypographyStyle('0.875rem', 600),
      base: createTypographyStyle('1rem', 600),
      lg: createTypographyStyle('1.125rem', 600),
      xl: createTypographyStyle('1.25rem', 600),
      '2xl': createTypographyStyle('1.5rem', 600),
      '3xl': createTypographyStyle('2.5rem', 600),
    },
    bold: {
      xs: createTypographyStyle('0.75rem', 700),
      sm: createTypographyStyle('0.875rem', 700),
      base: createTypographyStyle('1rem', 700),
      lg: createTypographyStyle('1.125rem', 700),
      xl: createTypographyStyle('1.25rem', 700),
      '2xl': createTypographyStyle('1.5rem', 700),
    },
  },
  fontSize: {
    xs: '0.75rem',   // 12px
    sm: '0.875rem',  // 14px
    base: '1rem',    // 16px
    lg: '1.125rem',  // 18px
    xl: '1.25rem',   // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '2.5rem', // 40px
    '9xl': '9rem',   // 144px
  },
  borderRadius: {
    sm: '10px',
    md: '20px',
    lg: '25px',
    full: '100px',
  },
  layout: {
    containerWidth: '1240px',
    cardWidth: '544px',
    inputWidth: '590px',
    headerHeight: '72px',
    bannerHeight: '320px',
  },
  fontFamily: {
    bold: "Inter-Bold, sans-serif",
    semibold: "Inter-SemiBold, sans-serif",
    medium: "Inter-Medium, sans-serif",
  },
} as const;
