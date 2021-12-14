import React, { ReactElement } from 'react';

export interface ButtonProps {
  callBack: () => void;
  status: string;
}

const HamburgerButton = (props: ButtonProps): ReactElement => {
  const { callBack, status } = props;
  return (
    <div className="hamburger-btn" onClick={callBack}>
      <div className="relative w-5 h-4 m-auto trigger">
        <div className={`trig-line trig-top  ${status}`} />
        <div className={`trig-line trig-bottom ${status}`} />
      </div>
    </div>
  );
};

export default HamburgerButton;
