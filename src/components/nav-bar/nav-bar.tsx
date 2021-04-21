import { PageLink } from '@typeDefs/data';
import React from 'react';
import { MAIN_PAGES, HEADER_TITLE } from 'src/constants/page-info';
import BlackIcon from '@public/misc/icon-no-background.svg';
import WhiteIcon from '@public/misc/icon-no-background-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export interface NavBarProps {
  drawerStatus: string;
  theme: string;
  toggleTheme: () => void;
}

export default function NavBar(props: NavBarProps): JSX.Element {
  const { drawerStatus, theme, toggleTheme } = props;

  return (
    <nav className={`nav-bar ${drawerStatus}`}>
      <div className="main-wrapper">
        <a href="/" className="flex items-center mx-auto md:mx-3 px-2 space-x-2 hover:text-onBase">
          {theme === 'dark' ? <WhiteIcon height="48px" /> : <BlackIcon height="48px" />}
          <p className="sm:block whitespace-nowrap text-xl font-bold">{HEADER_TITLE}</p>
        </a>
        <div className="hidden md:flex flex-row w-full justify-evenly">
          {MAIN_PAGES.map(renderHeaderItems)}
        </div>
        <div className="absolute md:relative right-2">{renderToggle(theme, toggleTheme)}</div>
      </div>
      <div className="drawer">
        <div className="grid grid-cols-2 w-full p-4 gap-5 text-center">
          {MAIN_PAGES.map(renderNavBarListItems)}
        </div>
      </div>
    </nav>
  );
}

function renderHeaderItems(item: PageLink) {
  return (
    <a className="py-2 px-3 block" key={item.name} href={item.url}>
      <span>{item.name}</span>
    </a>
  );
}

function renderNavBarListItems(item: PageLink) {
  return (
    <a key={item.name} href={item.url}>
      <div className="drawer-item hover:opacity-80">
        <p className="text-lg">{item.name}</p>
      </div>
    </a>
  );
}

function renderToggle(theme: string, toggleTheme: () => void) {
  return (
    <div className="cursor-pointer hover:text-primary" onClick={toggleTheme}>
      {theme === 'light' ? (
        <FontAwesomeIcon size="2x" icon={faMoon} />
      ) : (
        <FontAwesomeIcon size="2x" icon={faSun} />
      )}
    </div>
  );
}
