import CardGrid, { generateCards } from '@components/layout/card-grid';
import PageContainer from '@components/layout/container';
import MetaInfo from '@components/meta-info';
import Page from '@components/layout/page';
import Section from '@components/layout/section';
import Title from '@components/title';
import React from 'react';
import software from '@data/software.json';

const { title, brief, languages, web, backend, test, other } = software;
const SoftwareSkill = (): JSX.Element => (
  <>
    <MetaInfo pageTitle={title} />
    <Page>
      <PageContainer>
        <Title name={title} />
        <p className="mt-10 text-lg italic">{brief}</p>
        <Section title={languages.title}>
          <CardGrid>{generateCards(languages.cards)}</CardGrid>
        </Section>
        <Section title={web.title}>
          <CardGrid>{generateCards(web.cards)}</CardGrid>
        </Section>
        <Section title={backend.title}>
          <CardGrid>{generateCards(backend.cards)}</CardGrid>
        </Section>
        <Section title={test.title}>
          <CardGrid>{generateCards(test.cards)}</CardGrid>
        </Section>
        <Section title={other.title}>
          <CardGrid>{generateCards(other.cards)}</CardGrid>
        </Section>
      </PageContainer>
    </Page>
  </>
);

export default SoftwareSkill;
