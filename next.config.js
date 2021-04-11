module.exports = {
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
