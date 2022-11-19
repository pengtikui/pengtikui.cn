/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.jsx', './shared/**/*.jsx', './styles/**/*.css'],
  darkMode: 'media',
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: [
            {
              'code::before': {
                display: 'none',
              },
              'code::after': {
                display: 'none',
              },
              'blockquote p:first-of-type::before': {
                display: 'none',
              },
              'blockquote p:last-of-type::after': {
                display: 'none',
              },
              "pre[class*='language-']": {
                fontSize: '14px !important',
              },
              "code[class*='language-']": {
                fontSize: '14px !important',
              },
              'p:first-child > img': {
                marginTop: 0,
                boxShadow: '0 10px 14px rgba(0, 0, 0, 0.2)',
              },
              'p, li': {
                textAlign: 'justify',
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      margin: ['last'],
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
