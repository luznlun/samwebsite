'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
const content = require('./Action/reducer');

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

// universal routing and rendering
app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      const store = createStore(content);

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps}/>
          </Provider>
        );
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }
      const preloadedState = store.getState()
      res.send(renderFullPage(markup, preloadedState))

      // render the index template with the embedded React markup
      // return res.render('index', { markup });
    }
  );
});

function renderFullPage(html, preloadedState) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="shortcut icon" href="/img/favicon.ico">
      <link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>Chris</title>

      <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
      <meta name="viewport" content="width=device-width" />

      <link href="bootstrap3/css/bootstrap.css" rel="stylesheet" />
      <link href="assets/css/gsdk.css" rel="stylesheet" />
      <link href="assets/css/demo.css" rel="stylesheet" />

      <!--     Font Awesome     -->
      <link href="bootstrap3/css/font-awesome.css" rel="stylesheet"/>
      <link href='https://fonts.googleapis.com/css?family=Grand+Hotel' rel='stylesheet' type='text/css'/>
    </head>
    <body>
      <div id="main">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
      <script src="../static/js/bundle.js"></script>
      <script src="jquery/jquery-1.10.2.js" type="text/javascript"></script>
      <script src="assets/js/jquery-ui-1.10.4.custom.min.js" type="text/javascript"></script>

      <script src="bootstrap3/js/bootstrap.js" type="text/javascript"></script>
      <script src="assets/js/gsdk-checkbox.js"></script>
      <script src="assets/js/gsdk-radio.js"></script>
      <script src="assets/js/gsdk-bootstrapswitch.js"></script>
      <script src="assets/js/get-shit-done.js"></script>
      <script src="assets/js/custom.js"></script>
    </body>
  </html>

    `
  }


// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
