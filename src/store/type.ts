export interface User {
  _id: string;
  nickname: string;
  email?: string;
}
export interface ProjectData {
  platform: string;
  projectName: string;
  emails: string[];
  admins: User[];
  members: User[];
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
export interface ErrorContext {
  preErrorContext: string[];
  errorContext: string[];
  postErrorContext: string[];
}
export interface Issue {
  _id: string;
  projectId: string;
  eventName: string;
  errorMessage: string;
  issueType: string;
  isResolved: boolean;
  comments?: string[];
  events?: EventId[];
  createdAt: string;
  updatedAt: string;
}

type Context = Record<string, string>;

export interface Event {
  _id: string;
  issueId?: string;
  release?: string;
  environment?: string;
  timeStamp: string;
  createdBy: {
    ipAdress?: string;
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
  stacktrace?: StackTrace[];
  errorContexts?: ErrorContext[];
  version?: string;
  platform?: string;
  serverName?: string;
  transaction?: string;
  userIp?: string;
  message?: string;
  level?: string;
  contexts?: Record<string, Context>;
}

interface EventId {
  _id: string;
}

export interface SearchEvent {
  page?: number;
  limit?: number;
  release?: string;
  environment?: string;
  sdk?: string;
  os?: string;
  browser?: string;
  url?: string;
  message?: string;
  version?: string;
  serverName?: string;
  transaction?: string;
  userIp?: string;
  level?: string;
}

export interface Tags {
  release?: string;
  environment?: string;
  sdk?: string;
  os?: string;
  browser?: string;
  url?: string;
  version?: string;
  serverName?: string;
  transaction?: string;
  userIp?: string;
  level?: string;
}

export interface StackTrace {
  filename?: string;
  function?: string;
  lineno?: number;
  colno?: number;
}

export interface Docs<T> {
  docs: T[];
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

export interface Comment {
  _id: string;
  userId: {
    _id: string;
    email: string;
    nickname: string;
  };
  issueId: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
