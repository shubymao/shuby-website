import NoteCard from '@components/card/note-card';
import { NoteProperty } from '@typeDefs/data';
import React, { ReactNode } from 'react';

export const generateNoteCards = (notes: NoteProperty[]): ReactNode => {
  if (notes.length === 0) return [];
  return notes.map((note) => {
    const { id, title, link, emoji } = note;
    return <NoteCard key={id} title={title} emoji={emoji} link={link} />;
  });
};

const NoteGrid = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">{children}</div>
  );
};

export default NoteGrid;
