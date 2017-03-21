'use strict';

import React from 'react';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import Layout from './components/Layout';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
const reducer = require('./Action/reducer');
const store = createStore(reducer);

// import { createStore } from 'redux';
// const content = require('./Action/reducer');
// const store = createStore(content);
// import Layout from './components/Layout';
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
  </Provider>,
  document.getElementById('main')
)
