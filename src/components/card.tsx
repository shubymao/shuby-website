import { CardData, Page } from '@typeDefs/data';
import { processAttribution } from '@utils/graphics-utils';
import React from 'react';

const getLinks = (links: Array<Page>) => {
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
  const { attribution, attributionStyle, title, description, links } = props;
  const attributionComponent = processAttribution(attribution, attributionStyle);
  return (
    <div className="border-2 px-6 py-4 flex flex-col space-y-4 rounded-xl shadow-md">
      {attributionComponent}
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-2 pb-3">
          <h2 className="text-xl">{title}</h2>
          <p>{description}</p>
        </div>
        {getLinks(links)}
      </div>
    </div>
  );
};

export default Card;
