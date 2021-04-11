import React from 'react';
import Card from '@components/card';
import { CardData } from '@typeDefs/component';
import { alignment } from '@typeDefs/layout';
import { processAttribution } from './graphics-utils';

export default function getTextAlignClass(align?: alignment): string {
  if (!align) return '';
  if (align === 'center') return 'text-center';
  if (align === 'left') return 'text-left';
  return 'text-right';
}

export function generateCards(cards: Array<CardData>, style?: string): Array<JSX.Element> {
  if (cards.length === 0) return [];
  return cards.map((card) => {
    const attr = card.attribution;
    const attribution = processAttribution(attr, style);
    const cardProps = { ...card, attribution };
    return <Card key={card.title} {...cardProps} />;
  });
}
