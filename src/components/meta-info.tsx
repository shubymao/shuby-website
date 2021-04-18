import React from 'react';
import Head from 'next/head';

export interface MetaProps {
  pageTitle: string;
  description?: string;
}

const MetaInfo: React.FC<MetaProps> = (props) => {
  const { pageTitle, description = 'A website about Shuby Mao.' } = props;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="application-name" content={pageTitle} />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default MetaInfo;
