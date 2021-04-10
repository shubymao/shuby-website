import React from 'react';

export interface SectionProp {
  title?: string;
  children: JSX.Element;
}

const Section: React.FC<SectionProp> = (props) => {
  const { title, children } = props;
  return (
    <section className="mx-auto text-center md:max-w-4xl lg:max-w-5xl">
      {title && <h2 className="text-3xl md:text-4xl mb-4">{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
