import React, { ReactNode } from 'react';
import { stl } from '@utils/graphics-utils';

type SkeletonDivProps = {
  style: string;
};

const SkeletonDiv = (props: SkeletonDivProps): JSX.Element => {
  const { style } = props;
  return <div className={stl(`${style} rounded-full loading-animation`)}> </div>;
};

export default SkeletonDiv;
