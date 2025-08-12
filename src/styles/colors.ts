// Design System Colors
export const colors = {
  primary: {
    blue: '#204efb',
  },
  neutral: {
    white: '#ffffff',
    gray100: '#eaeaea',
    gray900: '#18181b',
    black: '#080808',
  },
  gradients: {
    heroBackground: 'linear-gradient(180deg, rgba(8, 8, 8, 1.00) 84.61538553237915%, rgba(8, 8, 8, 0.00) 100%)',
    partnerOverlay: 'linear-gradient(to left, rgba(8, 8, 8, 0.20), rgba(8, 8, 8, 0.20))',
  },
} as const;

export type Colors = typeof colors;
