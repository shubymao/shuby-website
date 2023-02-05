import { PageLink } from '@typeDefs/data';
import { processAttribution } from '@utils/graphics-utils';
import Link from 'next/link';
import React from 'react';
import CardWrapper from './card-wrapper';

const getLinks = (links: Array<PageLink>) => {
  if (!links || links.length === 0) return null;
  return (
    <div className="links-container">
      {links.map((link) => (
        <Link
          className="mx-1 whitespace-nowrap"
          key={link.name}
          href={link.url}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

const Card = (props): JSX.Element => {
  const { attribution, title, description, links } = props;
  const attributionComponent = processAttribution(attribution);
  return (
    <CardWrapper>
      {attributionComponent}
      <div className="card-body">
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
