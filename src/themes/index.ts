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
});

export default theme;
