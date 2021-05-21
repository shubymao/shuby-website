import React from 'react';

export interface ContainerProps {
  children: JSX.Element | Array<JSX.Element>;
}

function PageContainer(props: ContainerProps): JSX.Element {
  const { children } = props;
  return <div className="flex-grow w-full px-5 pb-12 mx-auto md:w-10/12">{children}</div>;
}

export default PageContainer;
