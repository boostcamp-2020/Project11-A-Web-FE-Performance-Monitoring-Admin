import React from 'react';
import { useLocation } from 'react-router-dom';
import NewProjectExample from './NewProjectExample';

interface LocationState {
  token:string;
  platform:string;
}
const NewProjectExampleContainer = () : JSX.Element => {
  const location = useLocation<LocationState>();
  const { token,platform } = location.state;
  return (
    <NewProjectExample {...{token,platform}} />
  );
}
export default NewProjectExampleContainer;