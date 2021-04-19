import Footer from '@components/footer';
import Header from '@components/header';
import { md } from '@constants/page-info';
import { toggleBodyLock } from '@utils/layout-utils';
import { getSavedTheme, getNextTheme } from '@utils/graphics-utils';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import HamburgerButton from './hamburger-btn';

export interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = (props) => {
  const { children } = props;
  const largeScreen = useMediaQuery({ query: md });
  const [drawerStatus, updateDrawerStatus] = useState('idle');
  const [theme, setTheme] = useState('light');

  const setDrawerStatus = (st: string) => {
    toggleBodyLock(st === 'open');
    updateDrawerStatus(st);
  };

  useEffect(() => {
    const savedTheme = getSavedTheme();
    if (savedTheme) setTheme(savedTheme);
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

  return (
    <div className={`w-full h-screen ${theme}`}>
      <Header drawerStatus={drawerStatus} theme={theme} toggleTheme={toggleTheme} />
      <div className="w-full flex flex-col min-h-screen justify-between pt-12">
        <div className="flex-grow pb-16 block bg-base">{children}</div>
        <Footer />
      </div>
      <div className="fixed md:hidden w-12 h-12 bottom-5 right-5 rounded-full bg-secondary">
        <HamburgerButton status={drawerStatus} callBack={toggleDrawer} />
      </div>
    </div>
  );
};

export default Page;
