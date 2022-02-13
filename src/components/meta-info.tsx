import React, { ReactElement } from 'react';
import Head from 'next/head';
import {
  ogDefaultDescription,
  ogDefaultPreviewURL,
} from '@constants/page-info';

export interface MetaProps {
  pageTitle: string;
  ogDescription?: string;
  ogPreviewURL?: string;
}

const MetaInfo = (props: MetaProps): ReactElement => {
  const { pageTitle, ogDescription, ogPreviewURL } = props;
  const previewURL = ogPreviewURL || ogDefaultPreviewURL;
  const description = ogDescription || ogDefaultDescription;
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
      <meta property="og:image" content={previewURL} />
    </Head>
  );
};

export default MetaInfo;
