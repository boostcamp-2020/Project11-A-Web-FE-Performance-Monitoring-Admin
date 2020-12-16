import React, { FC } from 'react';
import styled from '@emotion/styled';
import Tag from './Tag';
import EventDetailHeader from './EventDetailHeader';

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
  flex-wrap: wrap;
`;

const SummarizedTags: FC<Props> = ({ tags }: Props) => {
  return (
    <div>
      <EventDetailHeader title="TAGS" />
      <Tags>
        {Object.entries(tags).map(
          (tag) =>
            tag[1] && <Tag tagName={tag[0]} tagValue={tag[1]} key={tag[0]} />,
        )}
      </Tags>
    </div>
  );
};

export default SummarizedTags;
