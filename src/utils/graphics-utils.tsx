/* eslint-disable react/display-name */
import React from 'react';
import { Attribution } from '@typeDefs/data';
import Image from 'next/image';

export function stl(style: string): string {
  return style;
}

export function processAttribution(attribution: Attribution): JSX.Element {
  if (!attribution) return null;
  const { path, alt = path, style } = attribution;
  const { contentStyle, wrapperStyle } = style;
  // if (path.includes('.svg'))
  //   return importSVGWithClass(path, contentStyle, wrapperStyle);
  return (
    <div className={wrapperStyle}>
      <Image
        width={100}
        height={100}
        src={path}
        alt={alt}
        className={contentStyle}
      />
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
