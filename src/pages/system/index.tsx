import CardGrid, { CARD_SVG_STYLE } from '@components/layout/card-grid';
import PageContainer from '@components/layout/container';
import MetaInfo from '@components/meta-info';
import Page from '@components/layout/page';
import Section from '@components/layout/section';
import Title from '@components/title';
import React from 'react';
import system from '@data/system.json';

const { title, brief, devops, cloud } = system;
const SoftwareSkill = (): JSX.Element => (
  <>
    <MetaInfo pageTitle={title} />
    <Page>
      <PageContainer>
        <Title name={title} />
        <p className="mt-10 text-lg italic">{brief}</p>
        <Section title={devops.title}>
          <CardGrid data={devops.cards} attributionStyle={CARD_SVG_STYLE} />
        </Section>
        <Section title={cloud.title}>
          <CardGrid data={cloud.cards} attributionStyle={CARD_SVG_STYLE} />
        </Section>
      </PageContainer>
    </Page>
  </>
);

export default SoftwareSkill;
