export interface Project {
  _id?: string;
  platform: string;
  owner: string;
  admins?: string[];
  members?: string[];
  projectName: string;
  issues?: string[];
}

export interface ProjectState {
  loading: boolean;
  projects: Project[];
  error: string;
}
