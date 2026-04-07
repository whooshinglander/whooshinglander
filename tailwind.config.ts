import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0c',
        line: 'rgba(255,255,255,0.08)',
        mist: 'rgba(255,255,255,0.68)',
        accent: '#f3f3f2'
      },
      boxShadow: {
        soft: '0 20px 80px rgba(0,0,0,0.28)'
      }
    }
  },
  plugins: []
};

export default config;
