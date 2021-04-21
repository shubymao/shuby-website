import { PageLink } from '@typeDefs/data';

export default function makePage(name: string, url: string): PageLink {
  return { name, url };
}
