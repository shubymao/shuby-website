import Banner from '@components/banner';
import MetaInfo from '@components/meta-info';
import Page from '@components/page';
import importSVGWithClass, { stl } from '@utils/graphics-utils';
import React from 'react';

const title = 'Page Not Found';
const lighthouse = importSVGWithClass('misc/lighthouse.svg', stl('w-48 mx-auto'));
export default function Custom404(): JSX.Element {
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <div className="mt-20">
          <Banner title="404 Page Not Found" attribution={lighthouse} />
        </div>
      </Page>
    </>
  );
}
