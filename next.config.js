module.exports = {
  publicRuntimeConfig: {
    EMAILJS_USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
    EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
  },
  future: {
    webpack5: true,
  },
  webpack(config) {
    const conf = config;
    conf.module.rules = [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ['url-loader?limit=100000'],
      },
      ...config.module.rules,
    ];
    return config;
  },
};
