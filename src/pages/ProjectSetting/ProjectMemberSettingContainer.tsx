import React, { FC } from 'react';
import searchMember from '@api/project/searchMember';
import { User } from '@store/type';
import ProjectMemberSetting from './components/ProjectMemberSetting';

interface Props {
  projectMembers: User[];
  setMembers: React.Dispatch<React.SetStateAction<User[]>>;
}

const ProjectMemberSettingContainer: FC<Props> = ({
  projectMembers,
  setMembers,
}: Props) => {

  const handleSearchButtonClick = (searchQuery: string) => async () => {
    const searchArray = await searchMember(searchQuery);
    if(searchArray[0].nickname === searchQuery){
      setMembers([...projectMembers,searchArray[0]]);
      alert('멤버가 추가되었습니다.');
    }else{
      alert('멤버를 찾을 수 없습니다.');
    }  
  };

  return (
    <ProjectMemberSetting
      title="함께 프로젝트를 진행할 사람들을 선정해주세요."
      context="함께 프로젝트를 진행할 사람들을 선정해주세요 멤버가 될 계정의 이메일을 정확히 입력해주세요. ( 깃허브에 경우에는 nickname을 입력하시기 바랍니다. )"
      projectMembers={projectMembers}
      setMembers={setMembers}
      handleSearchButtonClick={handleSearchButtonClick}
    />
  );
};

export default ProjectMemberSettingContainer;
