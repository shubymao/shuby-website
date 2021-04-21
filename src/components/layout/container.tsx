import React from 'react';

export interface ContainerProps {
  children: JSX.Element | Array<JSX.Element>;
}

function PageContainer(props: ContainerProps): JSX.Element {
  const { children } = props;
  return <div className="mx-auto px-5 w-full md:w-10/12">{children}</div>;
}

export default PageContainer;
