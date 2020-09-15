import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter basename='/'>
    <Layout>
      <Switch>
        <Route exact path='/' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
