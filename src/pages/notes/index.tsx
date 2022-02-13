import PageContainer from '@components/layout/container';
import Page from '@components/layout/page';
import Section from '@components/layout/section';
import MetaInfo from '@components/meta-info';
import { NoteProperty, StaticPropObject } from '@typeDefs/data';
import { getAllNotesProperty } from '@utils/data-access-utils';
import React from 'react';
import { groupNotesByCategory } from '../../components/layout/group-layout';
import NoteGrid, { generateNoteCards } from '../../components/layout/note-grid';

const title = 'Notes';

type NotePageProps = {
  notes: NoteProperty[];
};

const Notes = (props: NotePageProps) => {
  const { notes: notionNotes } = props;
  const groups = groupNotesByCategory(notionNotes);
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <PageContainer>
          <Section title={title}>
            {groups.map((group) => {
              const { category, notes } = group;
              return (
                <Section key={category} title={category} depth={2}>
                  <NoteGrid>{generateNoteCards(notes)}</NoteGrid>
                </Section>
              );
            })}
          </Section>
        </PageContainer>
      </Page>
    </>
  );
};

export default Notes;

export async function getStaticProps(): Promise<StaticPropObject<NotePageProps>> {
  const notes = getAllNotesProperty();
  const notesToShow = notes.filter((note) => !note.omit);
  const props: NotePageProps = { notes: notesToShow };
  return { props };
}
