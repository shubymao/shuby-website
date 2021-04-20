import PageContainer from '@components/container';
import MetaInfo from '@components/meta-info';
import Page from '@components/page';
import Title from '@components/title';
import { getAllProjects } from '@utils/data-utils';
import React from 'react';

const title = 'Projects';
export default function ProjectsPage(): JSX.Element {
  const projects = getAllProjects(['title', 'attribution', 'brief', 'github']);
  const cardDatas = projects.map((project) => project);
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
