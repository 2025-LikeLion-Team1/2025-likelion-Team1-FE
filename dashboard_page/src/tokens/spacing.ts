export const spacing = {
  // Base spacing units
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '0.75rem',    // 12px
  lg: '1rem',       // 16px
  xl: '1.5rem',     // 24px
  '2xl': '2rem',    // 32px
  '3xl': '3rem',    // 48px
  '4xl': '4rem',    // 64px
  
  // Component specific spacing
  card: {
    padding: '1.5rem',    // 24px
    gap: '0.625rem',      // 10px
  },
  
  header: {
    padding: '0.375rem 1.5rem', // 6px 24px
  },
  
  sidebar: {
    width: '17.5rem',     // 280px
    padding: '5rem 3.5625rem 5rem 3.5625rem', // 80px 57px
  },
  
  button: {
    padding: '0.625rem 0.875rem', // 10px 14px
  },
} as const;

export const borderRadius = {
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.625rem',  // 10px
  xl: '0.75rem',   // 12px
} as const;

export const layout = {
  header: {
    height: '3.75rem',  // 60px
  },
  
  sidebar: {
    width: '17.5rem',   // 280px
  },
  
  card: {
    width: '22.5rem',   // 360px
    height: '11.25rem', // 180px
  },
  
  container: {
    height: '67.5rem',  // 1080px
  },
  
  grid: {
    columns: 4,
    gap: '0.75rem',     // 12px
  },
} as const;
