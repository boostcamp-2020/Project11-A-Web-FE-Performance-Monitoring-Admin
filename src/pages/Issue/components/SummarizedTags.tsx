import React, { FC } from 'react';
import styled from '@emotion/styled';
import Tag from './Tag';

interface Tags {
  environment?: string;
  release?: string;
  transaction?: string;
  userIp?: string;
  level?: string;
  serverName?: string;
}

interface Props {
  tags: Tags;
}

const Tags = styled.div`
  display: flex;
`;

const SummarizedTags: FC<Props> = ({ tags }: Props) => {
  return (
    <div>
      <h2>TAGS</h2>
      <Tags>
        {Object.entries(tags).map(
          (tag) => tag[1] && <Tag tagName={tag[0]} tagValue={tag[1]} />,
        )}
      </Tags>
    </div>
  );
};

export default SummarizedTags;
