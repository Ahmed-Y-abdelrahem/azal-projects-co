/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/features/**/*.{js,jsx}',
    './src/hooks/**/*.{js,jsx}',
  ],

  theme: {
    extend: {
      colors: {
  primary: {
    DEFAULT: '#081B33',
    dark: '#051321',
    light: '#123459',
  },

  accent: {
    DEFAULT: '#D4A017',
    light: '#F2C94C',
    dark: '#B8880D',
  },

  background: '#F7F8FA',

  border: '#E5E7EB',

  text: {
    DEFAULT: '#111827',
    muted: '#6B7280',
    light: '#9CA3AF',
  },
},
      fontFamily: {
  display: ['Inter', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
},

boxShadow: {
  card: '0 10px 30px rgba(0,0,0,.08)',
  gold: '0 10px 30px rgba(212,160,23,.15)',
},

borderRadius: {
  xl2: '1rem',
},

backgroundImage: {
  heroOverlay:
    'linear-gradient(90deg,rgba(14,42,71,.95),rgba(14,42,71,.75))',
},
    },
  },

  plugins: [],
};

