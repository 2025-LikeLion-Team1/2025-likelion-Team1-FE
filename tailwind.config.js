export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2bca43",
                    blue: "#204efb",
                    yellow: "#ffe81d",
                },
                neutral: {
                    white: "#ffffff",
                    gray100: "#eaeaea",
                    gray200: "#b0b0b0",
                    gray600: "#747474",
                    gray800: "#2d2d32",
                    gray900: "#18181b",
                    black: "#080808",
                }
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'inter-bold': ['Inter', 'sans-serif'],
                'inter-medium': ['Inter', 'sans-serif'],
                'inter-semibold': ['Inter', 'sans-serif'],
            },
            fontWeight: {
                'inter-light': '300',
                'inter-regular': '400',
                'inter-medium': '500',
                'inter-semibold': '600',
                'inter-bold': '700',
                'inter-extrabold': '800',
                'inter-black': '900',
            }
        },
    },
    plugins: [],
};