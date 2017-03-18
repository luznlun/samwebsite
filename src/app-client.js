'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

// import { createStore } from 'redux';
// const content = require('./Action/reducer');
// const store = createStore(content);
// import Layout from './components/Layout';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
