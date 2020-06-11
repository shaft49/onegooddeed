import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router'
import ErrorPage from './services/ErrorPage';
import history from './history';
import * as serviceWorker from './serviceWorker';

import App from './App'
const Root = () => (
  <Router history={history}>
      <Switch>
          <Route exact path="/" component={App} />
          <Route
              render={() => (
                  <ErrorPage title="404" description="Page not found" />
              )}
          />
      </Switch>
  </Router>
);

// ReactDOM.render(<Hook/>, document.getElementById('root'));
ReactDOM.render(<Root/>, document.getElementById('root'));
// ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
