import React, { useEffect, useState, FC } from 'react';
import { useSelector, DefaultRootState, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import getSingleProject from '@api/project/getSingleProject';
import deleteProject from '@api/project/deleteProject';
import AlertDialog from '@common/AlertDialog';
import { setCurrentProject } from '@store/curProject/curProjectActions';

import ProjectSetting from './ProjectSetting';

interface State extends DefaultRootState {
  curProjectReducer: {
    projectId: string;
  };
  userReducer: {
    email: string;
    nickname: string;
    id: string;
  };
}

const ALERT_TITLE = '선택된 프로젝트가 없습니다';
const ALERT_CONTENT = '프로젝트를 선택한 후 이슈를 확인해주세요';

const ProjectSettingContainer: FC = () => {
  const { projectId } = useSelector((state: State) => state.curProjectReducer);
  const user = useSelector((state: State) => state.userReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  if (!projectId) {
    return (
      <AlertDialog
        title={ALERT_TITLE}
        link="/project"
        content={ALERT_CONTENT}
      />
    );
  }
  const [project, setProject] = useState({});
  useEffect(() => {
    (async () => {
      const projectResult = await getSingleProject(projectId);
      if (projectResult) setProject(projectResult);
    })();
  }, []);

  if (JSON.stringify(project) === '{}') return <></>;

  const handleDeleteButton = (projectIdToDelete: string) => {
    alert('정말로 삭제하시겠습니까??');
    deleteProject(projectIdToDelete);
    dispatch(setCurrentProject(''));
    history.push('/project');
  };

  return (
    <ProjectSetting
      project={project}
      user={user}
      handleDeleteButton={handleDeleteButton}
    />
  );
};

export default ProjectSettingContainer;
