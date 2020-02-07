import React from 'react';
import GithubState from './context/github/githubState';

/* eslint-disable */
import ax from './services/api';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import About from './components/Pages/About';
import User from './components/Users/User';
import Home from './components/Pages/Home';

import NotFound from './components/Pages/NotFound';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <Router>
        <>
          <Navbar title="Github Finder" icon="fab fa-github fa-1x mr-1" />
          <Switch>
            <Route exact path="/" render={
              props => (
                <Home />
              )
            }
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:handle' render={props => (
              <User {...props} />
            )}
            />
            <Route component={NotFound} />
          </Switch>
        </>
      </Router>
    </GithubState>
  );
}

export default App;
