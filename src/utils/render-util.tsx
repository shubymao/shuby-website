import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from 'react';

/* eslint-disable */

const DefaultRenderer: any = {
  code: renderCode,
  img,
};

function img({ ...props }): JSX.Element {
  return <img className="max-h-screen/2 object-contain mx-auto" {...props} />;
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
