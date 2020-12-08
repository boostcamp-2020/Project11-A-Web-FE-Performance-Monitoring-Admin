import { Project, Docs } from '@state/type';
import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  GetProjectsAction,
} from './projectsActions';

interface ProjectsState {
  loading: boolean;
  projects?: Docs<Project>;
  errorMsg?: string;
}

export const initialProjects: ProjectsState = {
  loading: false,
  projects: { docs: [] },
  errorMsg: '',
};

export type Actions = GetProjectsAction;

export const projectsReducer = (
  state: ProjectsState = initialProjects,
  action: Actions,
): ProjectsState => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return { ...state, loading: true };
    case GET_PROJECTS_SUCCESS:
      return { ...state, loading: false, projects: action.projects };
    case GET_PROJECTS_FAIL:
      return { ...state, loading: false, errorMsg: action.errorMsg };
    default:
      return state;
  }
};
