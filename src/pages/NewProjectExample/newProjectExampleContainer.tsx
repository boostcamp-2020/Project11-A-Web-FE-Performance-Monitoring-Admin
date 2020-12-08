import React from 'react';
import { useLocation } from 'react-router-dom';
import NewProjectExample from './NewProjectExample';


interface prop {
  token: string;
}
const NewProjectExampleContainer = (props: prop) : JSX.Element => {
  const mine = useLocation();
  const { token } = mine.state;
  return (
    <NewProjectExample {...{token}} />
  );
}
export default NewProjectExampleContainer;