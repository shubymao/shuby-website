import React, { FC } from 'react';

export interface BannerProps {
  attribution?: JSX.Element;
  title: string;
  subtitle?: string;
}

const Banner: FC<BannerProps> = (props) => {
  const { attribution, title, subtitle } = props;
  return (
    <div className="items-center pt-6 text-center banner-wrapper space-y-4">
      {attribution}
      <h1 className="text-4xl font-normal sm:text-5xl md:text-6xl">{title}</h1>
      <h2 className="text-2xl font-light sm:text-3xl md:text-4xl">{subtitle}</h2>
    </div>
  );
};

export default Banner;
