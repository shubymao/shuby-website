import Banner from '@components/banner';
import MetaInfo from '@components/meta-info';
import Page from '@components/layout/page';
import importSVGWithClass, { stl } from '@utils/graphics-utils';
import React from 'react';

const title = 'More Detail Coming Soon';
const construction = importSVGWithClass(
  'misc/construction.svg',
  stl('w-48 mx-auto'),
  '',
);
const ComingSoon = (): JSX.Element => (
  <>
    <MetaInfo pageTitle={title} />
    <Page>
      <div className="m-auto">
        <Banner title={title} attribution={construction} />
      </div>
    </Page>
  </>
);

export default ComingSoon;
