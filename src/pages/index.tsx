import Page from '@components/page';
import React from 'react';
import Banner from '@components/banner';
import Section from '@components/section';
import MetaInfo from '@components/meta-info';
import home from '@data/home.json';
import importSVGWithClass, { stl } from '@utils/graphics-utils';
import CardGrid from '@components/card-grid';
import { CARD_SVG_STYLE } from '@styles/styles';
import PageContainer from '@components/container';

const { title, subtitle, mainIcon, interest, experience, project, education } = home;
const homeIcon = importSVGWithClass(mainIcon, stl('w-32 md:w-48 mx-auto'), '');
const eduLogo = importSVGWithClass(education.logo, stl('mx-auto md:w-80 w-48'), '');

export default function Home(): JSX.Element {
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <PageContainer>
          <Banner title={title} subtitle={subtitle} attribution={homeIcon} />
          <Section title={interest.title}>
            <CardGrid data={interest.cards} attributionStyle={CARD_SVG_STYLE} />
          </Section>
          <Section title={experience.title}>
            <CardGrid data={experience.cards} attributionStyle={CARD_SVG_STYLE} />
          </Section>
          <Section title={education.title}>
            {eduLogo}
            <Section title={education.Subtitle} alignTitle="center" depth={1}>
              <CardGrid data={education.cards} />
            </Section>
          </Section>
          <Section title={project.title}>
            <CardGrid data={project.cards} />
          </Section>
          <Section title="Articles">
            <p>Articles Coming Soon</p>
          </Section>
        </PageContainer>
      </Page>
    </>
  );
}
