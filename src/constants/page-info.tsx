import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FooterLink, Page } from '@typeDefs/component';

const resumeURL =
  'https://firebasestorage.googleapis.com/v0/b/shuby-mao.appspot.com/o/shubycv.pdf?alt=media&token=8bad616e-0e7e-411d-b0f6-7118d882681f';

export const MAIN_PAGES: Array<Page> = [
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/comingsoon' },
  { name: 'Articles', url: '/comingsoon' },
  { name: 'Notes', url: '/comingsoon' },
  {
    name: 'Resume',
    url: resumeURL,
  },
  { name: 'Contact', url: '/comingsoon' },
];

export const HEADER_TITLE = 'Shuby Mao';

export const FOOTER_LINKS: Array<FooterLink> = [
  { icon: faLinkedin, url: 'https://www.linkedin.com/in/lelimao/' },
  { icon: faEnvelope, url: 'mailto:shuby@yahoo.ca' },
  { icon: faGithub, url: 'https://github.com/shubymao' },
  { icon: faStackOverflow, url: 'https://stackoverflow.com/users/11721204/shuby-mao?tab=profile' },
];
