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
      <div className="w-full min-h-screen flex flex-col pb-16" style={{ paddingTop: '40px' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
