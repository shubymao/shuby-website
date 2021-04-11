import getTextAlignClass from '@utils/layout-utils';
import React from 'react';
import { SectionProp } from './section';

const SubSection: React.FC<SectionProp> = (props) => {
  const { title, children, alignTitle } = props;
  const align = getTextAlignClass(alignTitle);
  return (
    <section className="mx-auto w-full pt-4">
      {title && <h3 className={`text-2xl md:text-3xl mb-6 ${align}`}>{title}</h3>}
      {children}
    </section>
  );
};

export default SubSection;
