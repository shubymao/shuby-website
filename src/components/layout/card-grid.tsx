import { AttributionStyle, CardData } from '@typeDefs/data';
import { stl } from '@utils/graphics-utils';
import React, { PropsWithChildren, ReactElement } from 'react';
import Card from '../card/card';
import RevealCard from '../card/reveal-card';

export const CARD_SVG_STYLE: AttributionStyle = {
  contentStyle: stl(
    'h-14 w-14 md:h-16 md:w-16 flex-none object-contain mx-auto',
  ),
  wrapperStyle: stl('p-3 bg-white rounded-2xl block'),
};

export interface CardGridProps {
  gridStyle?: string;
}

export function generateCards(cards: Array<CardData>): Array<JSX.Element> {
  if (cards.length === 0) return [];
  cards.forEach((item) => {
    if (item.attribution) {
      const { attribution } = item;
      attribution.style = attribution.style || CARD_SVG_STYLE;
    }
  });
  return cards.map((card) => {
    const { type, id } = card;
    if (type === 'reveal') return <RevealCard key={id} {...card} />;
    return <Card key={card.title} {...card} />;
  });
}

const CardGrid = (props: PropsWithChildren<CardGridProps>): ReactElement => {
  const { children } = props;
  const {
    gridStyle = stl('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'),
  } = props;

  return <div className={gridStyle}>{children}</div>;
};

export default CardGrid;
