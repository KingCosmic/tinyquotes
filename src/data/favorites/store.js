import { ReduceStore } from 'flux/utils';
import actionTypes from './actionTypes';
import Dispatcher from '../dispatcher';

import { indexOfQuote } from './helpers';

class Store extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    let lovedQuotes = localStorage.getItem('loved');

    return (lovedQuotes) ? JSON.parse(lovedQuotes) : []
  }

  reduce(state, action) {
    switch (action.type) {
      case actionTypes.FAV_QUOTE:

        if (indexOfQuote(state, action.quote) !== -1) {
          return console.log('Already Favorited')
        }

        delete action.quote.meta;
        state.push(action.quote);
        localStorage.setItem('loved', JSON.parse(state));

        return state;

      default:
        return state;
    }
  }
}

export default new Store();