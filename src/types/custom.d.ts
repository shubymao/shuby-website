/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  import { SVGProps } from 'react';

  const element: (props: SVGProps) => JSX.Element;
  export default element;
}
