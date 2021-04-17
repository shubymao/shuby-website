import React from 'react';
import Head from 'next/head';

export interface MetaProps {
  pageTitle: string;
}

const MetaInfo: React.FC<MetaProps> = (props) => {
  const { pageTitle } = props;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="application-name" content={pageTitle} />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
    </Head>
  );
};

export default MetaInfo;
