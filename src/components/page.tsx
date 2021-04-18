import Footer from '@components/footer';
import Header from '@components/header';
import React from 'react';

export interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = (props) => {
  const { children } = props;
  const padTop = { paddingTop: '40px' };
  return (
    <div className="w-full">
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-between" style={padTop}>
        <div className="flex-grow pb-16 block">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
