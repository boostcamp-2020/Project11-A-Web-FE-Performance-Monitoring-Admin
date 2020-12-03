import React , { useState } from 'react';
import NewProjectForm from './newProjectForm';

const NewProjectContainer = () : JSX.Element => {
  const [seletedPlatform, setPlatform] = useState('아직 선택하지 않았습니다.');
  const [projectName, setProjectName] = useState('New Project');
  const [alertSetting, setAlert] = useState('거부');
  const [alertMails, setMails] = useState<string[]>([]);
  const [projectMembers, setMembers] = useState<string[]>([]);
  const [projectAdmins, setAdmins] = useState<string[]>([]);

  const prop = {
    seletedPlatform,setPlatform,
    projectName,setProjectName,
    alertSetting,setAlert,
    alertMails,setMails,
    projectMembers,setMembers,
    projectAdmins, setAdmins
  };
  return (
    <NewProjectForm {...prop} />
  );
}
export default NewProjectContainer;