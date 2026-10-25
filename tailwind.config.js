/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: 'var(--color-navy, #14213D)',
          'navy-dark': 'var(--color-navy-dark, #0B132B)',
          primary: 'var(--color-primary, #2563EB)',
          'primary-hover': 'var(--color-primary-hover, #1D4ED8)',
          teal: 'var(--color-teal, #0F766E)',
          'teal-light': 'var(--color-teal-light, #14B8A6)',
          emerald: 'var(--color-emerald, #059669)',
          ai: 'var(--color-accent-ai, #7C3AED)',
          'ai-light': 'var(--color-accent-ai-light, #A78BFA)',
          cyan: 'var(--color-accent-cyan, #0284C7)',
          surface: 'var(--color-surface, #F8FAFC)',
          'surface-card': 'var(--color-surface-card, #FFFFFF)',
          'text-main': 'var(--color-text-main, #1E293B)',
          'text-muted': 'var(--color-text-muted, #64748B)',
          border: 'var(--color-border, #E2E8F0)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'elevated': '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
}
