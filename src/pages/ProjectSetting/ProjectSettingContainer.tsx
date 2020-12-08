import React, { useEffect, useState, FC } from 'react';
import { useSelector, DefaultRootState } from 'react-redux';
import getSingleProject from '@api/project/getSingleProject';
import AlertDialog from '@common/AlertDialog';

import ProjectSetting from './ProjectSetting';

interface State extends DefaultRootState {
  curProjectReducer: {
    projectId: string;
  };
}

const ALERT_TITLE = '선택된 프로젝트가 없습니다';
const ALERT_CONTENT = '프로젝트를 선택한 후 이슈를 확인해주세요';

const ProjectSettingContainer: FC = () => {
  const { projectId } = useSelector((state: State) => state.curProjectReducer);
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

  if(JSON.stringify(project) === '{}') return <></>;

  return <ProjectSetting project={project} />;
};

export default ProjectSettingContainer;
