import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
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

function getFavIcons(): Array<JSX.Element> {
  const favicons: Array<JSX.Element> = [];
  const type = 'image/png';
  icons.forEach(({ rel, prefix, sizes }) => {
    sizes.forEach((s) => {
      const size = `${s}x${s}`;
      const href = `${ICON_PATH}/${prefix}-${size}.png`;
      favicons.push(<link key={href} rel={rel} type={type} sizes={size} href={href} />);
    });
  });
  return favicons;
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>{getFavIcons()}</Head>
        <body className="overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
