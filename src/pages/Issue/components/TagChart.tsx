import React, { FC } from 'react';
import BillboardChart from 'react-billboardjs';
import Button from '@material-ui/core/Button';
import styled from '@emotion/styled';
import 'react-billboardjs/lib/billboard.css';

const GridHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  border-bottom: 0.1rem solid #c6becf;
  padding-bottom: 1%;
  font-size: 1.2em;
`;

interface Props {
  searchResult: {
    title: string;
    contents: { tag: string; count: number }[];
  };
}
const TagChart: FC<Props> = ({ searchResult }: Props) => {
  console.log(searchResult);
  console.log(searchResult.title);
  const columnData = searchResult.contents.map((content) => content.count);
  const categories = searchResult.contents.map((content) => content.tag);
  const data = {
    columns: [[searchResult.title, ...columnData]],
    type: 'bar',
    onclick(d) {
      console.log(this.categories()[d.index]);
    },
    colors: {
      environment: '#D32F2F',
    },
    labels: {
      colors: 'white',
      centered: true,
    },
  };
  const axis = {
    x: {
      type: 'category',
      categories: [...categories],
      colors: 'white',
      centered: true,
    },
    rotated: true,
  };

  return (
    <>
      <GridHeader>
        <div className="title">{searchResult.title}</div>
        <Button variant="outlined" size="small">
          More Details
        </Button>
      </GridHeader>
      <BillboardChart data={data} axis={axis} />
    </>
  );
};

export default TagChart;
