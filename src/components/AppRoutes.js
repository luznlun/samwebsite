'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';
import Layout from './Layout';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
const content = require('../Action/reducer');
const store = createStore(content);


export default class AppRoutes extends React.Component {
  render() {
    return (
      <Provider {... { store }}>
        <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
      </Provider>
    );
  }
}
