import actionTypes from './actionTypes';
import Dispatcher from '../dispatcher';

export default {
  toggleTheme: () => {
    Dispatcher.dispatch({
      type: actionTypes.TOGGLE_THEME
    });
  },
  
  toggleFavs: () => {
    Dispatcher.dispatch({
      type: actionTypes.TOGGLE_FAVS
    })
  }
};