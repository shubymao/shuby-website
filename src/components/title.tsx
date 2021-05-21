import React from 'react';

export interface TitleProps {
  name: string;
}

const Title = (props: TitleProps): JSX.Element => {
  const { name } = props;
  return (
    <header>
      <h1 className="mt-12 mb-4 text-4xl md:text-5xl lg:text-6xl">{name}</h1>
    </header>
  );
};

export default Title;
