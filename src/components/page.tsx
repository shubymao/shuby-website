import Footer from '@components/footer';
import Header from '@components/header';
import React, { useState } from 'react';

export interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = (props) => {
  const { children } = props;
  const [status, setStatus] = useState('idle');
  return (
    <div className="w-full h-screen">
      <Header status={status} setStatus={setStatus} />
      <div className="w-full h-screen flex flex-col justify-between pt-12">
        <div className="flex-grow pb-16 block">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
