import { alignment } from '@typeDefs/layout';
import getTextAlignClass from '@utils/layout-utils';
import React, { PropsWithChildren, useRef } from 'react';

export interface SectionProp {
  title?: string;
  alignTitle?: alignment;
  depth?: 0 | 1 | 2;
}

const SECTION_STYLE = [
  { padding: 'pt-10', margin: 'mb-6', mobile: 'text-3xl', size: 'md:text-5xl' },
  { padding: 'pt-6', margin: 'mb-4', mobile: 'text-2xl', size: 'md:text-4xl' },
  { padding: 'pt-4', margin: 'mb-4', mobile: 'text-2xl', size: 'md:text-3xl' },
];

const Section = (props: PropsWithChildren<SectionProp>) => {
  const { title, children, alignTitle, depth = 0 } = props;
  const align = getTextAlignClass(alignTitle);
  const { size, mobile, margin, padding } = SECTION_STYLE[depth];
  const sectionRef = useRef<HTMLElement>();

  return (
    <section ref={sectionRef} className={`section-wrapper w-full ${padding}`}>
      {title && (
        <h2 className={`${mobile} ${size} ${margin} ${align}`}>{title}</h2>
      )}
      {children}
    </section>
  );
};

export default Section;
