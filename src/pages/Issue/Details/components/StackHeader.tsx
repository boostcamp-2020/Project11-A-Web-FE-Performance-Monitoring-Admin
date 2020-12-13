import { StackTrace } from '@store/type';
import React, { FC, useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import styled from '@emotion/styled';

interface Props {
  stacktrace: StackTrace;
  children?: JSX.Element;
  idx: number;
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

const StackHeader: FC<Props> = ({ stacktrace, children, idx }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleContext = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (idx === 0) setOpen(true);
  }, []);

  return (
    <StackWrapper>
      <HeaderWrapper>
        <div>
          <Code>{stacktrace.filename}</Code>
          <span> in </span>
          <Code>{stacktrace.function}</Code>
          <span> at line </span>
          <Code>{stacktrace.lineno}</Code>:<Code>{stacktrace.colno}</Code>
        </div>
        <IconButton onClick={toggleContext}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </HeaderWrapper>
      {open && children}
    </StackWrapper>
  );
};

export default StackHeader;
