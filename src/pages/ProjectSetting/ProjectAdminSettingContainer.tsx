import React, { FC } from 'react';
import searchMember from '@api/project/searchMember';
import { User } from '@store/type';
import ProjectMemberSetting from './components/ProjectMemberSetting';

interface Props {
  projectAdmins: User[];
  setAdmins: React.Dispatch<React.SetStateAction<User[]>>;
}

const ProjectAdminSettingContainer: FC<Props> = ({
  projectAdmins,
  setAdmins,
}: Props) => {

  const handleSearchButtonClick = (searchQuery: string) => async () => {
    const searchArray = await searchMember(searchQuery);
    if(searchArray[0].nickname === searchQuery){
      setAdmins([...projectAdmins,searchArray[0]]);
      alert('관리자가 추가되었습니다.');
    }else{
      alert('관리자를 찾을 수 없습니다.');
    }  
  };

  return (
    <ProjectMemberSetting
      title="프로젝트의 담당자들을 선택해주세요."
      context="프로젝트의 담당자들을 선택해주세요. 담당자가 될 계정의 이메일을 정확히 입력해주세요. ( 깃허브에 경우에는 nickname을 입력하시기 바랍니다. )"
      projectMembers={projectAdmins}
      setMembers={setAdmins}
      handleSearchButtonClick={handleSearchButtonClick}
    />
  );
};

export default ProjectAdminSettingContainer;
