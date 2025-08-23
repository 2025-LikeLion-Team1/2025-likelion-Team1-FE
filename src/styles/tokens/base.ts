// 🎯 기반 토큰 - 모든 페이지에서 공통으로 사용
// 브랜드 색상, 기본 spacing, 범용 폰트 크기만 포함

export const baseColors = {
  // 브랜드 핵심 색상 (절대 변하지 않음)
  primary: {
    blue: '#204efb',
  },
  
  // 기본 뉴트럴 색상 (모든 페이지 공통)
  neutral: {
    white: '#ffffff',
    black: '#000000',
    gray100: '#eaeaea',  // 원본에서 사용하는 텍스트 색상
    gray200: '#d1d5db',
    gray300: '#9ca3af',
    gray400: '#b0b0b0',  // 원본에서 사용하는 메타 텍스트 색상
    gray500: '#4b5563',
    gray600: '#374151',
    gray700: '#1f2937',
    gray800: '#2d2d32',  // 원본에서 사용하는 카드 배경색
    gray900: '#18181b',  // 원본에서 사용하는 메인 배경색
  },
  
  // 시스템 색상 (에러, 성공 등)
  system: {
    error: '#ef4444',
    success: '#10b981',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
  
  // 대시보드 전용 색상 (원본 디자인 기반)
  dashboard: {
    containerBackground: '#2d2d32',    // 대시보드 컨테이너 배경
    cardBackground: '#2d2d32',         // 카드 배경색
    titleText: '#eaeaea',              // 카드 제목 색상
    subtitleText: '#b0b0b0',           // 카드 부제목 색상
    valueText: '#204efb',              // 카드 값 색상 (파란색)
    unitText: '#b0b0b0',               // 카드 단위 색상
    emojiText: '#204efb',              // 카드 이모지 색상
    aiHighlightText: '#204efb',        // AI 텍스트 강조 색상
  }
} as const;

export const baseSpacing = {
  // 8px 기반 범용 spacing (모든 페이지에서 사용)
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '80px',
  '5xl': '96px',
  '6xl': '128px',
} as const;

export const baseTypography = {
  fontFamily: {
    primary: 'Inter, sans-serif',
    sans: 'Inter, sans-serif',
  },
  
  // 범용 폰트 크기 (앱에서 주로 사용)
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
  },
  
  // 폰트 굵기
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },
  
  // 라인 높이
  lineHeight: {
    tight: '1.1',
    normal: '1.4',
    relaxed: '1.6',
    loose: '1.8',
  },
  
  // 자간
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
} as const;

export const baseBorderRadius = {
  none: '0',
  sm: '2px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',
} as const;

export const baseZIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
} as const;
