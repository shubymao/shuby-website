import Page from '@components/page';
import React from 'react';
import Banner from '@components/banner';
import Section from '@components/section';
import MetaInfo from '@components/metainfo';
import home from '@data/home.json';
import importSVGWithClass, { stl } from '@utils/graphics-utils';
import CardGrid from '@components/card-grid';
import { generateCards } from '@utils/layout-utils';
import { CARD_SVG_STYLE } from '@styles/styles';
import PageContainer from '@components/container';

const { title, subtitle, mainIcon, intrest, project, education } = home;
const homeIcon = importSVGWithClass(mainIcon, stl('w-32 md:w-48 mx-auto'));
const eduLogo = importSVGWithClass(education.logo, stl('mx-auto md:w-80 w-48'));

export default function Home(): JSX.Element {
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <PageContainer>
          <Banner title={title} subtitle={subtitle} attribution={homeIcon} />
          <Section title={intrest.title}>
            <CardGrid data={intrest.cards} style={CARD_SVG_STYLE} />
          </Section>
          <Section title={project.title}>
            <CardGrid data={project.cards} />
          </Section>
          <Section title={education.title}>
            {eduLogo}
            <Section title={education.Subtitle} alignTitle="center" depth={1}>
              <CardGrid data={education.cards} />
            </Section>
          </Section>
          <Section title="Articles">
            <p>Articles Coming Soon</p>
          </Section>
        </PageContainer>
      </Page>
    </>
  );
}
