import { Div } from '@typeDefs/alias';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';

type CardWrapperProp = {
  children?: JSX.Element | Array<JSX.Element>;
  style?: string;
};

const RenderCardWrapperWithRef: ForwardRefRenderFunction<Div, CardWrapperProp> = (props, ref) => {
  const { children, style = 'py-4 px-5 space-y-4' } = props;
  return (
    <div ref={ref} className={`card-wrapper ${style}`}>
      {children}
    </div>
  );
};

const CardWrapper = forwardRef(RenderCardWrapperWithRef);
export default CardWrapper;
