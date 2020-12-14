import React, { useState, FC } from 'react';
import searchMember from '@api/project/searchMember';
import { User } from '@store/type';
import ProjectMemberSelector from './components/ProjectMemberSelector';

interface Props {
  projectMembers: User[];
  setMembers: React.Dispatch<React.SetStateAction<User[]>>;
}

const ProjectMemberContainer: FC<Props> = ({
  projectMembers,
  setMembers,
}: Props) => {
  const [searchResult, setSearchResult] = useState<User[]>([]);

  const handleDeleteMemberClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setMembers(
      projectMembers.filter(
        (member) => event.currentTarget.value !== member._id,
      ),
    );
  };

  const handleAddMemberClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setMembers([
      ...projectMembers,
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
      title="멤버 선택하기"
      context="함께 프로젝트를 진행할 사람들을 선정해주세요"
      selectedUsers={projectMembers}
      searchResult={searchResult}
      handleSearchButtonClick={handleSearchButtonClick}
      handleDeleteMemberClick={handleDeleteMemberClick}
      handleAddMemberClick={handleAddMemberClick}
    />
  );
};

export default ProjectMemberContainer;
