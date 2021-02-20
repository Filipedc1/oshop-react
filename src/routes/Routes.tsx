import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../app/login/Login';
import Products from '../app/products/Products';

export default function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/login" component={Login} />

        {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
        <Route component={Login} />
      </Switch>
    );
  }