import { Div } from '@typeDefs/alias';
import React, { LegacyRef } from 'react';

type CardWrapperProp = {
  containerRef?: LegacyRef<Div>;
  style?: string;
  children: React.ReactNode;
};

const CardWrapper = (props: CardWrapperProp) => {
  const { children, style, containerRef } = props;
  return (
    <div ref={containerRef} className={`card-wrapper ${style}`}>
      {children}
    </div>
  );
};

CardWrapper.defaultProps = {
  style: 'py-4 px-5 space-y-4',
  containerRef: undefined,
};
export default CardWrapper;
