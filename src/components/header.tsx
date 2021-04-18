import { Page } from '@typeDefs/component';
import React from 'react';
import { MAIN_PAGES, HEADER_TITLE } from 'src/constants/page-info';
import Icon from '@public/misc/icon-no-background.svg';

export interface HeaderProps {
  title: string;
  logo: JSX.Element;
  items: Array<Page>;
}

const blurStyle: React.CSSProperties = { backdropFilter: 'saturate(180%) blur(20px)' };

export default function Header(): JSX.Element {
  return (
    <header style={blurStyle} className="fixed w-full bg-black bg-opacity-70 items-center shadow-xl">
      <div className="container max-w-6xl flex justify-between mx-auto">
        <a href="/" className="flex items-center mx-auto md:mx-3 px-2 space-x-2">
          <Icon height="40px" />
          <p className="sm:block whitespace-nowrap text-lg text-white font-bold">{HEADER_TITLE}</p>
        </a>
        <nav className="hidden md:flex flex-row w-full justify-evenly">
          {MAIN_PAGES.map(renderHeaderItems)}
        </nav>
      </div>
    </header>
  );
}

function renderHeaderItems(item: Page, index: number) {
  return (
    <a key={item.name} href={item.url}>
      <div className="py-2 px-3 block text-white" key={index}>
        <p>{item.name}</p>
      </div>
    </a>
  );
}
