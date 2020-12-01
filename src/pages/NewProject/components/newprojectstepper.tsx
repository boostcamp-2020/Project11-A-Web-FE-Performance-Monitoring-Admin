import React , { useState } from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StepIconProps } from '@material-ui/core/StepIcon';
import DoneIcon from '@material-ui/icons/Done';
import { Grid } from '@material-ui/core';
import PlatformSelecter from './platformSelecter';
import ProjectNameInput from './projectNameInput';
import StepperResult from './stepperResult';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <AssignmentIcon />,
    3: <GroupAddIcon />,
    4: <DoneIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      flexGrow: 1,
    },
    button: { 
      marginRight: theme.spacing(1),
    },
    buttons: { 
      marginLeft: '80%',
    },
    content: {
      marginLeft: '10%',
      height: '20vh',
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Select your platform', 'Write your project info', 'Add assiagn to project','Done !'];
}



export default function CustomizedSteppers() : JSX.Element {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [seletedPlatform, setPlatform] = useState('아직 선택하지 않았습니다.');
  const [projectName, setProjectName] = useState('New Project');

  const steps = getSteps();

  function getStepContent(step: number) {
    const props = {seletedPlatform, setPlatform, projectName, setProjectName};
    switch (step) {
      case 0:
        return <PlatformSelecter {...props} />;
      case 1:
        return <ProjectNameInput {...props} />;
      case 2:
        return 'This is the bit I really care about!';
      default:
        return <StepperResult {...props} />;
    }
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
          ))}
          </Stepper>
        </Grid>
        {activeStep === steps.length ? (
          <Grid item xs={12}>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Grid item xs={12} className={classes.content}>
              {getStepContent(activeStep)} 
            </Grid>       
            <Grid item xs={12} sm={6} className={classes.buttons}>     
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
}