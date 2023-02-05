import { PageLink } from '@typeDefs/data';
import Link from 'next/link';
import React from 'react';

export type NoteCardProps = {
  emoji?: string;
  link?: PageLink;
  title: string;
};

const DEFAULT_LINKS: PageLink = { url: '/comming-soon', name: 'comming soon' };

const NoteCard = (props: NoteCardProps) => {
  const { title, emoji = '📝', link = DEFAULT_LINKS } = props;
  const { url } = link;
  return (
    <Link
      href={url}
      className="px-5 py-4 border rounded-lg bg-surface space-y-4 hover:cursor-pointer hover:border-primary"
    >
      <div className="flex flex-wrap items-center">
        <p className="font-bold text-center first-letter:text-xl">{`${emoji} ${title}`}</p>
      </div>
    </Link>
  );
};

export default NoteCard;
