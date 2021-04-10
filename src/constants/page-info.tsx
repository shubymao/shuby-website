import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FooterLink } from '@typeDefs/footer-link';
import { Page } from '@typeDefs/page';

export const MAIN_PAGES: Array<Page> = [
  { name: 'Home', url: '#' },
  { name: 'Projects', url: '#' },
  { name: 'Articles', url: '#' },
  { name: 'Notes', url: '#' },
  { name: 'Resume', url: '#' },
  { name: 'Contact', url: '#' },
];

export const HEADER_TITLE = 'Shuby Mao';

export const FOOTER_LINKS: Array<FooterLink> = [
  { icon: faLinkedin, url: 'https://www.linkedin.com/in/lelimao/' },
  { icon: faEnvelope, url: 'mailto:shuby@yahoo.ca' },
  { icon: faGithub, url: 'https://github.com/shubymao' },
  { icon: faStackOverflow, url: 'https://stackoverflow.com/users/11721204/shuby-mao?tab=profile' },
];
