import React, { useState } from 'react';
import { stl } from '@utils/graphics-utils';

export interface ButtonProps {
  callBack: () => void;
  status: string;
}

const HamburgerButton = (props: ButtonProps) => {
  const { callBack, status } = props;
  const hamburgerLayout = stl('flex md:hidden absolute w-12 h-12 justify-center left-1');
  return (
    <div className={hamburgerLayout} onClick={callBack}>
      <div className="trigger">
        <div className={`trig-line trig-top  ${status}`} />
        <div className={`trig-line trig-bottom ${status}`} />
      </div>
    </div>
  );
};

export default HamburgerButton;
