import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FooterLink } from '@typeDefs/data';
import React from 'react';
import { FOOTER_LINKS } from 'src/constants/page-info';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const renderFooterLink = (item: FooterLink, index: number) => (
  <a key={`footer-item-${index}`} href={item.url} className="link-item">
    <FontAwesomeIcon icon={item.icon} />
  </a>
);

const Footer: React.FC = () => {
  const links = FOOTER_LINKS.map(renderFooterLink);
  return (
    <footer className="footer">
      <div className="main-footer-wrapper">
        <div className="back-top-wrapper">
          <button type="button" className="link-item" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
        <div className="link-wrapper">{links}</div>
      </div>
      <p className="copy-rights">©2017 - 2021 Shuby Mao, All rights reserved.</p>
    </footer>
  );
};

export default Footer;
