/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import React, { ComponentType } from 'react';
import { Attribution } from '@typeDefs/data';
import SkeletonDiv from '@components/widget/skeleton-div';

export function stl(style: string): string {
  return style;
}

function importSVGWithClass(
  path: string,
  svgStyle: string,
  wrapperStyle: string,
): JSX.Element {
  const SVGICON: ComponentType<{ className: string }> = dynamic(
    () => import(`/public/${path}`),
    {
      loading: () => <SkeletonDiv style={svgStyle} />,
    },
  );
  return (
    <div className={wrapperStyle}>
      <SVGICON className={svgStyle} />
    </div>
  );
}

export function processAttribution(attribution: Attribution): JSX.Element {
  if (!attribution) return null;
  const { path, alt, style } = attribution;
  const { contentStyle, wrapperStyle } = style;
  if (path.includes('.svg'))
    return importSVGWithClass(path, contentStyle, wrapperStyle);
  return (
    <div className={wrapperStyle}>
      <img src={path} alt={alt} className={contentStyle} />
    </div>
  );
}

export function getSavedTheme(): string {
  if (typeof window === 'undefined') return 'light';
  return localStorage.getItem('theme') || 'light';
}

export function getNextTheme(theme: string): string {
  if (theme === 'dark') return 'light';
  return 'dark';
}

export default importSVGWithClass;
