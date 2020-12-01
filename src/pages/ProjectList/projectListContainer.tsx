/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { ProjectDocs } from '@state/type';
import { useDispatch, useSelector, DefaultRootState } from 'react-redux';
import fetchProjects from '@state/projects/index';

import ProjectList from './projectlist';

interface State extends DefaultRootState {
  projectsReducer: {
    loading: boolean;
    projects: ProjectDocs;
    errorMsg: string;
  };
}

const ProjectListContainer: React.FC = (): JSX.Element => {
  const { loading, projects, errorMsg } = useSelector(
    (state: State) => state.projectsReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (loading) {
    return <div>로딩중</div>;
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
