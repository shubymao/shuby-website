import React from 'react';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export interface CodeBoxProp {
  language?: string;
  code?: string;
}

export default function CodeBox(props: CodeBoxProp) {
  const { language, code } = props;
  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {code}
    </SyntaxHighlighter>
  );
}
