import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './redux/store';

import './css/index.css';
import './css/fonts.css';
import Main from './Main';

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));
registerServiceWorker();
