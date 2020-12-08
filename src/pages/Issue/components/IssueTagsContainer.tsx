import React, { FC } from 'react';
import { Issue } from '@state/type';
import IssueTags from './IssueTags';

interface Props {
  issue: Issue;
}

const IssueTagsContainer: FC<Props> = ({ issue }: Props) => {
  if (!issue.events) return <div>이벤트가 없습니다</div>;

  const searchResults = [
    {
      title: 'environment',
      contents: [
        { tag: 'hyezzang', count: 2 },
        { tag: 'production', count: 7 },
      ],
    },
    {
      title: 'level',
      contents: [
        { tag: 'info', count: 7 },
        { tag: 'warning', count: 2 },
        { tag: 'error', count: 11 },
        { tag: 'fatal', count: 21 },
      ],
    },
  ];

  return <IssueTags searchResults={searchResults} />;
};

export default IssueTagsContainer;
