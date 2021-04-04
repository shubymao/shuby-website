import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FooterLink } from '@typeDefs/footer-link';
import React from 'react';
import { FOOTER_LINKS } from 'src/constants/page-info';
import { HOVER_STLYE } from '@styles/styles';

const FooterItemStyle = 'w-min py-2 px-4 text-xl text-white rounded ';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const renderFooterLink = (item: FooterLink, index: number) => (
  <a key={`footer-item-${index}`} href={item.url} className={FooterItemStyle + HOVER_STLYE}>
    <FontAwesomeIcon icon={item.icon} />
  </a>
);

const Footer: React.FC = () => (
  <footer className="w-full flex flex-col items-center bg-gradient-to-b from-gray-700 to-gray-800">
    <div className="sm:w-10/12 grid grid-cols-3 my-5">
      <div className="col-span-3 sm:col-span-1 flex flex-col items-center">
        <button type="button" className={FooterItemStyle + HOVER_STLYE} onClick={scrollToTop}>
          <p>
            <FontAwesomeIcon icon={faArrowUp} />
          </p>
        </button>
      </div>
      <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex flex-row flex-wrap justify-evenly">
        {FOOTER_LINKS.map(renderFooterLink)}
      </div>
    </div>
    <div className="w-full text-center py-1 text-white bg-gray-800 ">
      <p>©2017 - 2021 Shuby Mao, All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
