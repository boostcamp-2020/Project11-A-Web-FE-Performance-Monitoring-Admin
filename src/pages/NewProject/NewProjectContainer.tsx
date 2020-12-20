import React, { useState, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '@store/type';
import create from '@api/project/create';
import NewProjectForm from './components/NewProject';

const NewProjectContainer: FC = () => {
  const [selectedPlatform, setPlatform] = useState('아직 선택하지 않았습니다.');
  const [projectName, setProjectName] = useState('New Project');
  const [alertSetting, setAlert] = useState('거부');
  const [alertLevel, setAlertLevel] = useState('fatal');
  const [alertMails, setMails] = useState<string[]>([]);
  const [projectMembers, setMembers] = useState<User[]>([]);
  const [projectAdmins, setAdmins] = useState<User[]>([]);

  const history = useHistory();

  const handleCreateButton = async () => {
    const alert = alertSetting === '거부'?'unsubscribe':alertLevel;
    const data = {
      platform: selectedPlatform,
      projectName,
      emails: alertMails,
      admins: projectAdmins,
      members: projectMembers,
      alertLevel: alert,
    };
    const token = await create(data);
    history.push('/newproject/example', {
      token,
      platform: selectedPlatform,
    });
  };

  return (
    <NewProjectForm
      selectedPlatform={selectedPlatform}
      setPlatform={setPlatform}
      projectName={projectName}
      setProjectName={setProjectName}
      alertSetting={alertSetting}
      setAlert={setAlert}
      alertLevel={alertLevel}
      setAlertLevel={setAlertLevel}
      alertMails={alertMails}
      setMails={setMails}
      projectMembers={projectMembers}
      setMembers={setMembers}
      projectAdmins={projectAdmins}
      setAdmins={setAdmins}
      handleCreateButton={handleCreateButton}
    />
  );
};

export default NewProjectContainer;
