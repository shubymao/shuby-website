import { Page } from '@typeDefs/page';

export interface HeaderProps {
  title: string;
  logo: JSX.Element;
  items: Array<Page>;
}
