import * as React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppLayout from './components/layout/App.Layout';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

class App extends React.Component<{}, null> {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppLayout></AppLayout>
      </MuiThemeProvider>
    );
  }
}

export default App;
