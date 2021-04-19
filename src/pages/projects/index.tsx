import PageContainer from '@components/container';
import MetaInfo from '@components/meta-info';
import Page from '@components/page';
import Title from '@components/title';
import React from 'react';

const title = 'Projects';
export default function SoftwareSkill(): JSX.Element {
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <PageContainer>
          <Title name={title} />
        </PageContainer>
      </Page>
    </>
  );
}
