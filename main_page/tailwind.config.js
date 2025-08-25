module.exports = {
  content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter-bold': ['Inter-Bold', 'sans-serif'],
        'inter-semibold': ['Inter-SemiBold', 'sans-serif'],
        'inter-medium': ['Inter-Medium', 'sans-serif'],
      },
      colors: {
        qna: {
          bg: {
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
          }
        }
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '120': '30rem',   // 480px
      },
      borderRadius: {
        '10': '10px',
        '20': '20px',
        '25': '25px',
      }
    }
  }
};