import actionTypes from './actionTypes';
import Dispatcher from '../dispatcher';

export default {
  favQuote: () => {
    Dispatcher.dispatch({
      type: actionTypes.FAV_QUOTE
    });
  }
};