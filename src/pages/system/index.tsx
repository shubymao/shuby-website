import CardGrid from '@components/card-grid';
import PageContainer from '@components/container';
import MetaInfo from '@components/meta-info';
import Page from '@components/page';
import Section from '@components/section';
import Title from '@components/title';
import React from 'react';
import system from '@data/system.json';
import { CARD_SVG_STYLE } from '@styles/styles';

const { title, brief, devops, cloud } = system;
export default function SoftwareSkill(): JSX.Element {
  return (
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
}
