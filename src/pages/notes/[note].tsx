import React from 'react';
import MetaInfo from '@components/meta-info';
import { getAllNotesProperty, getNoteByURL } from '@utils/data-access-utils';
import Page from '@components/layout/page';
import ReactMarkdown from 'react-markdown';
import { Note } from '@typeDefs/data';
import { getLocalizedRederer } from '@utils/render-util';
import gfm from 'remark-gfm';
import { getDateInLocalTime } from '@utils/data-translation-util';

type NotePageProps = { note: Note };
type StaticInput = { params: { note: string } };
type StaticPathObject = {
  paths: StaticInput[];
  fallback: boolean;
};
type StaticPropObject = {
  props: NotePageProps;
};

const NotePage = (props: NotePageProps): JSX.Element => {
  const { note } = props;
  const { emoji, title, date, content, author } = note;
  const localTime = getDateInLocalTime(date);
  const localizedRenderer = getLocalizedRederer("/notion-assets");
  return (
    <>
      <MetaInfo pageTitle={title} />
      <Page>
        <div className="w-full px-5 mx-auto py-14 prose md:prose-lg lg:prose-xl">
          <h1>{emoji + title}</h1>
          <span>
            Last Updated: {localTime} by {author}
          </span>
          <ReactMarkdown remarkPlugins={[gfm]} components={localizedRenderer}>
            {content}
          </ReactMarkdown>
        </div>
      </Page>
    </>
  );
};

export default NotePage;

export async function getStaticProps(conext: StaticInput): Promise<StaticPropObject> {
  const note = getNoteByURL(conext.params.note);
  const props: NotePageProps = { note };
  return { props };
}

export async function getStaticPaths(): Promise<StaticPathObject> {
  const notesProperty = getAllNotesProperty();
  const paths: StaticInput[] = notesProperty.map((noteProperty) => ({
    params: { note: noteProperty.id },
  }));
  const pathObj = { paths, fallback: false };
  return pathObj;
}
