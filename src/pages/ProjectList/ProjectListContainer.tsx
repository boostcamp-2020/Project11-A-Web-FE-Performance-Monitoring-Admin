/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC, useEffect, MouseEvent, useState } from 'react';
import { Project, Docs } from '@store/type';
import { useDispatch, useSelector, DefaultRootState } from 'react-redux';
import fetchProjects from '@store/projects/index';
import { setCurrentProject } from '@store/curProject/curProjectActions';

import Loading from '@common/Loading';
import ProjectList from './components/ProjectList';

interface State extends DefaultRootState {
  projectsReducer: {
    loading: boolean;
    projects: Docs<Project>;
    errorMsg: string;
  };
  curProjectReducer: {
    projectId: string;
  };
}

const ProjectListContainer: FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, projects, errorMsg } = useSelector(
    (state: State) => state.projectsReducer,
  );
  const { projectId: currentProjectId } = useSelector(
    (state: State) => state.curProjectReducer,
  );
  const dispatch = useDispatch();

  const handleClickProject = (projectId: string) => (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    dispatch(setCurrentProject(projectId));
  };

  useEffect(() => {
    dispatch(fetchProjects(currentPage));
  }, [dispatch, currentPage]);

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
  return (
    <ProjectList
      projects={projects}
      handleClickProject={handleClickProject}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      currentProjectId={currentProjectId}
    />
  );
};

export default ProjectListContainer;
