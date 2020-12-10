export const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT';

export interface CurProjectAction {
  type: typeof SET_CURRENT_PROJECT;
  projectId: string;
}

export const setCurrentProject = (projectId: string): CurProjectAction => {
  return {
    type: SET_CURRENT_PROJECT,
    projectId,
  };
};
