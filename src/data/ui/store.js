import { ReduceStore } from 'flux/utils';
import actionTypes from './actionTypes';
import Dispatcher from '../dispatcher';

class Store extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return {
      theme: true,
      favs: false
    }
  }

  reduce(state, action) {
    switch (action.type) {
      case actionTypes.TOGGLE_THEME:

        return Object.assign({}, state, { theme: !state.theme });

      case actionTypes.TOGGLE_FAVS:

        return Object.assign({}, state, { favs: !state.favs });

      default:
        return state;
    }
  }
}

export default new Store();