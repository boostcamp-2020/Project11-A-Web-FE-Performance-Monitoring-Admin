import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    selected : {

    },
    none : {
      
    },
    buttonImg : {
      marginRight: "15px",
      display: "flex",
    },
    buttonContext : {
      display: "flex",
    },
  }),
);
interface prop {
  setPlatform: React.Dispatch<React.SetStateAction<string>>;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
  seletedPlatform: string;
}

const platforms = [ 'JavaScript','NodeJS','Express' ];

export default function PlatformSelecter(props : prop) : JSX.Element{
  const classes = useStyles();
  const platfromSelect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    props.setPlatform(String(event.currentTarget.textContent));
    props.setProjectName(`New ${event.currentTarget.textContent} project`);
  }
  const imgsource = (platform:string) => {
    return `public/img/${platform}.svg`;
  }

  return (
    <div className={classes.root}>
      <Typography>
        프로젝트의 Platform 을 선택해주세요.
      </Typography>
      <Typography>
        선택된 플랫폼은 :  {props.seletedPlatform}
      </Typography>
      {platforms.map((platform) => (
        <Button key={platform} className={classes.none} variant="outlined" onClick={platfromSelect}>
          <img className={classes.buttonImg} src={imgsource(platform)} height="50" width="50" alt={platform} />
          <span className={classes.buttonContext}>{platform}</span>
        </Button>
      )
      )}
    </div>
  )
}