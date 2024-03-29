import MetaInfo from '@components/meta-info';
import Page from '@components/layout/page';
import React from 'react';
import ContactCard from '@components/card/contact-card';
import { CONTACT_INFORMATION } from '@constants/page-info';
import PageContainer from '@components/layout/container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const title = 'Contact Me';
const ComingSoon = (): JSX.Element => (
  <>
    <MetaInfo pageTitle={title} />
    <Page>
      <PageContainer>
        <div className="h-full text-center grid grid-cols-3 gap-x-5">
          <div className="col-span-3 sm:col-span-1">
            <h1 className="my-4 text-2xl sm:my-7 md:text-3xl">
              Contact Information
            </h1>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4">
              {CONTACT_INFORMATION.map((info) => (
                <div
                  key={info.name}
                  className="text-lg col-span-2 xsm:col-span-1 sm:col-span-2 sm:text-xl"
                >
                  <Link href={info.url}>
                    <FontAwesomeIcon icon={info.icon} />
                    {` ${info.name}`}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3 sm:col-span-2">
            <h1 className="my-4 text-2xl sm:my-7 md:text-3xl">
              Have A Question?
            </h1>
            <ContactCard />
          </div>
        </div>
      </PageContainer>
    </Page>
  </>
);

export default ComingSoon;
