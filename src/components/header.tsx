import { Page } from '@typeDefs/data';
import React from 'react';
import { MAIN_PAGES, HEADER_TITLE } from 'src/constants/page-info';
import Icon from '@public/misc/icon-no-background.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export interface HeaderProps {
  drawerStatus: string;
  theme: string;
  toggleTheme: () => void;
}

export default function Header(props: HeaderProps): JSX.Element {
  const { drawerStatus, theme, toggleTheme } = props;

  return (
    <header className={`header ${drawerStatus}`}>
      <div className="main-wrapper items-stretch">
        <a href="/" className="flex items-center mx-auto md:mx-3 px-2 space-x-2">
          <Icon height="48px" />
          <p className="sm:block whitespace-nowrap text-xl font-bold">{HEADER_TITLE}</p>
        </a>
        <nav className="hidden md:flex flex-row w-full justify-evenly">
          {MAIN_PAGES.map(renderHeaderItems)}
        </nav>
        <div className="absolute md:relative right-2 flex flex-row items-center">
          <div className="cursor-pointer" onClick={toggleTheme}>
            {theme === 'light' ? (
              <FontAwesomeIcon size="2x" icon={faMoon} />
            ) : (
              <FontAwesomeIcon size="2x" icon={faSun} />
            )}
          </div>
        </div>
      </div>
      <div className="flex-grow w-full">
        <div className="h-1" />
        <nav className="grid grid-cols-2 auto-rows-fr w-full p-4 gap-5 h-full text-center">
          {MAIN_PAGES.map(renderHeaderListItems)}
        </nav>
      </div>
    </header>
  );
}

function renderHeaderItems(item: Page) {
  return (
    <a key={item.name} href={item.url}>
      <div className="py-2 px-3 block">
        <p>{item.name}</p>
      </div>
    </a>
  );
}

function renderHeaderListItems(item: Page) {
  return (
    <a key={item.name} href={item.url}>
      <div className="drawer-item hover:opacity-80">
        <p className="text-lg">{item.name}</p>
      </div>
    </a>
  );
}
