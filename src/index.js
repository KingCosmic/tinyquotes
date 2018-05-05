import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './css/index.css';
import './css/fonts.css';

import Router from './router';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
