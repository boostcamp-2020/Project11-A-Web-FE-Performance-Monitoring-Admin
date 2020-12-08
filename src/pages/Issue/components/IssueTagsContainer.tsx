import React, { FC, useState } from 'react';
import { Issue } from '@state/type';
import IssueTags from './IssueTags';
import TagDonutChart from './TagDonutChart';

interface Props {
  issue: Issue;
}
interface SearchResult {
  title: string;
  contents: { tag: string; count: number }[];
}

const IssueTagsContainer: FC<Props> = ({ issue }: Props) => {
  if (!issue.events) return <div>이벤트가 없습니다</div>;

  const [tagInfo, setTagInfo] = useState<SearchResult | undefined>();
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

  return tagInfo ? (
    <TagDonutChart searchResult={tagInfo} />
  ) : (
    <IssueTags searchResults={searchResults} setTagInfo={setTagInfo} />
  );
};

export default IssueTagsContainer;
