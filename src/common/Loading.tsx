import React, { FC } from 'react';
import styled from '@emotion/styled';
import { CircularProgress } from '@material-ui/core';

const Wrap = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-top: 20px;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Loading: FC = () => (
  <Wrap>
    <FlexDiv>
      <CircularProgress color="secondary" />
      <Text>로딩중입니다</Text>
    </FlexDiv>
  </Wrap>
);

export default Loading;
