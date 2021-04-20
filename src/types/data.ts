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
  cards: Array<CardData>;
}

export interface CardData {
  type?: string;
  attribution?: Attribution;
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
  style?: AttributionStyle;
}

export interface AttributionStyle {
  contentStyle?: string;
  wrapperStyle?: string;
}

export interface Project {
  name?: string;
  path?: string;
  github?: string;
  demo?: string;
  highlight?: boolean;
  brief?: string;
  content?: string;
  ogImage?: string;
  attribution?: Attribution;
}

export interface Note {
  name: string;
  date?: string;
  path: string;
  brief?: string;
  content?: string;
  ogImage?: string;
  attribution?: Attribution;
}

export interface Article {
  name: string;
  date?: string;
  path: string;
  brief?: string;
  content?: string;
  ogImage?: string;
  attribution?: Attribution;
}
