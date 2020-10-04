import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// Components
import LoginForm from './components/LoginForm'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'

import './App.css';

function App() {
  return (
    <Router >
      <div className="App">
        <nav>
          <li>
            {/* link to login page */}
            <Link to="/login">Login</Link>
          </li>
          <li>
            {/* link to protected Friends page */}
            <Link to="/friends">Friends</Link>
          </li>
        </nav>
        {/* Switch for routing below */}
        <Switch>
          <PrivateRoute path="/friends" component={ FriendsList } />
          <Route path="login" component={ LoginForm } />
          <Route component={ LoginForm } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
