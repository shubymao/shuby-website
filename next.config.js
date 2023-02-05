// eslint-disable-next-line @typescript-eslint/no-var-requires

const nextConfig = {
  transpilePackages: ['emailjs-com'],
  publicRuntimeConfig: {
    EMAILJS_USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
    EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  },

  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
