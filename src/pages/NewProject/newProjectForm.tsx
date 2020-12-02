import React , { useState } from 'react';

interface prop {
  seletedPlatform:string;
  projectName:string;
  setPlatform:React.Dispatch<React.SetStateAction<string>>;
  setProjectName:React.Dispatch<React.SetStateAction<string>>;
}

const NewProjectForm = () : JSX.Element => {

  const prop = {seletedPlatform,setPlatform,projectName,setProjectName}
  return (
    <Grid container xs={12} spacing={3}>

    </Grid>
  );
}
export default NewProjectContainer;