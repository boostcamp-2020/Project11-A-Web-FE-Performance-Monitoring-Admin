import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Paper, Button } from '@material-ui/core';
import { FolderSpecial } from '@material-ui/icons';
import { User } from '@store/type';
import PlatformSelecter from './PlatformSelector';
import ProjectNameInput from './ProjectNameInput';
import ProjectAlert from './ProjectAlert';
import AppbarShift from '../../layout/AppbarShift';
import NewProjectHeader from './NewProjectHeader';
import ProjectAdminContainer from '../ProjectAdminContainer';
import ProjectMemberContainer from '../ProjectMemberContainer';

const MIN_PROJECT_NAME_LENGTH = 4;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    paddingTop: '2%',
    paddingLeft: '2%',
    width: '80%',
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

interface Props {
  selectedPlatform: string;
  projectName: string;
  alertSetting: string;
  alertLevel: string;
  alertMails: string[];
  projectMembers: User[];
  projectAdmins: User[];
  setPlatform: React.Dispatch<React.SetStateAction<string>>;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
  setAlert: React.Dispatch<React.SetStateAction<string>>;
  setAlertLevel: React.Dispatch<React.SetStateAction<string>>;
  setMails: React.Dispatch<React.SetStateAction<string[]>>;
  setMembers: React.Dispatch<React.SetStateAction<User[]>>;
  setAdmins: React.Dispatch<React.SetStateAction<User[]>>;
  handleCreateButton: () => Promise<void>;
}

const NewProjectForm = ({
  selectedPlatform,
  setPlatform,
  projectName,
  setProjectName,
  alertSetting,
  setAlert,
  alertLevel,
  setAlertLevel,
  alertMails,
  setMails,
  projectMembers,
  setMembers,
  projectAdmins,
  setAdmins,
  handleCreateButton,
}: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
      <Paper className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid
          container
          spacing={5}
          direction="column"
          justify="flex-start"
          alignItems="stretch"
        >
          <NewProjectHeader />
          <PlatformSelecter
            selectedPlatform={selectedPlatform}
            setPlatform={setPlatform}
          />
          <ProjectNameInput
            projectName={projectName}
            setProjectName={setProjectName}
          />
          <ProjectAdminContainer
            projectAdmins={projectAdmins}
            setAdmins={setAdmins}
          />
          <ProjectMemberContainer
            projectMembers={projectMembers}
            setMembers={setMembers}
          />
          <ProjectAlert
            alertMails={alertMails}
            alertLevel={alertLevel}
            alertSetting={alertSetting}
            setAlert={setAlert}
            setAlertLevel={setAlertLevel}
            setMails={setMails}
          />
          <Grid item xs className={classes.buttonWrap}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<FolderSpecial />}
              onClick={handleCreateButton}
              disabled={
                selectedPlatform === '아직 선택하지 않았습니다.' ||
                projectName.length < MIN_PROJECT_NAME_LENGTH
              }
            >
              프로젝트 만들기
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default NewProjectForm;
