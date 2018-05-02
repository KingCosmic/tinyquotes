import { combineReducers } from 'redux';

import quote from './quote';
import toggle from './toggle';
import favorites from './favorites';

export let dataState = {
  quote: {
    cite: '',
    author: '',
    referer: '',
    social: '',
    tags: [],
    meta: {}
  },
  favorites: [],
  theme: true,
  showfavorites: false,
};
 
// Combine all the reducers
export default combineReducers({
  quote,
  toggle,
  favorites
})