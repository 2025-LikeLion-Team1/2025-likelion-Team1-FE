// Design System Colors
export const colors = {
  primary: {
    blue: '#204efb',
    yellow: '#ffe81d',
  },
  neutral: {
    white: '#ffffff',
    gray100: '#eaeaea',
    gray200: '#b0b0b0',
    gray600: '#747474',
    gray800: '#2d2d32',
    gray900: '#18181b',
    black: '#080808',
  },
  gradients: {
    heroBackground: 'linear-gradient(180deg, rgba(8, 8, 8, 1.00) 84.61538553237915%, rgba(8, 8, 8, 0.00) 100%)',
    partnerOverlay: 'linear-gradient(to left, rgba(8, 8, 8, 0.20), rgba(8, 8, 8, 0.20))',
    questionButton: 'linear-gradient(-90deg, rgba(32, 78, 251, 1.00) 19.23076957464218%, rgba(32, 78, 251, 0.87) 34.618714451789856%, rgba(25, 16, 101, 1.00) 85.28342247009277%, rgba(16, 17, 101, 1.00) 100%)',
    questionButtonBorder: 'linear-gradient(90deg, rgba(87, 122, 255, 1.00) 0%, rgba(19, 46, 149, 1.00) 100%)',
  },
} as const;

export type Colors = typeof colors;
