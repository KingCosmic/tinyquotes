import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './css/index.css';
import './css/fonts.css';

import AppContainer from './containers/AppContainer';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();