'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import Notfound from './components/Notfound';
import Pricing from './components/Pricing/Pricing'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
const content = require('./Action/reducer');
const store = createStore(content);
const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="pricing" component={Pricing}/>
    <Route path="*" component={Notfound}/>
  </Route>
);

export default routes;
