// 🎯 토큰 통합 시스템 - 명확한 분리와 조합
export { calculateOptimalFontWeight } from '../typography';

// 기반 토큰들 (모든 페이지 공통)
import {
  baseColors,
  baseSpacing,
  baseTypography,
  baseBorderRadius,
  baseZIndex,
} from './base';

// 페이지별 전용 토큰들
import {
  landingSpacing,
  landingPositions,
  landingTypography,
  landingMaxWidth,
  landingMinWidth,
  landingHeights,
  landingLineHeights,
  landingZIndex,
} from './landing';

import {
  appSpacing,
  appTypography,
  appZIndex,
  appBorderRadius,
} from './app';

import {
  mainSpacing,
  mainSizes,
  mainTypography,
  mainBorderRadius,
  mainGradients,
  mainShadows,
  mainBorders,
  mainColors,
  mainPositions,
} from './main';

// 🌟 공통 기반 (모든 곳에서 import)
export const colors = baseColors;
export const spacing = baseSpacing;
export const typography = baseTypography;
export const borderRadius = baseBorderRadius;
export const zIndex = baseZIndex;

// 🌟 기반 토큰 전체 export (base로 import 가능)
export const base = {
  colors: baseColors,
  spacing: baseSpacing,
  typography: baseTypography,
  borderRadius: baseBorderRadius,
  zIndex: baseZIndex,
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
  fontFamily: {
    primary: 'Inter, sans-serif',
    sans: 'Inter, sans-serif',
  },
};

// 🎨 랜딩페이지 전용 (Landing 컴포넌트에서만 사용)
export const landing = {
  // 기반 토큰 포함
  colors: baseColors,
  borderRadius: baseBorderRadius,
  
  // 랜딩 전용 토큰들
  spacing: {
    ...baseSpacing,        // 공통 spacing 포함
    ...landingSpacing,     // 랜딩 전용 spacing 추가
  },
  
  typography: {
    ...baseTypography,     // 공통 typography 포함
    fontSize: {
      ...baseTypography.fontSize,  // 기본 크기들
      ...landingTypography.fontSize, // 랜딩 전용 거대한 크기들
    },
  },
  
  positions: landingPositions,
  maxWidth: landingMaxWidth,
  minWidth: landingMinWidth,
  heights: landingHeights,
  lineHeights: landingLineHeights,
  zIndex: landingZIndex,
} as const;

// 🖥️ 앱 페이지 전용 (미래의 Dashboard 등에서 사용)
export const app = {
  // 기반 토큰 포함
  colors: baseColors,
  borderRadius: { ...baseBorderRadius, ...appBorderRadius },
  
  // 앱 전용 토큰들
  spacing: {
    ...baseSpacing,       // 공통 spacing 포함
    ...appSpacing,        // 앱 전용 spacing 추가
  },
  
  typography: {
    ...baseTypography,    // 공통 typography 포함
    fontSize: {
      ...baseTypography.fontSize,    // 기본 크기들
      ...appTypography.fontSize,     // 앱 전용 실용적 크기들
    },
  },
  
  zIndex: appZIndex,
} as const;

// 🏠 메인페이지 전용 (MainPage 컴포넌트에서만 사용)
export const main = {
  // 기반 토큰 포함
  colors: {
    ...baseColors,
    ...mainColors,
  },
  
  // 메인 전용 토큰들
  spacing: {
    ...baseSpacing,        // 공통 spacing 포함
    ...mainSpacing,        // 메인 전용 spacing 추가
  },
  
  sizes: mainSizes,
  
  typography: {
    ...baseTypography,     // 공통 typography 포함
    fontSize: {
      ...baseTypography.fontSize,    // 기본 크기들
      ...mainTypography.fontSize,    // 메인 전용 크기들
    },
    lineHeight: {
      ...baseTypography.lineHeight,
      ...mainTypography.lineHeight,
    },
    fontWeight: {
      ...baseTypography.fontWeight,
      ...mainTypography.fontWeight,
    },
    getDynamicWeight: mainTypography.getDynamicWeight, // 동적 weight 계산 함수들
  },
  
  borderRadius: {
    ...baseBorderRadius,
    ...mainBorderRadius,
  },
  
  gradients: mainGradients,
  shadows: mainShadows,
  borders: mainBorders,
  positions: mainPositions,
} as const;

// 타입 정의
export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type Typography = typeof typography;
export type Landing = typeof landing;
export type App = typeof app;
export type Main = typeof main;
