import React from 'react';

import Main from './views/main';
import HowTo from './views/howto';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux';
import store from './redux/store';

export default () => (
  <Provider store={store}>
    <Router>
      <div id='container'>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main} />
        <Route path={`${process.env.PUBLIC_URL}/how_to`} component={HowTo} />
      </div>
    </Router>
  </Provider>
)