import actionTypes from './actionTypes';
import Dispatcher from '../dispatcher';

export default {
  randomQuote: () => {
    Dispatcher.dispatch({
      type: actionTypes.RANDOM_QUOTE
    });
  }
};