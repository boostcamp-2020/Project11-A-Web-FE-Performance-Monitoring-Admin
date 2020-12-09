import React, { FC } from 'react';
import BillboardChart from 'react-billboardjs';
import styled from '@emotion/styled';
import 'react-billboardjs/lib/billboard.css';
import { SearchResult } from '@state/type';

const ChartTitle = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
`;

interface Props {
  searchResult: SearchResult;
}
const TagDonutChart: FC<Props> = ({ searchResult }: Props) => {
  const columnData = searchResult.contents.map((content) => [
    content.tag,
    content.count,
  ]);
  const data = {
    columns: columnData,
    type: 'donut',
    onclick(d) {
      console.log(d);
    },
    labels: {
      colors: 'white',
      centered: true,
    },
  };

  return (
    <>
      <ChartTitle>{searchResult.title}</ChartTitle>
      <BillboardChart data={data} />
    </>
  );
};

export default TagDonutChart;
