import React, { useEffect, useState, FC } from 'react';
import { useSelector, DefaultRootState, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import getSingleProject from '@api/project/getSingleProject';
import modifyProject from '@api/project/modifyProject';
import deleteProject from '@api/project/deleteProject';
import AlertDialog from '@common/AlertDialog';
import { setCurrentProject } from '@store/curProject/curProjectActions';
import { ProjectData, User } from '@store/type';

import ProjectSetting from './components/ProjectSetting';

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
const ALERT_CONTENT = '프로젝트를 선택한 후 설정을 확인해주세요';

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
  const [project, setProject] = useState<ProjectData>({} as ProjectData);
  const [projectName, setProjectName] = useState('');
  const [projectMembers, setMembers] = useState<User[]>([]);
  const [projectAdmins, setAdmins] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const projectResult = await getSingleProject(projectId);
      if (projectResult) {
        setProject(projectResult);
        setProjectName(projectResult.projectName);
        setMembers(projectResult.members);
        setAdmins(projectResult.admins);
      }
    })();
  }, []);

  if (JSON.stringify(project) === '{}') return <></>;

  const handlePatchButton = () => {
    modifyProject(projectId, projectName, projectAdmins, projectMembers);
  };

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
      projectName={projectName}
      setProjectName={setProjectName}
      projectMembers={projectMembers}
      setMembers={setMembers}
      projectAdmins={projectAdmins}
      setAdmins={setAdmins}
      handlePatchButton={handlePatchButton}
      handleDeleteButton={handleDeleteButton}
    />
  );
};

export default ProjectSettingContainer;
