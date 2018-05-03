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
        <Route exact path='/' component={Main} />
        <Route path='/how_to' component={HowTo} />
      </div>
    </Router>
  </Provider>
)