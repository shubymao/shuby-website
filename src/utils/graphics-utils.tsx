import dynamic from 'next/dynamic';
import React, { ComponentType } from 'react';

export default function importSVGWithClass(path: string, className: string): JSX.Element {
  const SVGICON: ComponentType = dynamic(() => import(`../../public/${path}`).then((mod) => mod));
  return (
    <div className={className}>
      <SVGICON />
    </div>
  );
}
