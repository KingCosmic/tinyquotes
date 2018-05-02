import { TOGGLE_THEME, TOGGLE_FAVORITES } from '../actions';
import { dataState } from './index';

export default (state = dataState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      state = Object.assign({}, state, { theme: !state.theme });
      return state;
    case TOGGLE_FAVORITES:
      state = Object.assign({}, state, { showFavorites: !state.showFavorites });
      return state;
    default:
      return state;
  }
};