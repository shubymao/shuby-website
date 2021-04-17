import { CardData } from '@typeDefs/component';
import React from 'react';
import Card from './card';
import RevealCard from './reveal-card';

export interface CardGridProps {
  attributionStyle?: string;
  data: Array<CardData>;
}

function generateCards(cards: Array<CardData>, attributionStyle?: string): Array<JSX.Element> {
  if (cards.length === 0) return [];
  return cards.map((card) => {
    const props = card;
    if (!card.attributionStyle) props.attributionStyle = attributionStyle;
    if (card.type === 'reveal') return <RevealCard key={card.title} {...card} />;
    return <Card key={card.title} {...card} />;
  });
}

const CardGrid: React.FC<CardGridProps> = (props) => {
  const { data, attributionStyle } = props;
  const cards = generateCards(data, attributionStyle);
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{cards}</div>;
};

export default CardGrid;
