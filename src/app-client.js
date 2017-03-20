'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

import { Router, browserHistory } from 'react-router';
import routes from './routes';
import Layout from './components/Layout';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
const content = require('./Action/reducer');
const store = createStore(content);

// import { createStore } from 'redux';
// const content = require('./Action/reducer');
// const store = createStore(content);
// import Layout from './components/Layout';

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    </Provider>
    , document.getElementById('main'));
};
