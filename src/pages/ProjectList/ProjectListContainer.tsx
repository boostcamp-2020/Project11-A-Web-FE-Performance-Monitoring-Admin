/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC, useEffect } from 'react';
import { Project, Docs } from '@store/type';
import { useDispatch, useSelector, DefaultRootState } from 'react-redux';
import fetchProjects from '@store/projects/index';

import Loading from '@common/Loading';
import ProjectList from './ProjectList';

interface State extends DefaultRootState {
  projectsReducer: {
    loading: boolean;
    projects: Docs<Project>;
    errorMsg: string;
  };
}

const ProjectListContainer: FC = (): JSX.Element => {
  const { loading, projects, errorMsg } = useSelector(
    (state: State) => state.projectsReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  if (errorMsg) {
    return (
      <>
        <div>프로젝트를 가져오며 에러가 발생하였습니다</div>
        <p> {errorMsg} </p>
      </>
    );
  }
  if (!projects) return <></>;
  return <ProjectList projects={projects} />;
};

export default ProjectListContainer;
