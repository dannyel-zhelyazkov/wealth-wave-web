import variables from '@mertasan/tailwindcss-variables'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.ts.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#8ECAE6',
        secondary: '#023047',
        tertiary: '#219EBC',
        success: '#ECFEAA',
        alert: '#FFB703',
        error: '#EF626C',
        info: '#FB8500',
      },
      fontSize: {
        body: ['16px', { fontWeight: '400' }],
        'body-sm': ['14px', { fontWeight: '400' }],
        button: ['16px', { fontWeight: '500' }],
        label: ['14px', { fontWeight: '400' }],
        'label-sm': ['12px', { fontWeight: '400' }],
      },
    },
  },
  plugins: [
    variables,
    plugin(({ addComponents, addBase, theme }) => {
      addBase({
        h1: { fontSize: '32px', fontWeight: '700' },
        h2: { fontSize: '28px', fontWeight: '600' },
        h3: { fontSize: '24px', fontWeight: '500' },
      })
    }),
  ],
}
