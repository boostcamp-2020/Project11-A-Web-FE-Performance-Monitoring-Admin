import { StackTrace } from '@/state/type';
import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import { ArrowDropDownCircle } from '@material-ui/icons';
import styled from '@emotion/styled';

interface Props {
  stacktrace: StackTrace;
  children?: JSX.Element;
}

const StackWrapper = styled.div`
  border: 1px solid #e2dee6;
`;

const HeaderWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Code = styled.code`
  font-weight: 700;
  font-size: initial;
`;

const StackHeader: FC<Props> = ({ stacktrace, children }: Props) => (
  <StackWrapper>
    <HeaderWrapper>
      <div>
        <Code>{stacktrace.filename}</Code>
        <span> in </span>
        <Code>{stacktrace.function}</Code>
        <span> at line </span>
        <Code>{stacktrace.lineno}</Code>:<Code>{stacktrace.colno}</Code>
      </div>
      <IconButton>
        <ArrowDropDownCircle />
      </IconButton>
    </HeaderWrapper>
    {children}
  </StackWrapper>
);

export default StackHeader;
