/* eslint-disable */

function withOpacity(varName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) return `rgba(var(${varName}),${opacityValue})`;
    return `rgb(var(${varName}))`;
  };
}

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        base: withOpacity('--color-on-base'),
        surface: withOpacity('--color-on-surface'),
        primary: withOpacity('--color-on-primary'),
        accent: withOpacity('--color-on-accent'),
        secondary: withOpacity('--color-on-secondary'),
      },
      backgroundColor: {
        base: withOpacity('--color-bg-base'),
        onBase: withOpacity('--color-on-base'),
        surface: withOpacity('--color-bg-surface'),
        onSurface: withOpacity('--color-on-surface'),
        primary: withOpacity('--color-bg-primary'),
        onPrimary: withOpacity('--color-on-primary'),
        accent: withOpacity('--color-bg-accent'),
        onAccent: withOpacity('--color-on-accent'),
        secondary: withOpacity('--color-bg-secondary'),
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
