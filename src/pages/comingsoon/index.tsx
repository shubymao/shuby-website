import Banner from '@components/banner';
import MetaInfo from '@components/meta-info';
import Page from '@components/page';
import importSVGWithClass, { stl } from '@utils/graphics-utils';
import { Container } from 'next/app';
import React from 'react';

const title = 'More Detail Coming Soon';
const construction = importSVGWithClass('construction.svg', stl('w-48 mx-auto'));
export default function ComingSoon(): JSX.Element {
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <Container>
          <Banner title={title} attribution={construction} />
        </Container>
      </Page>
    </>
  );
}
