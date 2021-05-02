import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from 'react';
import { stl } from './graphics-utils';

/* eslint-disable */

const DefaultRenderer: any = {
  code: renderCode,
  img,
  pre,
};

function img({ ...props }): JSX.Element {
  return <img className="max-h-screen/2 object-contain" {...props} />;
}

function pre({ ...props }): JSX.Element {
  return <div {...props}></div>;
}

function renderCode({ node, inline, className, children }): JSX.Element {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : undefined;
  const style = inline ? stl('inline') : stl('block');
  if (inline) return <code className={style}>{children}</code>;
  if (typeof children[0] === 'string') children[0] = removeLastLineBreak(children[0]);
  if (!language) return <SyntaxHighlighter className={style} children={children} style={tomorrow} />;
  return (
    <SyntaxHighlighter className={style} language={language} style={tomorrow}>
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
