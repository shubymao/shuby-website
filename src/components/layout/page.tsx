import Footer from '@components/footer/footer';
import NavBar from '@components/nav-bar/nav-bar';
import { md } from '@constants/page-info';
import { toggleBodyLock } from '@utils/layout-utils';
import { getSavedTheme, getNextTheme } from '@utils/graphics-utils';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import HamburgerButton from '../widget/hamburger-btn/hamburger-btn';

export interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = (props) => {
  const { children } = props;
  const largeScreen = useMediaQuery({ query: md });
  const [drawerStatus, updateDrawerStatus] = useState('idle');
  const [theme, setTheme] = useState('undefined');
  const [isLoaded, setIsLoaded] = useState(false);
  const setDrawerStatus = (st: string) => {
    toggleBodyLock(st === 'open');
    updateDrawerStatus(st);
  };

  useEffect(() => {
    const savedTheme = getSavedTheme();
    setTheme(savedTheme);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (largeScreen) {
      setDrawerStatus('idle');
      toggleBodyLock(false);
    }
  }, [largeScreen]);

  const toggleDrawer = () => {
    setDrawerStatus(drawerStatus === 'open' ? 'close' : 'open');
  };

  const toggleTheme = () => {
    const nextTheme = getNextTheme(theme);
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  return isLoaded ? (
    <div className={`w-full h-screen ${theme}`}>
      <NavBar drawerStatus={drawerStatus} theme={theme} toggleTheme={toggleTheme} />
      <div className="w-full flex flex-col min-h-screen justify-between pt-12">
        <div className="flex-grow pb-16 block bg-base">{children}</div>
        <Footer />
      </div>
      <HamburgerButton status={drawerStatus} callBack={toggleDrawer} />
    </div>
  ) : (
    <div className="w-screen h-screen bg-black" />
  );
};

export default Page;