import React, { FC, useState, useEffect } from 'react';
import { SearchResult } from '@store/type';
import getIssueTags from '@api/issue/getIssueTags';
import makeSearchResults from '@utils/makeSearchResults';
import IssueTags from './components/IssueTags';
import TagDonutChart from './components/TagDonutChart';

interface Props {
  issueId: string;
}

const IssueTagsContainer: FC<Props> = ({ issueId }: Props) => {
  const [tagInfo, setTagInfo] = useState<SearchResult | undefined>();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  useEffect(() => {
    (async () => {
      const result = await getIssueTags(issueId);
      if (result) {
        setSearchResults(makeSearchResults(result));
      }
    })();
  }, [issueId]);

  return tagInfo ? (
    <TagDonutChart searchResult={tagInfo} />
  ) : (
    <IssueTags searchResults={searchResults} setTagInfo={setTagInfo} />
  );
};

export default IssueTagsContainer;
