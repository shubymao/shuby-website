import { Page } from '@typeDefs/component';
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
    <div className="w-full flex pt-3 space-x-3 border-t">
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
    <div className="md:border-2 md:px-6 py-4 flex flex-col space-y-4 rounded-xl">
      {attribution}
      <div className="sm:max-w-lg space-y-4">
        <h2 className="text-xl">{title}</h2>
        <p>{description}</p>
        {getLinks(links)}
      </div>
    </div>
  );
};

export default Card;
