/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pleasant Light Fintech Theme
        'bg-primary': '#F7F8FA',
        'bg-section': '#FFFFFF',
        'bg-section-alt': '#F2F5F9',
        'accent-red': '#DC2626',
        'accent-red-light': '#EF4444',
        'success': '#DC2626',
        'text-heading': '#1F2937',
        'text-body': '#4B5563',
        'text-muted': '#9CA3AF',
        'border-soft': '#E5E7EB',
        // Legacy aliases
        'primary': '#DC2626',
        'secondary': '#EF4444',
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
