import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const icons = [
  {
    rel: 'apple-touch-icon',
    prefix: 'apple-touch-icon',
    sizes: ['57', '60', '72', '76', '114', '144', '152', '167', '180'],
  },
  { rel: 'icon', prefix: 'favicon', sizes: ['16', '32', '96', '128', '196'] },
];

const ICON_PATH = '/favicons';

function getFavicons(): Array<JSX.Element> {
  const favicons: Array<JSX.Element> = [];
  const type = 'image/png';
  icons.forEach(({ rel, prefix, sizes }) => {
    sizes.forEach((s) => {
      const size = `${s}x${s}`;
      const href = `${ICON_PATH}/${prefix}-${size}.png`;
      favicons.push(<link rel={rel} type={type} sizes={size} href={href} />);
    });
  });
  return favicons;
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {getFavicons()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
