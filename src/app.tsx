import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@themes/index';

const App: FunctionComponent = () => <ThemeProvider theme={theme} />;

export default App;
