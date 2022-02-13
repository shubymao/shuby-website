import { lstatSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Note, NoteProperty, Project } from '@typeDefs/data';

const cacheFile = 'cache.tmp';
const projectDirectory = join(process.cwd(), 'source-data', 'projects');
const notionDirectory = join(process.cwd(), 'source-data', 'notion-assets');
const noteDirectory = join(process.cwd(), 'source-data', 'notes');
const notesDirectories = [noteDirectory, notionDirectory];

function getAllFileInDir(dirPath: string) {
  return readdirSync(dirPath);
}

function saveCache(obj: any, directory: string) {
  writeFileSync(join(directory, cacheFile), JSON.stringify(obj));
}

function loadCache(directory: string): any {
  const cache = readFileSync(join(directory, cacheFile), 'utf8');
  return JSON.parse(cache);
}

function loadAllFiles(
  filesDir: string,
  callback: (path: string, content: string) => void,
) {
  const files = getAllFileInDir(filesDir);
  files.forEach((file) => {
    const path = join(filesDir, file);
    if (lstatSync(path).isDirectory()) return;
    const fileContents = readFileSync(path, 'utf8');
    callback(path, fileContents);
  });
}

export function getNoteByURL(noteURL: string): Note {
  const cache = loadCache(noteDirectory);
  const filePath = cache[noteURL];
  const fileContent = readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const { title, date, category, author } = data;
  const { tags = [], emoji = '📗' } = data;
  const isNotion = noteURL.includes('filePath');
  return { title, date, emoji, category, author, tags, content, isNotion };
}

export function getAllNotesProperty(): NoteProperty[] {
  const notes: NoteProperty[] = [];
  const urlToPath: { [k: string]: string } = {};
  notesDirectories.forEach((dir) => {
    loadAllFiles(dir, (filePath, fileContent) => {
      if (!filePath.endsWith('.md')) return;
      const { data } = matter(fileContent);
      const { title, emoji = '📗', category, omit = false } = data;
      if (!title || !category) return;
      const id = title.replace(/\s/g, '-').toLowerCase();
      const url = `/notes/${id}`;
      const link = { name: title, url };
      notes.push({ id, omit, filePath, title, emoji, category, link });
      urlToPath[id] = filePath;
    });
  });
  saveCache(urlToPath, noteDirectory);
  return notes;
}

export function getProjectByFile(
  fileName: string,
  fields: string[] = [],
): Project {
  const nameNoExt = fileName.replace(/\.md$/, '');
  const fullPath = join(projectDirectory, `${nameNoExt}.md`);
  const fileContent = readFileSync(fullPath);
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
  const projects = files
    .map((file) => getProjectByFile(file, fields))
    .filter((project) => project);
  return projects;
}
