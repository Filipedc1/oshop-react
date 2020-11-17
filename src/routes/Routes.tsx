import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../app/login/Login';
import { Home } from '../app/home/Home';

export default function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />

        {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
        <Route component={Login} />
      </Switch>
    );
  }