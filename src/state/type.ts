export interface User {
  _id: string;
  nickname: string;
  email: string;
}
export interface ProjectData {
  platform: string;
  projectName: string;
  emails: string[];
  admins: string[];
  members: string[];
}
export interface Project {
  _id: string;
  platform: string;
  owner: string;
  admins?: string[];
  members?: string[];
  projectName: string;
  issues?: string[];
  createdAt: string;
}

export interface ProjectState {
  loading: boolean;
  projects: Project[];
  error: string;
}

export interface Issue {
  _id: string;
  projectId: string;
  errorName: string;
  errorMessage: string;
  isResolved: boolean;
  comments?: string[];
  events?: string[];
  createdAt: string;
  updateAt: string;
}

export interface Docs<T> {
  docs?: T[];
  totalDocs?: number;
  limit?: number;
  totalPages?: number;
  page?: number;
  pagingCounter?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  prevPage?: number;
  nextPage?: number;
}
