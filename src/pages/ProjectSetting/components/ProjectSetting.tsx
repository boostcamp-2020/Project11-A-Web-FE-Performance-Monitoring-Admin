import React, { Dispatch } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Container, Button } from '@material-ui/core';
import { User } from '@store/type';
import AppbarShift from '../../layout/AppbarShift';
import FixedInformation from './FixedInformation';
import ProjectNameInput from './ProjectNameInput';
import ProjectAdminSettingContainer from '../ProjectAdminSettingContainer';
import ProjectMemberSettingContainer from '../ProjectMemberSettingContainer';

const MIN_PROJECT_NAME_LENGTH = 4;
interface Props {
  project: any;
  user: any;
  projectAlert: string;
  projectName: string;
  setProjectName: Dispatch<any>;
  projectMembers: User[];
  setMembers: Dispatch<React.SetStateAction<User[]>>;
  projectAdmins: User[];
  setAdmins: Dispatch<React.SetStateAction<User[]>>;
  handlePatchButton: () => void;
  handleDeleteButton: (projectId: string) => void;
  handleLevelChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const ProjectSetting = ({
  project,
  user,
  projectAlert,
  projectName,
  setProjectName,
  projectMembers,
  setMembers,
  projectAdmins,
  setAdmins,
  handlePatchButton,
  handleDeleteButton,
  handleLevelChange,
}: Props): JSX.Element => {
  const classes = useStyles();
  const { _id: projectId, platform, sdkToken, owner } = project;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <FixedInformation
              projectId={projectId}
              owner={owner.nickname}
              platform={platform}
              sdkToken={sdkToken}
              alertLevel={projectAlert}
              handleLevelChange={handleLevelChange}
            />
            <ProjectNameInput {...{ projectName, setProjectName }} />
            <ProjectAdminSettingContainer {...{ projectAdmins, setAdmins }} />
            <ProjectMemberSettingContainer
              {...{ projectMembers, setMembers }}
            />
            <Grid item xs className={classes.buttonWrap}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={handlePatchButton}
                disabled={projectName.length < MIN_PROJECT_NAME_LENGTH}
              >
                프로젝트 수정하기
              </Button>
              <Button
                disabled={owner._id !== user.id}
                onClick={() => handleDeleteButton(projectId)}
              >
                프로젝트 삭제하기
              </Button>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default ProjectSetting;
