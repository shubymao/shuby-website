import { CardData, PageLink } from '@typeDefs/data';
import { processAttribution } from '@utils/graphics-utils';
import React from 'react';
import CardWrapper from './card-wrapper';

const getLinks = (links: Array<PageLink>) => {
  if (!links || links.length === 0) return null;
  return (
    <div className="w-full flex flex-row-reverse pt-3 border-t">
      {links.map((link) => (
        <a className="ml-4" key={link.name} href={link.url}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

const Card: React.FC<CardData> = (props) => {
  const { attribution, title, description, links } = props;
  const attributionComponent = processAttribution(attribution);
  return (
    <CardWrapper>
      {attributionComponent}
      <div className="flex flex-col w-full h-full justify-between space-y-3">
        <div className="space-y-2">
          <h2 className="text-xl">{title}</h2>
          <p>{description}</p>
        </div>
        {getLinks(links)}
      </div>
    </CardWrapper>
  );
};

export default Card;
