import { Page } from '@typeDefs/page';
import React from 'react';
import { MAIN_PAGES, HEADER_TITLE } from 'src/constants/page-info';
import Icon from '@public/icon-no-background.svg';
import { HOVER_STLYE } from '@styles/styles';

export interface HeaderProps {
  title: string;
  logo: JSX.Element;
  items: Array<Page>;
}

const blurStyle: React.CSSProperties = { backdropFilter: 'saturate(180%) blur(20px)' };

export default function Header(): JSX.Element {
  return (
    <header style={blurStyle} className="fixed w-full bg-black bg-opacity-70 items-center shadow-xl">
      <div className="container max-w-5xl flex justify-between mx-auto">
        <a href="#" className={`flex items-center mx-auto md:mx-3 px-2 space-x-2 ${HOVER_STLYE}`}>
          <Icon height="40px" />
          <p className="hidden sm:block whitespace-nowrap text-lg text-white font-bold">{HEADER_TITLE}</p>
        </a>
        <nav className="hidden md:flex flex-row w-full justify-evenly">
          {MAIN_PAGES.map(rederHeaderItems)}
        </nav>
      </div>
    </header>
  );
}

function rederHeaderItems(item: Page, index: number) {
  return (
    <a key={item.name} href={item.url}>
      <div className={`py-2 px-3 block text-white ${HOVER_STLYE}`} key={index}>
        <p>{item.name}</p>
      </div>
    </a>
  );
}
