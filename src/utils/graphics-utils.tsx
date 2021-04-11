import dynamic from 'next/dynamic';
import React, { ComponentType } from 'react';
import { Attribution } from '@typeDefs/component';

export function stl(style: string): string {
  return style;
}

export default function importSVGWithClass(path: string, className: string): JSX.Element {
  const SVGICON: ComponentType = dynamic(() => import(`../../public/${path}`).then((mod) => mod));
  return (
    <div className={className}>
      <SVGICON />
    </div>
  );
}

export function processAttribution(attribution: Attribution, style: string): JSX.Element {
  if (!attribution) return null;
  const { path, alt } = attribution;
  if (path.includes('.svg')) return importSVGWithClass(path, style);
  return (
    <div className={style}>
      <img src={path} alt={alt} />
    </div>
  );
}
