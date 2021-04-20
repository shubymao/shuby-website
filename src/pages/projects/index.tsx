import PageContainer from '@components/container';
import MetaInfo from '@components/meta-info';
import Page from '@components/page';
import Title from '@components/title';
import { getAllProjects } from '@utils/data-utils';
import React from 'react';

const title = 'Projects';
export default function ProjectsPage(): JSX.Element {
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
