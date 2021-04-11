import React from 'react';

export interface CardGridProps {
  children: JSX.Element | Array<JSX.Element>;
}

const CardGrid: React.FC<CardGridProps> = (props) => {
  const { children } = props;
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>;
};

export default CardGrid;
