import React , { useState } from 'react';
import NewProjectForm from './newProjectForm';

const NewProjectContainer = () : JSX.Element => {
  const [seletedPlatform, setPlatform] = useState('아직 선택하지 않았습니다.');
  const [projectName, setProjectName] = useState('New Project');

  const prop = {seletedPlatform,setPlatform,projectName,setProjectName}
  return (
    <NewProjectForm {...prop} />
  );
}
export default NewProjectContainer;