import { CardData, PageLink, Project } from '@typeDefs/data';

export default function makePage(name: string, url: string): PageLink {
  return { name, url };
}

export function getDateInLocalTime(isoTime: string): string {
  if (!isoTime) return null;
  const localTime = new Date(isoTime);
  return localTime.toDateString();
}

export function makeCardDataFromProjects(projects: Project[]): CardData[] {
  const cardData = projects.map((project) => {
    const { name, path, github, demo, brief, attribution } = project;
    const links: PageLink[] = [];
    if (path) links.push(makePage('More Detail', `/projects/${path}`));
    if (github) links.push(makePage('Github', github));
    if (demo) links.push(makePage('Demo', demo));
    const card: CardData = {
      id: name.replaceAll(' ', '-'),
      attribution,
      links,
      title: name,
      description: brief,
    };
    return card;
  });
  return cardData;
}
