import React, { useState, FC } from 'react';

import searchMember from '@api/project/searchMember';
import { User } from '@store/type';
import ProjectMemberSelector from './components/ProjectMemberSelector';

interface Props {
  projectAdmins: User[];
  setAdmins: React.Dispatch<React.SetStateAction<User[]>>;
}

const ProjectAdminContainer: FC<Props> = ({
  projectAdmins,
  setAdmins,
}: Props) => {
  const [searchResult, setSearchResult] = useState<User[]>([]);

  const handleDeleteMemberClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setAdmins(
      projectAdmins.filter(
        (member) => event.currentTarget.value !== member._id,
      ),
    );
  };

  const handleAddMemberClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setAdmins([
      ...projectAdmins,
      {
        _id: String(event.currentTarget.value),
        nickname: String(event.currentTarget.textContent),
      },
    ]);
  };

  const handleSearchButtonClick = async (searchQuery: string) => {
    const searchArray = await searchMember(searchQuery);
    setSearchResult(searchArray);
  };

  return (
    <ProjectMemberSelector
      title="담당자 선택하기"
      context="프로젝트의 담당자들을 선택해주세요. 담당자가 될 계정의 이메일을 정확히 입력해주세요. ( 깃허브에 경우에는 nickname을 입력하시기 바랍니다. )"
      selectedUsers={projectAdmins}
      searchResult={searchResult}
      handleSearchButtonClick={handleSearchButtonClick}
      handleDeleteMemberClick={handleDeleteMemberClick}
      handleAddMemberClick={handleAddMemberClick}
    />
  );
};

export default ProjectAdminContainer;
