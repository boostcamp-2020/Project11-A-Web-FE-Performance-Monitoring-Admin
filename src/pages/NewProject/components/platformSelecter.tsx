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
    buttonImg : {
      marginRight: "15px",
      display: "flex",
    },
    buttonContext : {
      display: "flex",
    },
    platformHighlight : {
      fontWeight: "bold",
      color: "red",
    }
  }),
);
interface prop {
  seletedPlatform: string;
  setPlatform: React.Dispatch<React.SetStateAction<string>>;
}

const platforms = [ 'JavaScript','NodeJS','Express' ];

export default function PlatformSelecter(props : prop) : JSX.Element{
  const classes = useStyles();
  const platfromSelect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    props.setPlatform(String(event.currentTarget.textContent));
  }
  const imgsource = (platform:string) => {
    return `public/img/${platform}.svg`;
  }

  return (
    <div className={classes.root}>
      <Typography>
        여러분의 프로젝트가 진행될 플랫폼을 선택하여주세요.
      </Typography>
      <Typography>
        선택된 플랫폼은 <span className={classes.platformHighlight}>{props.seletedPlatform}</span>
      </Typography>
      {platforms.map((platform) => (
        <Button key={platform} variant="outlined" onClick={platfromSelect}>
          <img className={classes.buttonImg} src={imgsource(platform)} height="50" width="50" alt={platform} />
          <span className={classes.buttonContext}>{platform}</span>
        </Button>
      )
      )}
    </div>
  )
}