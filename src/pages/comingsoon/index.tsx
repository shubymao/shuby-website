import Banner from '@components/banner';
import MetaInfo from '@components/meta-info';
import Page from '@components/layout/page';
import { stl } from '@utils/graphics-utils';
import React from 'react';
import Image from 'next/image';

const title = 'More Detail Coming Soon';
const construction = (
  <Image
    alt="misc/construction.svg"
    src="/misc/construction.svg"
    className={stl('w-48 mx-auto')}
    width={400}
    height={400}
  />
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
