import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { alignment } from './layout';

export interface FooterLink {
  icon: IconDefinition;
  url: string;
}

export interface Page {
  name: string;
  url: string;
}

export interface CardGridData {
  type: 'cardgrid';
  cards: Array<CardData>;
}

export interface CardData {
  type?: string;
  attribution?: Attribution;
  attributionStyle?: string;
  title: string;
  description: string;
  links?: Array<Page>;
}

export interface RevealCardData extends CardData {
  location?: string;
  date?: string;
  detail?: Array<string>;
}

export interface SectionData {
  title?: string;
  alignTitle?: alignment;
}

export interface TextData {
  content: string;
  style: string;
}

export interface Attribution {
  path: string;
  alt?: string;
}

export interface Project {
  name?: string;
  path?: string;
  brief?: string;
  date?: string;
  content?: string;
  ogImage?: string;
  attribution?: string;
}
