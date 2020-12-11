import React from 'react';
import { useLocation } from 'react-router-dom';
import NewProjectExample from './NewProjectExample';

interface LocationState {
<<<<<<< HEAD:src/pages/NewProjectExample/NewProjectExampleContainer.tsx
  token: string;
}
const NewProjectExampleContainer = (): JSX.Element => {
  const mine = useLocation<LocationState>();
  const { token } = mine.state;
  return <NewProjectExample {...{ token }} />;
};
export default NewProjectExampleContainer;
=======
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
>>>>>>> feature/refactor2:src/pages/NewProjectExample/newProjectExampleContainer.tsx
