import PageContainer from '@components/layout/container';
import MetaInfo from '@components/meta-info';
import Page from '@components/layout/page';
import React from 'react';
import { getAllProjects } from '@utils/data-access-utils';
import CardGrid from '@components/layout/card-grid';
import { Project, StaticPropObject } from '@typeDefs/data';
import { makeCardDataFromProjects } from '@utils/data-translation-util';
import Section from '@components/layout/section';
import { HIGH_LEVEL_PROJECT } from '@constants/page-info';

const title = 'Projects';

type ProjectPageProps = { projects: Project[] };

export default function ProjectsPage(props: ProjectPageProps): JSX.Element {
  const { projects } = props;
  const cardData = makeCardDataFromProjects(projects);
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <PageContainer>
          <Section title={title}>
            <CardGrid data={cardData} />
          </Section>
        </PageContainer>
      </Page>
    </>
  );
}

export async function getStaticProps(): Promise<StaticPropObject<ProjectPageProps>> {
  const projects = getAllProjects(HIGH_LEVEL_PROJECT);
  const props: ProjectPageProps = { projects };
  return { props };
}
