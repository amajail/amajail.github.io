/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:            '#f8fafc',
        surface:       '#ffffff',
        'surface-2':   '#f1f5f9',
        accent:        '#1d4ed8',
        'accent-h':    '#1e40af',
        'accent-2':    '#0891b2',
        'text-primary':'#0f172a',
        muted:         '#64748b',
        border:        '#e2e8f0',
        'border-2':    '#cbd5e1',
      },
      fontFamily: {
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.04)',
        'card-hover': '0 4px 16px rgba(0,0,0,.10)',
        'btn': '0 4px 12px rgba(29,78,216,.25)',
        'btn-hover': '0 6px 20px rgba(29,78,216,.35)',
      },
    },
  },
  plugins: [],
};
