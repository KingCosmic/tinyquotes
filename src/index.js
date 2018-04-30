import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/fonts.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
