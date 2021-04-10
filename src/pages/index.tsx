import Page from '@components/page';
import React from 'react';
import Banner from '@components/banner';
import Section from '@components/section';
import MetaInfo from '@components/metainfo';
import home from '@constants/home.json';
import { CardProps, generateCards } from '@components/card';
import importSVGWithClass from '@utils/graphics-utils';
import CardGrid from '@components/card-grid';

const homeIcon = importSVGWithClass(home.mainIcon, 'w-48 mx-auto');
const { title } = home;
const { subtitle } = home;
const intrests: Array<CardProps> = home.intrest.map((item) => {
  const attribution = importSVGWithClass(item.icon, 'mx-auto flex-none w-14 md:w-20 ');
  return { attribution, ...item };
});

export default function Home(): JSX.Element {
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <Banner title={title} subtitle={subtitle} attribution={homeIcon} />
        <Section>
          <CardGrid>{generateCards(intrests)}</CardGrid>
        </Section>
      </Page>
    </>
  );
}
