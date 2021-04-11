import Page from '@components/page';
import React from 'react';
import Banner from '@components/banner';
import Section from '@components/section';
import MetaInfo from '@components/metainfo';
import home from '@data/home.json';
import importSVGWithClass from '@utils/graphics-utils';
import CardGrid from '@components/card-grid';
import SubSection from '@components/subsection';
import { generateCards } from '@utils/layout-utils';
import { CARD_SVG_STYLE } from '@styles/styles';

const { title, subtitle, mainIcon, intrest, project, education } = home;
const homeIcon = importSVGWithClass(mainIcon, 'w-48 mx-auto');
const eduLogo = importSVGWithClass(education.logo, 'mx-auto md:w-80 w-48');

export default function Home(): JSX.Element {
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <Banner title={title} subtitle={subtitle} attribution={homeIcon} />
        <Section title={intrest.title}>
          <CardGrid>{generateCards(intrest.cards, CARD_SVG_STYLE)}</CardGrid>
        </Section>
        <Section title={project.title}>
          <CardGrid>{generateCards(project.cards)}</CardGrid>
        </Section>
        <Section title={education.title}>
          {eduLogo}
          <SubSection title={education.Subtitle} alignTitle="center">
            <CardGrid>{generateCards(education.cards)}</CardGrid>
          </SubSection>
        </Section>
        <Section title="Articles">
          <p>Articles Coming Soon</p>
        </Section>
      </Page>
    </>
  );
}
