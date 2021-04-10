import { Page } from '@typeDefs/page';
import React from 'react';

export interface CardProps {
  attribution?: JSX.Element;
  title: string;
  description: string;
  links?: Array<Page>;
}

const getLinks = (links: Array<Page>) => {
  if (!links || links.length === 0) return null;
  return (
    <div className="w-full py-3 flex flex-row-reverse border-t">
      {links.map((link) => (
        <a key={link.name} href={link.url}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

const Card: React.FC<CardProps> = (props) => {
  const { attribution, title, description, links } = props;
  return (
    <div className="md:border-2 px-6 pt-4 flex flex-col justify-between rounded-xl">
      <div className="text-center flex flex-col items-center pb-3">
        {attribution}
        <div className="mt-2 sm:max-w-lg md:px-2 space-y-2">
          <h2 className="text-xl">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {getLinks(links)}
    </div>
  );
};

export const generateCards = (cards: Array<CardProps>): Array<JSX.Element> => {
  if (cards.length === 0) return [];
  return cards.map((card) => <Card key={card.title} {...card} />);
};

export default Card;
