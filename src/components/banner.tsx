import React from 'react';

export interface BannerProps {
  attribution?: JSX.Element;
  title: string;
  subtitle?: string;
}

const Banner: React.FC<BannerProps> = (props) => {
  const { attribution, title, subtitle } = props;
  return (
    <div className="items-center text-center pt-6 space-y-4">
      {attribution}
      <h1 className="font-normal text-4xl sm:text-5xl md:text-6xl">{title}</h1>
      <h2 className="font-light text-2xl sm:text-3xl md:text-4xl">{subtitle}</h2>
    </div>
  );
};

export default Banner;
