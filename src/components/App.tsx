import * as React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../reducers';
import Header from './common/Header';

let store = createStore(reducers);

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <Header/>
          {this.props.children}
        </div>
      </Provider>
    );
  }
};

export default App;
