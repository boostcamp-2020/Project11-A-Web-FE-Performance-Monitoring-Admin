export interface Project {
  _id?: string;
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

export interface ProjectDocs {
  docs?: Project[];
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
