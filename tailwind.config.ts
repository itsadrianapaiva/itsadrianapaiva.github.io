import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      colors: {
        'light-pink': '#FFEDED',
        'medium-pink': '#FFCCD2',
        'dark-pink': '#F78CA2',
        'intense-pink': '#CE5A67',
        'red-pink': '#D80032',
        'burned-orange': '#B3541E',
        'light-brown': '#705C53',
        'medium-brown': '#3a302b',
        'dark-brown': '#2A221E',
        'black-brown': '#1A120B',
      },
      scrollbar: {
        thumb: '#3a302b',
        track: '#2A221E',
      },
      animation: {
        'ping-large': 'ping-large 1s ease-in-out infinite',
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
        appear: 'appear 1s ease-in-out forwards',
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
        'move-left': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        'move-right': {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        appear: {
          '0%': {
            opacity: '0',
            scale: '0.5s',
          },
          '100%': {
            opacity: '1',
            scale: '1',
          },
        },
      },
    },
    plugins: [
      require('tailwind-scrollbar')({
        nocompatible: true, 
      }),
    ],
  },
};
export default config;
