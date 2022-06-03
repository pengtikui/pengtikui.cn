module.exports = {
  content: ['./pages/**/*.jsx', './shared/**/*.jsx', './styles/**/*.css'],
  darkMode: false,
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
