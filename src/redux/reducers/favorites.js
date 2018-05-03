import { SET_FAVS, ADD_FAV } from '../actions';
import { dataState } from './index';

export default (state = dataState.favorites, action) => {
  switch (action.type) {
    case SET_FAVS:
      state = action.favs;
      return state;
    case ADD_FAV:
      state = [].concat(state, action.quote);
      return state;
    default:
      return state;
  }
};