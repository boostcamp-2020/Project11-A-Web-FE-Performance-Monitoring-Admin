import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import create from '@api/project/create';
import PlatformSelecter from './components/platformSelecter';
import ProjectNameInput from './components/projectNameInput';
import ProjecAlert from './components/projectAlert';
import AppbarShift from '../layout/appbarshift';
import ProjectMember from './components/projectMember';
import ProjectAdmin from './components/projectAdmin';


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
  contentTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    margin: theme.spacing(1),
  },
  contentText: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: '2%',
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

interface prop {
  seletedPlatform:string;
  projectName:string;
  alertSetting:string;
  alertMails:string[];
  projectMembers:string[];
  projectAdmins:string[];
  setPlatform:React.Dispatch<React.SetStateAction<string>>;
  setProjectName:React.Dispatch<React.SetStateAction<string>>;
  setAlert:React.Dispatch<React.SetStateAction<string>>;
  setMails:React.Dispatch<React.SetStateAction<string[]>>;
  setMembers:React.Dispatch<React.SetStateAction<string[]>>;
  setAdmins:React.Dispatch<React.SetStateAction<string[]>>;
}

const NewProjectForm = (props : prop) : JSX.Element => {
  const classes = useStyles();

  const handleCreateButton = () => {
    const data = {
      platform:props.seletedPlatform,
      projectName:props.projectName,
      emails:props.alertMails,
      admins:props.projectAdmins,
      members:props.projectMembers,
    }
    create(data);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarShift />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid 
          container 
          spacing={5}
          direction="column"
          justify="flex-start"
          alignItems="stretch"
        >
          <Grid item xs>
            <Paper className={classes.paper}>
              <Typography className={classes.contentTitle}>
                당신의 프로젝트를 시작하세요 !
              </Typography>
              <Divider variant="middle" />
              <Typography className={classes.contentText}>
                프로젝트는 여러분의 어플리케이션에서 에러 및 로그 정보들을 수집해서
                여러분의 동료들과 함께 확인할 수 있게 제공하고 있습니다.
                <br />
                지금부터 여러분만의 프로젝트를 만들어보세요.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Typography className={classes.contentTitle}>
                플랫폼 선택하기
              </Typography>
              <Divider variant="middle" />
              <PlatformSelecter {...props} />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Typography className={classes.contentTitle}>
                프로젝트 이름정하기
              </Typography>
              <Divider variant="middle" />
              <ProjectNameInput {...props} />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Typography className={classes.contentTitle}>
                담당자 선택하기
              </Typography>
              <Divider variant="middle" />
              <ProjectAdmin {...props} />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Typography className={classes.contentTitle}>
                멤버 선택하기
              </Typography>
              <Divider variant="middle" />
              <ProjectMember {...props} />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Typography className={classes.contentTitle}>
                알람설정 하기
              </Typography>
              <Divider variant="middle" />
              <ProjecAlert {...props} />
            </Paper>
          </Grid>
          <Grid item xs className={classes.buttonWrap}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<FolderSpecialIcon />}
              onClick={handleCreateButton}
              disabled={(props.seletedPlatform==='아직 선택하지 않았습니다.')||(props.projectName.length < 4)}
            >
              프로젝트 만들기
            </Button>
          </Grid>
        </Grid>
      </main>
    </div>
    
  );
}
export default NewProjectForm;