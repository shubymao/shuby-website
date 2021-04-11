import Footer from '@components/footer';
import Header from '@components/header';
import React from 'react';

export interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = (props) => {
  const { children } = props;
  return (
    <div className="w-full">
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-between" style={{ paddingTop: '40px' }}>
        <div className="pb-16">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
