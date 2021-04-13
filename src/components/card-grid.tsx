import { CardData } from '@typeDefs/component';
import { processAttribution } from '@utils/graphics-utils';
import React from 'react';
import Card from './card';

export interface CardGridProps {
  data: Array<CardData>;
  style?: string;
}

function generateCards(cards: Array<CardData>, style?: string): Array<JSX.Element> {
  if (cards.length === 0) return [];
  return cards.map((card) => {
    const attr = card.attribution;
    const attribution = processAttribution(attr, style);
    const cardProps = { ...card, attribution };
    return <Card key={card.title} {...cardProps} />;
  });
}

const CardGrid: React.FC<CardGridProps> = (props) => {
  const { data, style } = props;
  const cards = generateCards(data, style);
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{cards}</div>;
};

export default CardGrid;
