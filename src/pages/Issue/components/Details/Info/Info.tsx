import React, { FC } from 'react';
import styled from '@emotion/styled';
import EvendDetailHeader from '../EventDetailHeader';

interface Props {
  title: string;
  datas: Record<string, string | undefined>;
}

const MarginTop = styled.div`
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
`;

const Key = styled.div`
  font-size: 15px;
  font-weight: 500;
  width: 30%;
`;

const Value = styled.code`
  background-color: #f7f8f9;
  color: rgb(78, 63, 180);
  display: block;
  width: 70%;
  font-size: 14px;
  padding: 6px 12px;
`;

const Info: FC<Props> = ({ title, datas }: Props) => (
  <MarginTop>
    <EvendDetailHeader title={title} />
    {Object.entries(datas).map((data) => (
      <Wrapper key={data[0]}>
        <Key>{data[0]}</Key>
        <Value>{data[1]}</Value>
      </Wrapper>
    ))}
  </MarginTop>
);

export default Info;
