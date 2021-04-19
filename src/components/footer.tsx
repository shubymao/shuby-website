import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FooterLink } from '@typeDefs/data';
import React from 'react';
import { FOOTER_LINKS } from 'src/constants/page-info';
import { HOVER_STLYE } from '@styles/styles';

const FooterItemStyle = 'text-skin-base rounded p-2 ';
const iconSize = 'lg';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const renderFooterLink = (item: FooterLink, index: number) => (
  <a key={`footer-item-${index}`} href={item.url} className="link-item focus:outline-none">
    <FontAwesomeIcon size={iconSize} icon={item.icon} />
  </a>
);

const Footer: React.FC = () => {
  const links = FOOTER_LINKS.map(renderFooterLink);
  return (
    <footer className="footer">
      <div className="main-footer-wrapper w-full sm:w-10/12 md:grid-flow-row-dense">
        <div className="back-top-wrapper col-span-3 sm:col-span-1">
          <button type="button" className="link-item focus:outline-none" onClick={scrollToTop}>
            <FontAwesomeIcon size={iconSize} icon={faArrowUp} />
          </button>
        </div>
        <div className="link-wrapper col-span-3 sm:col-span-2 lg:col-span-1 ">{links}</div>
      </div>
      <p className="text-primary">©2017 - 2021 Shuby Mao, All rights reserved.</p>
    </footer>
  );
};

export default Footer;
