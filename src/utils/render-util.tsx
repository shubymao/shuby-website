import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from 'react';
import { md } from '@constants/page-info';
import { useMediaQuery } from 'react-responsive';
import { stl } from './graphics-utils';

/* eslint-disable */

const DefaultRenderer: any = {
  code: renderCode,
  img,
  pre,
};

export const getLocalizedRederer = (path: string): any => {
  return {
    code: renderCode,
    img: localImage(path),
    pre,
  };
};

function img({ ...props }): JSX.Element {
  return <ImageComponent {...props} />;
}

function localImage(path): (prop: any) => JSX.Element {
  const handler = (prop: any): JSX.Element => {
    const src = path + '/' + prop['src'];
    return <ImageComponent {...prop} src={src} />;
  };
  return handler;
}

function ImageComponent({ ...props }): JSX.Element {
  return <img className="bg-white max-h-screen/2 object-contain" {...props} />;
}

function pre({ ...props }): JSX.Element {
  return <div {...props}></div>;
}

function renderCode({ node, inline, className, children }): JSX.Element {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : undefined;
  const style = inline ? stl('inline') : stl('block');
  const largeScreen = useMediaQuery({ query: md });
  const customStyle = largeScreen
    ? { fontSize: '0.8rem' }
    : { fontSize: '0.7rem' };
  if (inline) return <code className={style}>{children}</code>;
  if (typeof children[0] === 'string')
    children[0] = removeLastLineBreak(children[0]);
  if (!language)
    return (
      <SyntaxHighlighter
        customStyle={customStyle}
        className={style}
        children={children}
        style={tomorrow}
      />
    );
  return (
    <SyntaxHighlighter
      customStyle={customStyle}
      showLineNumbers={true}
      className={style}
      language={language}
      style={tomorrow}
    >
      {children}
    </SyntaxHighlighter>
  );
}

/* eslint-enable */
export default DefaultRenderer;

function removeLastLineBreak(children: string): string {
  if (children.charAt(children.length - 1) !== '\n') return children;
  return children.substring(0, children.length - 1);
}
