import getProjects from '@api/project/getProjects';
import { Dispatch } from 'redux';
import {
  getProjectsRequest,
  getProjectsSuccess,
  getProjectsFail,
} from './projectsActions';

const fetchProjects = (page?: number) => async (
  dispatch: Dispatch,
): Promise<void> => {
  dispatch(getProjectsRequest());
  try {
    const projects = await getProjects(page);
    if (projects) dispatch(getProjectsSuccess(projects));
  } catch (error) {
    dispatch(getProjectsFail(error.message));
  }
};

export default fetchProjects;
