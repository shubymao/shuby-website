// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['emailjs-com']);

module.exports = withTM({
  publicRuntimeConfig: {
    EMAILJS_USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
    EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  },
  webpack(config) {
    const newConfig = config;
    const existingRules = config.module.rules;
    const ruleWithoutSVG = existingRules.map((rule) => {
      if (rule.test && rule.test.toString().includes('svg')) {
        const test = rule.test
          .toString()
          .replace('svg|', '')
          .replace(/\//g, '');
        return { ...rule, test: new RegExp(test) };
      }
      return rule;
    });
    newConfig.module.rules = [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ['url-loader?limit=100000'],
      },
      ...ruleWithoutSVG,
    ];
    return newConfig;
  },
});
