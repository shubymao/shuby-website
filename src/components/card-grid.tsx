import { AttributionStyle, CardData } from '@typeDefs/data';
import React from 'react';
import Card from './card';
import RevealCard from './reveal-card';

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
      attribution.style = attribution.style ? attribution.style : attributionStyle;
    }
  });
  const cards = generateCards(data);
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{cards}</div>;
};

export default CardGrid;
