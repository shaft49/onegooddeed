import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router'
import LandingPage from './services/LandingPage';
import ErrorPage from './services/ErrorPage';
import history from './history';
import * as serviceWorker from './serviceWorker';

const App = () => (
  <Router history={history}>
      <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
              render={() => (
                  <ErrorPage title="404" description="Page not found" />
              )}
          />
      </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
