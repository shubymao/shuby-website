import PageContainer from '@components/layout/container';
import MetaInfo from '@components/meta-info';
import Page from '@components/layout/page';
import React from 'react';
import { getAllProjects } from '@utils/data-access-utils';
import CardGrid from '@components/layout/card-grid';
import { CardData, PageLink, Project } from '@typeDefs/data';
import makePage from '@utils/data-translation-util';
import Section from '@components/layout/section';

const title = 'Projects';

type ProjectPageProps = { projects: Project[] };
type StaticReturnObject = { props: ProjectPageProps };

function makeCardDataFromProjects(projects: Project[]) {
  const cardData = projects.map((project) => {
    const { name, path, github, demo, brief, attributionPath } = project;
    const attribution = attributionPath ? { path: attributionPath } : undefined;
    const links: PageLink[] = [];
    if (path) links.push(makePage('More Detail', path));
    if (github) links.push(makePage('Github', github));
    if (demo) links.push(makePage('Demo', demo));
    const card: CardData = { attribution, links, title: name, description: brief };
    return card;
  });
  return cardData;
}

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

export async function getStaticProps(): Promise<StaticReturnObject> {
  const projects = getAllProjects(['name', 'brief', 'path']);
  const props: ProjectPageProps = { projects };
  return { props };
}
