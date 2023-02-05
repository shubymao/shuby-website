import Banner from '@components/banner';
import MetaInfo from '@components/meta-info';
import Page from '@components/layout/page';
import { stl } from '@utils/graphics-utils';
import React from 'react';
import Image from 'next/image';

const title = 'Page Not Found';
const lighthouse = (
  <Image
    alt="/misc/lighthouse.svg"
    src="/misc/lighthouse.svg"
    className={stl('w-48 mx-auto')}
    width={400}
    height={400}
  />
);
const Custom404 = () => (
  <>
    <MetaInfo pageTitle={title} />
    <Page>
      <div className="mt-20">
        <Banner title="404 Page Not Found" attribution={lighthouse} />
      </div>
    </Page>
  </>
);

export default Custom404;
