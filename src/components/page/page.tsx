import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import React from 'react';
import { PageProps } from './pageprops';

const Page: React.FC<PageProps> = (props) => {
  const { children } = props;
  return (
    <div className="w-full">
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-between" style={{ paddingTop: '40px' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
