import React from 'react';
import MetaInfo from '@components/meta-info';
import { getAllProjects, getProjectByFile } from '@utils/data-access-utils';
import Page from '@components/layout/page';
import ReactMarkdown from 'react-markdown';
import { Project } from '@typeDefs/data';
import DefaultRenderer from '@utils/render-util';
import gfm from 'remark-gfm';
import { getDateInLocalTime } from '@utils/data-translation-util';
import { ALL_PROJECT_ATTRIBUTES } from '@constants/page-info';

type ProjectProps = { project: Project };
type StaticInput = { params: { project: string } };
type StaticPathObject = {
  paths: StaticInput[];
  fallback: boolean;
};
type StaticPropObject = {
  props: ProjectProps;
};

const ProjectPage = (props: ProjectProps): JSX.Element => {
  const { project } = props;
  const { name, date, content } = project;
  const localTime = getDateInLocalTime(date);
  return (
    <>
      <MetaInfo pageTitle={name} />
      <Page>
        <div className="w-full px-5 mx-auto py-14 prose md:prose-lg lg:prose-xl">
          <h1>{name}</h1>
          {date ? <span>Last Updated: {localTime}</span> : null}
          <ReactMarkdown remarkPlugins={[gfm]} components={DefaultRenderer}>
            {content}
          </ReactMarkdown>
        </div>
      </Page>
    </>
  );
};

export default ProjectPage;

export async function getStaticProps(staticProp: StaticInput): Promise<StaticPropObject> {
  const projectName = staticProp.params.project;
  const project = getProjectByFile(projectName, ALL_PROJECT_ATTRIBUTES);
  const props: ProjectProps = { project };
  return { props };
}

export async function getStaticPaths(): Promise<StaticPathObject> {
  const projects = getAllProjects(['path']);
  const paths: StaticInput[] = projects.map((project) => {
    const params = { project: project.path };
    return { params };
  });
  const pathObj = { paths, fallback: false };
  return pathObj;
}
