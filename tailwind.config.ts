import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        green: '#5CEE6D',
        purple: '#CD5CE1',
        brand: {
          100: "#FFF8F6",
          200: "#FFF1EE",
          400: "#FFDFD8",
          600: "#FFCABD",
          800: "#F5B3A2",
          1000: "#EB9D89",
        },
        gray: {
          0: "#FCFCFC",
          100: "#F3F3F3",
          200: "#E6E6E6",
          300: "#CCCCCC",
          400: "#B3B3B3",
          500: "#999999",
          6000: "#808080",
          700: "#666666",
          800: "#4D4D4D",
          900: "#333333",
          1000: "#1A1A1A",
        },
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontSize: {
        'banner_lg': ['3.75rem', {
          lineHeight: '3.5rem',
          letterSpacing: '0.09375rem',
        }],
        'banner_md': ['2rem', {
          lineHeight: '3.5rem',
          letterSpacing: '0.0625rem',
        }],
        'banner_sm': ['1.5rem', {
          lineHeight: '3.5rem',
          letterSpacing: '0.0625rem',
        }],
        '32': ['2rem', {
          lineHeight: '2.25rem',
          letterSpacing: '0.0625rem',
        }],
        '24': ['1.5rem', {
          lineHeight: '2.25rem',
          letterSpacing: '0.0625rem',
        }],
        '20': ['1.25rem', {
          lineHeight: '2.25rem',
          letterSpacing: '0.0625rem',
        }],
        '18': ['1.125rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.0625rem',
        }],
        '16': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.0625rem',
        }],
        '12': ['0.75rem', {
          lineHeight: '2.25rem',
          letterSpacing: '0.0625rem',
        }],
        '10': ['0.625rem', {
          lineHeight: '0.75rem',
          letterSpacing: '0.0625rem',
        }],
      },
      borderRadius: {
        'none': '0',
        'lg': '1rem',
        'md': '0.75rem',
        'sm': '0.5rem'
      }
    },
  },
  plugins: [],
}
export default config
