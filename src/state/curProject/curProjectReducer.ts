import { SET_CURRENT_PROJECT, CurProjectAction } from './curProjectActions';

interface CurrentProjectState {
  projectId: string;
}

export const initialCurrentProject = {
  projectId: '',
};

export type Actions = CurProjectAction;

export const curProjectReducer = (
  state: CurrentProjectState = initialCurrentProject,
  action: Actions,
): CurrentProjectState => {
  switch (action.type) {
    case SET_CURRENT_PROJECT:
      return { projectId: action.projectId };
    default:
      return state;
  }
};
