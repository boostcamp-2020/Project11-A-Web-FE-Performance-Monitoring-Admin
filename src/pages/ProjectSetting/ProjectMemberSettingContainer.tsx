import React, { FC, useState } from 'react';
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
  const [searchResult, setSearchResult] = useState<User[]>([]);

  const handleSearchButtonClick = (searchQuery: string) => async () => {
    const searchArray = await searchMember(searchQuery);
    setSearchResult(searchArray);
  };

  return (
    <ProjectMemberSetting
      title="함께 프로젝트를 진행할 사람들을 선정해주세요."
      projectMembers={projectMembers}
      setMembers={setMembers}
      handleSearchButtonClick={handleSearchButtonClick}
      searchResult={searchResult}
    />
  );
};

export default ProjectMemberSettingContainer;
