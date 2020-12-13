import React, { FC, useState } from 'react';
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
  const [searchResult, setSearchResult] = useState<User[]>([]);

  const handleSearchButtonClick = (searchQuery: string) => async () => {
    const searchArray = await searchMember(searchQuery);
    setSearchResult(searchArray);
  };

  return (
    <ProjectMemberSetting
      title="프로젝트의 담당자들을 선택해주세요."
      projectMembers={projectAdmins}
      setMembers={setAdmins}
      handleSearchButtonClick={handleSearchButtonClick}
      searchResult={searchResult}
    />
  );
};

export default ProjectAdminSettingContainer;
