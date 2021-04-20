import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from 'react';

/* eslint-disable */

const DefaultRenderer: any = {
  // h1: renderH1,
  // h2: renderH2,
  // h3: renderH3,
  // h4: renderH4,
  // h5: renderH5,
  // h6: renderH6,
  // p: renderP,
  // a: renderA,
  // th: renderTh,
  // td: renderTd,
  code: renderCode,
  // table: renderTable,
};

function renderH1({ node, ...props }): JSX.Element {
  return <h1 className="text-4xl my-4" {...props} />;
}
function renderH2({ node, ...props }): JSX.Element {
  return <h2 className="text-3xl my-3" {...props} />;
}
function renderH3({ node, ...props }): JSX.Element {
  return <h3 className="text-2xl my-2" {...props} />;
}
function renderH4({ node, ...props }): JSX.Element {
  return <h4 className="text-2xl my-1.5" {...props} />;
}
function renderH5({ node, ...props }): JSX.Element {
  return <h5 className="text-xl my-1" {...props} />;
}
function renderH6({ node, ...props }): JSX.Element {
  return <h6 className="text-lg my-0.5" {...props} />;
}
function renderP({ node, ...props }): JSX.Element {
  return <p className="text-base" {...props} />;
}
function renderA({ node, ...props }): JSX.Element {
  return <a className="text-base text-blue-500" {...props} />;
}
function renderCode({ node, className, ...props }): JSX.Element {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : undefined;
  if (!language) return <code {...props} />;
  console.log(language);
  return <SyntaxHighlighter language={language} style={tomorrow} {...props} />;
}
function renderTable({ node, ...props }) {
  return <table className="table-auto" {...props} />;
}
function renderTh({ node, ...props }) {
  return <th className="border border-gray-700 p-2" {...props} />;
}
function renderTd({ node, ...props }) {
  return <th className="border border-gray-700 p-2" {...props} />;
}

/* eslint-enable */
export default DefaultRenderer;
