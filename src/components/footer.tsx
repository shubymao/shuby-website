import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FooterLink } from '@typeDefs/component';
import React from 'react';
import { FOOTER_LINKS } from 'src/constants/page-info';
import { HOVER_STLYE } from '@styles/styles';

const FooterItemStyle = 'text-white rounded p-2 ';
const iconSize = 'lg';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const renderFooterLink = (item: FooterLink, index: number) => (
  <a key={`footer-item-${index}`} href={item.url} className={FooterItemStyle + HOVER_STLYE}>
    <FontAwesomeIcon size={iconSize} icon={item.icon} />
  </a>
);

const Footer: React.FC = () => (
  <footer className="w-full flex flex-col items-center bg-gray-700">
    <div className="sm:w-10/12 grid grid-cols-3 my-5">
      <div className="col-span-3 sm:col-span-1 flex flex-col items-center">
        <button type="button" className={FooterItemStyle + HOVER_STLYE} onClick={scrollToTop}>
          <FontAwesomeIcon size={iconSize} icon={faArrowUp} />
        </button>
      </div>
      <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex flex-row flex-wrap justify-evenly">
        {FOOTER_LINKS.map(renderFooterLink)}
      </div>
    </div>
    <p className="text-white">©2017 - 2021 Shuby Mao, All rights reserved.</p>
  </footer>
);

export default Footer;
