import CardGrid from '@components/card-grid';
import PageContainer from '@components/container';
import MetaInfo from '@components/metainfo';
import Page from '@components/page';
import Section from '@components/section';
import Title from '@components/title';
import React from 'react';
import software from '@data/software.json';
import { CARD_SVG_LARGE_STYLE } from '@styles/styles';

const { title, brief, languages, web, backend } = software;
export default function SoftwareSkill(): JSX.Element {
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <PageContainer>
          <Title name={title} />
          <p className="mt-10 text-lg italic">{brief}</p>
          <Section title={languages.title}>
            <CardGrid data={languages.cards} style={CARD_SVG_LARGE_STYLE} />
          </Section>
          <Section title={web.title}>
            <CardGrid data={web.cards} style={CARD_SVG_LARGE_STYLE} />
          </Section>
          <Section title={backend.title}>
            <CardGrid data={backend.cards} style={CARD_SVG_LARGE_STYLE} />
          </Section>
          <Section title="Testing Frameworks">
            <p>3</p>
          </Section>
          <Section title="Other Tools">
            <p>3</p>
          </Section>
        </PageContainer>
      </Page>
    </>
  );
}
