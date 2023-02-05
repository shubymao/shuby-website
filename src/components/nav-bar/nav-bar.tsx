import { PageLink } from '@typeDefs/data';
import React, { ReactElement } from 'react';
import { MAIN_PAGES, HEADER_TITLE } from 'src/constants/page-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

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
        <Link href="/" className="main-icon">
          <div className="main-icon">
            {theme === 'dark' ? (
              <Image
                width={48}
                height={48}
                alt="Logo"
                src="/misc/icon-no-background-white.svg"
              />
            ) : (
              <Image
                width={48}
                height={48}
                alt="Logo"
                src="/misc/icon-no-background.svg"
              />
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
