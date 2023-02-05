import { PageLink } from '@typeDefs/data';
import React, { ReactElement } from 'react';
import { MAIN_PAGES, HEADER_TITLE } from 'src/constants/page-info';
import BlackIcon from '@public/misc/icon-no-background.svg';
import WhiteIcon from '@public/misc/icon-no-background-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export interface NavBarProps {
  drawerStatus: string;
  theme: string;
  toggleTheme: () => void;
}

const NavBar = (props: NavBarProps): ReactElement => {
  const { drawerStatus, theme, toggleTheme } = props;

  return (
    <nav className={`nav-bar ${drawerStatus}`}>
      <div className="main-wrapper">
        <Link href="/" passHref>
          <div className="main-icon">
            {theme === 'dark' ? (
              <WhiteIcon height="48px" />
            ) : (
              <BlackIcon height="48px" />
            )}
            <p className="header-title">{HEADER_TITLE}</p>
          </div>
        </Link>
        <div className="horizontal-nav-list">
          {MAIN_PAGES.map(renderHeaderItems)}
        </div>
        <div className="theme-wrapper">{renderToggle(theme, toggleTheme)}</div>
      </div>
      <div className="drawer">
        <div className="grid-container">
          {MAIN_PAGES.map(renderNavBarListItems)}
        </div>
      </div>
    </nav>
  );
};

function renderHeaderItems(item: PageLink) {
  return (
    <Link className="block px-3 py-2" key={item.name} href={item.url}>
      <span>{item.name}</span>
    </Link>
  );
}

function renderNavBarListItems(item: PageLink) {
  return (
    <Link key={item.name} href={item.url}>
      <div className="drawer-item hover:opacity-80">
        <p className="text-lg">{item.name}</p>
      </div>
    </Link>
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

export default NavBar;
