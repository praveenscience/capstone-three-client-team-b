import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import Header from '../Header/Header';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import LandingPage from '../../routes/LandingPage/LandingPage';
import RulesPage from '../../routes/RulesPage/RulesPage';
import GamePage from '../../routes/GamePage/GamePage';
import GameTable from '../GameTable/GameTable';
import GameEnd from '../../routes/GameEnd/GameEnd';

import './App.css';

export default class App extends Component {
  state = { hasError: false };

  render() {
    return (
      <div className="App">
        <header className="App_header">
          <Route
            path={['/', '/rules', '/game', '/login', '/register']}
            exact
            component={Header}
          />
        </header>
        <main>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />{' '}
            {/* should we fix this so if you're logged in already you don't end up at the landing page again? */}
            <PublicOnlyRoute path={'/login'} component={LoginPage} />
            <PublicOnlyRoute path={'/register'} component={RegistrationPage} />
            <PrivateRoute path={'/rules'} component={RulesPage} />
            <PrivateRoute exact path={'/game'} component={GamePage} />
            <PrivateRoute path={'/game/:game_id'} component={GameTable} />
            <PrivateRoute path={'/end'} component={GameEnd} />
          </Switch>
        </main>
      </div>
    );
  }
}
