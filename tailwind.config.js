/* eslint-disable */
const defaultTheme = require('tailwindcss/defaultTheme');
function withOpacity(varName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined)
      return `rgba(var(${varName}),${opacityValue})`;
    return `rgb(var(${varName}))`;
  };
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}', './source-data/**/*.{json,md}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      xsm: '360px',
      ...defaultTheme.screens,
    },
    extend: {
      maxHeight: {
        'screen/4': '25vh',
        'screen/2': '50vh',
        'screen-3/4': '75vh',
      },
      minHeight: {
        'screen/4': '25vh',
        'screen/2': '50vh',
        'screen-3/4': '75vh',
      },
      minWidth: {
        'screen/4': '25vw',
        'screen/2': '50vw',
        'screen-3/4': '75vw',
      },
      colors: {
        base: withOpacity('--color-base'),
        onBase: withOpacity('--color-on-base'),
        surface: withOpacity('--color-surface'),
        onSurface: withOpacity('--color-on-surface'),
        primary: withOpacity('--color-primary'),
        onPrimary: withOpacity('--color-on-primary'),
        secondary: withOpacity('--color-secondary'),
        onSecondary: withOpacity('--color-on-secondary'),
      },
      spacing: {
        18: '4.5rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.onBase'),
            th: { color: theme('colors.onBase') },
            h1: { color: theme('colors.onBase') },
            h2: { color: theme('colors.onBase') },
            h3: { color: theme('colors.onBase') },
            h4: { color: theme('colors.onBase') },
            h5: { color: theme('colors.onBase') },
            h6: { color: theme('colors.onBase') },
            strong: { color: theme('colors.onBase') },
            p: { color: theme('colors.onBase') },
            code: {
              color: theme('colors.onBase'),
              '&::before': {
                display: 'none',
              },
              '&::after': {
                display: 'none',
              },
            },
            a: {
              color: theme('colors.onBase'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            'ul > li::before': {
              'background-color': theme('colors.onBase'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
/* eslint-enable */
