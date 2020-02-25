import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import FriendList from './components/FriendList'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import  PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
    <div className="App">
      
      <Switch>
        <Route exact path ='/' component={Login}/>
      <PrivateRoute exact path = '/friendslist' component={FriendList}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
