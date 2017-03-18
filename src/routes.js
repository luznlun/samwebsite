'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import Notfound from './components/Notfound/Notfound';
import Pricing from './components/Pricing/Pricing'

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="pricing" component={Pricing}/>
    <Route path="*" component={Notfound}/>
  </Route>
);

export default routes;
