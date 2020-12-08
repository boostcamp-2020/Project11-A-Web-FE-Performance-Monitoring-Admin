import React from 'react';
import { useLocation } from 'react-router-dom';
import NewProjectExample from './NewProjectExample';

interface LocationState {
  token:string;
}
const NewProjectExampleContainer = () : JSX.Element => {
  const mine = useLocation<LocationState>();
  const { token } = mine.state;
  return (
    <NewProjectExample {...{token}} />
  );
}
export default NewProjectExampleContainer;