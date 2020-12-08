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
  events?: EventId[];
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  _id: string;
  issueId?: string;
  release?: string;
  environment?: string;
  timeStamp: string;
  createdBy: {
    ipAdress?: string;
    email?: string;
  };
  os?: {
    version: string;
    name: string;
  };
  browser?: {
    version: string;
    name: string;
  };
  sdk: {
    version: string;
    name: string;
  };
  url?: string;
  type?: string; // error.name
  value?: string; // error.message
  stacktrace?: StackTrace[]; // error.stack
  context?: string[][];
  version?: string;
  platform?: string;
  serverName?: string;
  transaction?: string;
  userIp?: string;
  message?: string;
  level?: string;
}

interface EventId {
  _id: string;
}

interface StackTrace {
  filename?: string;
  function?: string;
  lineno?: number;
  colno?: number;
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

export interface SearchResult {
  title: string;
  contents: { tag: string; count: number }[];
}
