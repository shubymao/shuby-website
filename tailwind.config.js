/* eslint-disable */

function withOpacity(varName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) return `rgba(var(${varName}),${opacityValue})`;
    return `rgb(var(${varName}))`;
  };
}

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx,css}', './source-data/**/*.{json,md}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        base: withOpacity('--color-base'),
        onBase: withOpacity('--color-on-base'),
        surface: withOpacity('--color-surface'),
        onSurface: withOpacity('--color-on-surface'),
        primary: withOpacity('--color-primary'),
        onPrimary: withOpacity('--color-on-primary'),
        secondary: withOpacity('--color-secondary'),
        onSecondary: withOpacity('--color-on-secondary'),
      },
      backgroundColor: {
        base: withOpacity('--color-base'),
        onBase: withOpacity('--color-on-base'),
        surface: withOpacity('--color-surface'),
        onSurface: withOpacity('--color-on-surface'),
        primary: withOpacity('--color-primary'),
        onPrimary: withOpacity('--color-on-primary'),
        secondary: withOpacity('--color-secondary'),
        onSecondary: withOpacity('--color-on-secondary'),
      },
      borderColor: {
        base: withOpacity('--color-base'),
        onBase: withOpacity('--color-on-base'),
        surface: withOpacity('--color-surface'),
        onSurface: withOpacity('--color-on-surface'),
        primary: withOpacity('--color-primary'),
        onPrimary: withOpacity('--color-on-primary'),
        secondary: withOpacity('--color-secondary'),
        onSecondary: withOpacity('--color-on-secondary'),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
/* eslint-enable */
