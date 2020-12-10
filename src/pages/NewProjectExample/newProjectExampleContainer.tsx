import React from 'react';
import { useLocation } from 'react-router-dom';
import NewProjectExample from './NewProjectExample';

interface LocationState {
  token:string;
}
const NewProjectExampleContainer = () : JSX.Element => {
  const location = useLocation<LocationState>();
  const { token } = location.state;
  return (
    <NewProjectExample {...{token}} />
  );
}
export default NewProjectExampleContainer;