import React from 'react';
import MetaInfo from '@components/meta-info';
import { getAllProjects, getProjectByFile } from '@utils/data-utils';
import PageContainer from '@components/container';
import Page from '@components/page';
import Title from '@components/title';
import ReactMarkdown from 'react-markdown';
import { Project } from '@typeDefs/data';
import DefaultRenderer from '@utils/render-util';
import gfm from 'remark-gfm';

type ProjectProps = { project: Project };
type StaticInput = { params: { project: string } };
type StaticPathObject = {
  paths: StaticInput[];
  fallback: boolean;
};
type StaticPropObject = {
  props: ProjectProps;
};

const projectAttributes = ['name', 'content'];

export default function ProjectPage(props: ProjectProps): JSX.Element {
  const { project } = props;
  const { name, content } = project;
  return (
    <>
      <MetaInfo pageTitle={name} />
      <Page>
        <PageContainer>
          <Title name={name} />
          <ReactMarkdown className="prose max-w-none" remarkPlugins={[gfm]} components={DefaultRenderer}>
            {content}
          </ReactMarkdown>
        </PageContainer>
      </Page>
    </>
  );
}

export async function getStaticProps(staticProp: StaticInput): Promise<StaticPropObject> {
  const projectName = staticProp.params.project;
  const project = getProjectByFile(projectName, projectAttributes);
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
