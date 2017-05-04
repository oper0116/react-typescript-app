import * as React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component<{}, {}> {
  render() {
    return(
      <div className="row">
        <nav className="navbar navbar-default">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/member">Member</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
