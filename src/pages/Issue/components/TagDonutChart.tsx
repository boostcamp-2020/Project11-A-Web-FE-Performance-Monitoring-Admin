import React, { FC } from 'react';
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';

interface SearchResult {
  title: string;
  contents: { tag: string; count: number }[];
}

interface Props {
  searchResult: SearchResult;
}
const TagDonutChart: FC<Props> = ({ searchResult }: Props) => {
  const columnData = searchResult.contents.map((content) => [
    content.tag,
    content.count,
  ]);
  const title = {
    text: `${searchResult.title}`,

    padding: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
    position: 'center',
  };
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
      <BillboardChart title={title} data={data} />
    </>
  );
};

export default TagDonutChart;
