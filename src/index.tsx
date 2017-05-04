import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import MemberPage from './components/member/MemberPage';
import AboutPage from './components/about/AboutPage';
import TopicsPage from './components/topics/TopicsPage';

ReactDOM.render(
  <Router>
      <Switch>
        <App>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/member" component={MemberPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/topics" component={TopicsPage} />
        </App>
      </Switch>
  </Router>,
  document.getElementById('root')
);
