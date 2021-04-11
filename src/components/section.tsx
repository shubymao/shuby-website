import { alignment } from '@typeDefs/layout';
import getTextAlignClass from '@utils/layout-utils';
import React from 'react';

export interface SectionProp {
  title?: string;
  children?: JSX.Element | Array<JSX.Element>;
  alignTitle?: alignment;
}

const Section: React.FC<SectionProp> = (props) => {
  const { title, children, alignTitle } = props;
  const align = getTextAlignClass(alignTitle);
  return (
    <section className="mx-auto w-full md:max-w-4xl lg:max-w-5xl pt-8 px-3">
      {title && <h2 className={`text-3xl md:text-4xl mb-6 ${align}`}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
