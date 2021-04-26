import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Project } from '@typeDefs/data';

const projectDirectory = join(process.cwd(), 'source-data', 'projects');

function getAllFileInDir(dirPath: string) {
  return fs.readdirSync(dirPath);
}

export function getProjectByFile(fileName: string, fields: string[] = []): Project {
  const nameNoExt = fileName.replace(/\.md$/, '');
  const fullPath = join(projectDirectory, `${nameNoExt}.md`);
  const fileContent = fs.readFileSync(fullPath);
  const { data, content } = matter(fileContent);
  const project: Project = {};
  fields.forEach((field) => {
    if (field === 'content') project.content = content;
    else if (field === 'path') project.path = `${nameNoExt}`;
    else project[field] = data[field] || null;
  });
  return project;
}

export function getAllProjects(fields: string[] = []): Project[] {
  const files = getAllFileInDir(projectDirectory);
  const projects = files.map((file) => getProjectByFile(file, fields)).filter((project) => project);
  return projects;
}
