export enum ProjectCategory {
  ALL = "all",
  FRONTEND = "frontend",
  BACKEND = "backend",
  FULLSTACK = "fullstack",
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  imageUrl: string;
  liveUrl?: string;
  repoUrl: string;
  tags: string[];
}

export interface Kanji {
  char: string;
  romaji: string;
}
