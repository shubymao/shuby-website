import Page from '@components/layout/page';
import React from 'react';
import Banner from '@components/banner';
import Section from '@components/layout/section';
import MetaInfo from '@components/meta-info';
import home from '@data/home.json';
import importSVGWithClass, { stl } from '@utils/graphics-utils';
import CardGrid, { generateCards } from '@components/layout/card-grid';
import PageContainer from '@components/layout/container';
import { getAllProjects } from '@utils/data-access-utils';
import { Project, StaticPropObject } from '@typeDefs/data';
import { HIGHLIGHT_PROJECT } from '@constants/page-info';
import { makeCardDataFromProjects } from '@utils/data-translation-util';
import Image from 'next/image';

interface HomePageProps {
  projects: Project[];
}
const { title, subtitle, mainIcon, interest, experience, education } = home;
const homeIcon = (
  <Image
    width={400}
    height={400}
    alt="Logo"
    className={stl('w-32 md:w-48 h-32 md:h-48 mx-auto')}
    src={mainIcon}
  />
);
const eduLogo = (
  <Image
    width={400}
    height={400}
    alt="Logo"
    className={stl('mx-auto md:w-80 w-48')}
    src={education.logo}
  />
);

const Home = (props: HomePageProps): JSX.Element => {
  const { projects } = props;
  const projectCardData = makeCardDataFromProjects(projects);
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <PageContainer>
          <Banner title={title} subtitle={subtitle} attribution={homeIcon} />
          <Section title={interest.title}>
            <CardGrid>{generateCards(interest.cards)}</CardGrid>
          </Section>
          <Section title={experience.title}>
            <CardGrid>{generateCards(experience.cards)}</CardGrid>
          </Section>
          <Section title={education.title}>
            {eduLogo}
            <Section title={education.Subtitle} alignTitle="center" depth={1}>
              <CardGrid>{generateCards(education.cards)}</CardGrid>
            </Section>
          </Section>
          <Section title="Featured Projects">
            <CardGrid>{generateCards(projectCardData)}</CardGrid>
          </Section>
          <Section title="Articles">
            <p>Articles Coming Soon 🚧</p>
          </Section>
        </PageContainer>
      </Page>
    </>
  );
};

export default Home;

export async function getStaticProps(): Promise<
  StaticPropObject<HomePageProps>
> {
  let projects = getAllProjects(HIGHLIGHT_PROJECT);
  projects = projects.filter((proj) => proj.highlight);
  const props: HomePageProps = { projects };
  return { props };
}
