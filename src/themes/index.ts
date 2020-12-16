import { createMuiTheme } from '@material-ui/core/styles';
import './index.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: `'Spoqa Han Sans','Nanum Gothic','DM Serif Display', serif`,
    h1: {
      fontFamily: 'IBMPlexSansKR-Bold',
    },
    h2: {
      fontFamily: 'IBMPlexSansKR-SemiBold',
    },
  },
  palette: {
    primary: {
      main: '#0e0907',
      light: '#F5F5F5',
      dark: '#616161',
    },
    secondary: {
      main: '#D32F2F',
      light: '#fff2f3',
      dark: '#9a2225',
    },
    info: {
      main: '#795548',
      light: '#D7CCC8',
      dark: '#5D4037',
    },
    text: {
      primary: '#21140f',
    },
  },
});

export default theme;
