import { AttributionStyle, CardData } from '@typeDefs/data';
import { stl } from '@utils/graphics-utils';
import React from 'react';
import Card from '../card/card';
import RevealCard from '../card/reveal-card';

export const CARD_SVG_STYLE: AttributionStyle = {
  contentStyle: stl('h-14 w-14 md:h-16 md:w-16 flex-none object-contain mx-auto'),
  wrapperStyle: stl('p-3 bg-white rounded-2xl block'),
};

export interface CardGridProps {
  data: Array<CardData>;
  attributionStyle?: AttributionStyle;
}

function generateCards(cards: Array<CardData>): Array<JSX.Element> {
  if (cards.length === 0) return [];
  return cards.map((card) => {
    if (card.type === 'reveal') return <RevealCard key={card.title} {...card} />;
    return <Card key={card.title} {...card} />;
  });
}

const CardGrid: React.FC<CardGridProps> = (props) => {
  const { data, attributionStyle } = props;
  data.forEach((item) => {
    if (item.attribution) {
      const { attribution } = item;
      attribution.style = attribution.style || attributionStyle;
    }
  });
  const cards = generateCards(data);
  const gridStyle = stl('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4');
  return <div className={gridStyle}>{cards}</div>;
};

export default CardGrid;
