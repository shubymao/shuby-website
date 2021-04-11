import Banner from '@components/banner';
import MetaInfo from '@components/metainfo';
import Page from '@components/page';
import importSVGWithClass from '@utils/graphics-utils';
import React from 'react';

const title = 'Coming Soon';
const construction = importSVGWithClass('construction.svg', 'w-48 mx-auto');
export default function ComingSoon(): JSX.Element {
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <Banner title={title} attribution={construction} />
      </Page>
    </>
  );
}
