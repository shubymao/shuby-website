import CardGrid, { CARD_SVG_STYLE } from '@components/layout/card-grid';
import PageContainer from '@components/layout/container';
import MetaInfo from '@components/meta-info';
import Page from '@components/layout/page';
import Section from '@components/layout/section';
import Title from '@components/title';
import React from 'react';
import software from '@data/software.json';

const { title, brief, languages, web, backend, test, other } = software;
export default function SoftwareSkill(): JSX.Element {
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <PageContainer>
          <Title name={title} />
          <p className="mt-10 text-lg italic">{brief}</p>
          <Section title={languages.title}>
            <CardGrid data={languages.cards} attributionStyle={CARD_SVG_STYLE} />
          </Section>
          <Section title={web.title}>
            <CardGrid data={web.cards} attributionStyle={CARD_SVG_STYLE} />
          </Section>
          <Section title={backend.title}>
            <CardGrid data={backend.cards} attributionStyle={CARD_SVG_STYLE} />
          </Section>
          <Section title={test.title}>
            <CardGrid data={test.cards} attributionStyle={CARD_SVG_STYLE} />
          </Section>
          <Section title={other.title}>
            <CardGrid data={other.cards} attributionStyle={CARD_SVG_STYLE} />
          </Section>
        </PageContainer>
      </Page>
    </>
  );
}
