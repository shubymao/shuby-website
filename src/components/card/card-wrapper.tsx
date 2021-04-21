import React from 'react';

type CardWrapperProp = {
  children?: JSX.Element | Array<JSX.Element>;
  style?: string;
};

const CardWrapper: React.FC<CardWrapperProp> = (props) => {
  const { children, style = 'py-4 px-6 space-y-4' } = props;
  return <div className={`card-wrapper ${style}`}> {children}</div>;
};

export default CardWrapper;
