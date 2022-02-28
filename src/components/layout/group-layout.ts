import { NoteProperty } from '@typeDefs/data';

export type NoteGroup = { category: string; notes: NoteProperty[] };

export const groupNotesByCategory = (notes: NoteProperty[]): NoteGroup[] => {
  const noteGroups: NoteGroup[] = [];
  const noteCategories = notes.map((note) => note.category);
  const uniqueCategories = [...new Set(noteCategories)];
  uniqueCategories.forEach((category) => {
    const notesInCategory = notes.filter((note) => note.category === category);
    const sortedNotes = notesInCategory.sort((a, b) => a.order - b.order);
    noteGroups.push({ category, notes: sortedNotes });
  });
  return noteGroups;
};
