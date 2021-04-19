import { Page } from '@typeDefs/data';
import React, { useEffect, useState } from 'react';
import { MAIN_PAGES, HEADER_TITLE, md } from 'src/constants/page-info';
import { stl } from '@utils/graphics-utils';
import { useMediaQuery } from 'react-responsive';
import Icon from '@public/misc/icon-no-background.svg';
import HamburgerButton from './hamburger-btn';

export interface HeaderProps {
  status: string;
  setStatus: (string) => void;
}

const blurStyle: React.CSSProperties = { backdropFilter: 'saturate(180%) blur(20px)' };

export default function Header(props: HeaderProps): JSX.Element {
  const headerStyle = stl('fixed shadow-xl header');
  const largeScreen = useMediaQuery({ query: md });
  const { status, setStatus } = props;
  useEffect(() => {
    if (largeScreen) setStatus('idle');
  }, [largeScreen, setStatus]);
  const callBack = () => setStatus(status === 'open' ? 'close' : 'open');
  return (
    <header style={blurStyle} className={`${headerStyle} ${status}`}>
      <div className="container max-w-6xl flex items-center justify-between mx-auto">
        <HamburgerButton status={status} callBack={callBack} />
        <a href="/" className="flex items-center mx-auto md:mx-3 px-2 space-x-2">
          <Icon height="48px" />
          <p className="sm:block whitespace-nowrap text-xl text-white font-bold">{HEADER_TITLE}</p>
        </a>
        <nav className="hidden md:flex flex-row w-full justify-evenly">
          {MAIN_PAGES.map(renderHeaderItems)}
        </nav>
      </div>
      <div className="flex-grow w-full">
        <div className="h-1 border-b border-gray-600" />
        <nav className="flex flex-col w-full h-full text-center text-white">
          {MAIN_PAGES.map(renderHeaderListItems)}
        </nav>
      </div>
    </header>
  );
}

function renderHeaderItems(item: Page) {
  return (
    <a key={item.name} href={item.url}>
      <div className="py-2 px-3 block text-white">
        <p>{item.name}</p>
      </div>
    </a>
  );
}

function renderHeaderListItems(item: Page) {
  return (
    <div key={item.name} className="py-2 mx-3 block border-b border-gray-600">
      <a href={item.url}>
        <p className="text-lg ">{item.name}</p>
      </a>
    </div>
  );
}
