import React from 'react';
import NewProjectExample from './NewProjectExample';


interface prop {
  token: string;
}
const NewProjectExampleContainer = (props: prop) : JSX.Element => {
  
  return (
    <NewProjectExample />
  );
}
export default NewProjectExampleContainer;