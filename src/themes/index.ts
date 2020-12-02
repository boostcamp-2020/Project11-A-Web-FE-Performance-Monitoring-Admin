import { createMuiTheme } from '@material-ui/core';
import './index.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'IBMPlexSansKR-Regular',
    h1: {
      fontFamily: 'IBMPlexSansKR-Bold',
    },
    h2: {
      fontFamily: 'IBMPlexSansKR-SemiBold',
    },
  },
  palette: {
    primary: {
      main: '#1A1A1D',
    },
    secondary: {
      main: '#C3073F',
    },
  },
});

export default theme;
