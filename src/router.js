import React from 'react';

import Main from './views/main';
import HowTo from './views/howto';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'mobx-react';
import { Quote, Favorites, Ui } from './stores';

export default () => (
  <Provider quote={new Quote()} favorites={new Favorites()} ui={new Ui()}>
    <Router>
      <div id='container'>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main} />
        <Route path={`${process.env.PUBLIC_URL}/:quote`} component={Main} />
        <Route path={`${process.env.PUBLIC_URL}/how_to`} component={HowTo} />
      </div>
    </Router>
  </Provider>
)