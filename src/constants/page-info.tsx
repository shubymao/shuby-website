import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FooterLink, PageLink } from '@typeDefs/data';

export const resumeURL =
  'https://firebasestorage.googleapis.com/v0/b/shuby-mao.appspot.com/o/shubycv.pdf?alt=media&token=8bad616e-0e7e-411d-b0f6-7118d882681f';

export const ogDefaultPreviewURL =
  'https://firebasestorage.googleapis.com/v0/b/shuby-mao.appspot.com/o/preview.png?alt=media&token=ba1e5506-8f53-41e9-8cf2-20b356f3cb43';

export const ogDefaultDescription = 'A website highlighting Shuby Mao.';

export const TIME_FORMAT: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

export const sm = '(min-width: 640px)';
export const md = '(min-width: 768px)';
export const lg = '(min-width: 1024px)';
export const xl = '(min-width: 1280px)';
export const xl2 = '(min-width: 1536px)';

export const MAIN_PAGES: Array<PageLink> = [
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/projects' },
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

export const BASIC_PROJECT = ['name', 'date', 'brief', 'path', 'github', 'demo'];
export const HIGH_LEVEL_PROJECT = [...BASIC_PROJECT, 'attribution'];
export const HIGHLIGHT_PROJECT = [...HIGH_LEVEL_PROJECT, 'highlight'];
export const ALL_PROJECT_ATTRIBUTES = [...HIGHLIGHT_PROJECT, 'ogImage', 'content'];
