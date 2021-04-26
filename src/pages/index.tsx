import Page from '@components/layout/page';
import React from 'react';
import Banner from '@components/banner';
import Section from '@components/layout/section';
import MetaInfo from '@components/meta-info';
import home from '@data/home.json';
import importSVGWithClass, { stl } from '@utils/graphics-utils';
import CardGrid, { CARD_SVG_STYLE } from '@components/layout/card-grid';
import PageContainer from '@components/layout/container';
import { getAllProjects } from '@utils/data-access-utils';
import { Project, StaticPropObject } from '@typeDefs/data';
import { HIGHLIGHT_PROJECT } from '@constants/page-info';
import { makeCardDataFromProjects } from '@utils/data-translation-util';

interface HomePageProps {
  projects: Project[];
}
const { title, subtitle, mainIcon, interest, experience, education } = home;
const homeIcon = importSVGWithClass(mainIcon, stl('w-32 md:w-48 mx-auto'), '');
const eduLogo = importSVGWithClass(education.logo, stl('mx-auto md:w-80 w-48'), '');

export default function Home(props: HomePageProps): JSX.Element {
  const { projects } = props;
  const projectCardData = makeCardDataFromProjects(projects);
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <PageContainer>
          <Banner title={title} subtitle={subtitle} attribution={homeIcon} />
          <Section title={interest.title}>
            <CardGrid data={interest.cards} />
          </Section>
          <Section title={experience.title}>
            <CardGrid data={experience.cards} />
          </Section>
          <Section title={education.title}>
            {eduLogo}
            <Section title={education.Subtitle} alignTitle="center" depth={1}>
              <CardGrid data={education.cards} />
            </Section>
          </Section>
          <Section title="Featured Projects">
            <CardGrid data={projectCardData} />
          </Section>
          <Section title="Articles">
            <p>Articles Coming Soon</p>
          </Section>
        </PageContainer>
      </Page>
    </>
  );
}

export async function getStaticProps(): Promise<StaticPropObject<HomePageProps>> {
  let projects = getAllProjects(HIGHLIGHT_PROJECT);
  projects = projects.filter((proj) => proj.highlight);
  const props: HomePageProps = { projects };
  return { props };
}
