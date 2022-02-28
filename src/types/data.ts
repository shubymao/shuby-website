import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { alignment } from './layout';

export type StaticPropObject<T> = { props: T };

export interface FooterLink {
  icon: IconDefinition;
  url: string;
}

export interface ContactInfo {
  name: string;
  icon: IconDefinition;
  url: string;
}

export interface PageLink {
  name: string;
  url: string;
}

export interface CardGridData {
  cards: Array<CardData>;
}

export interface CardData {
  id: string;
  type?: string;
  attribution?: Attribution;
  title: string;
  description?: string;
  links?: Array<PageLink>;
}

export interface NoteProperty {
  id: string;
  emoji: string;
  order: number;
  filePath: string;
  title: string;
  category: string;
  link: PageLink;
  omit?: boolean;
}

export interface Note {
  title: string;
  date: string;
  emoji: string;
  category: string;
  author: string;
  tags: string[];
  content: string;
  isNotion: boolean;
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
  date?: string;
  path?: string;
  github?: string;
  demo?: string;
  omit?: boolean;
  highlight?: boolean;
  category?: string;
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
