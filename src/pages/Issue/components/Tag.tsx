import React, { FC } from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  border: 1px solid rgb(198, 190, 207);
  display: flex;
  margin: 0px 8px 8px 0px;
  border-radius: 3px;
  line-height: 1.2;
`;

const Key = styled.span`
  padding: 4px 8px;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

const Value = styled.span`
  background: rgb(250, 249, 251);
  padding: 4px 8px;
  white-space: nowrap;
  border-left: 1px solid rgb(198, 190, 207);
  border-radius: 0px 3px 3px 0px;
  display: flex;
  align-items: center;
`;

interface Props {
  tagName: string;
  tagValue: string;
}

const Tag: FC<Props> = ({ tagName, tagValue }: Props) => (
  <StyledDiv>
    <Key>{tagName}</Key>
    <Value>{tagValue}</Value>
  </StyledDiv>
);

export default Tag;
