/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Olive Green Theme
        'olive-primary': '#6B8E23',
        'olive-soft': '#8FAF6A',
        'olive-success': '#4CAF50',
        'olive-cta': '#5E7C3A',
        'olive-neutral': '#2F3A2F',
        // Background colors
        'bg-main': '#F7FAF5',
        'bg-section': '#EEF3EC',
        'bg-card': '#FFFFFF',
        'bg-card-alt': '#FAFBF9',
        // Text colors
        'text-heading': '#243024',
        'text-body': '#4A5A4A',
        'text-muted': '#7A8A7A',
        // Legacy aliases for compatibility
        'primary': '#6B8E23',
        'secondary': '#8FAF6A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
      },
    },
  },
  plugins: [],
}

