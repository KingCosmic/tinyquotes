import { } from '../actions';
import { dataState } from './index';

export default (state = dataState.favorites, action) => {
  switch (action.type) {
    default:
      return state;
  }
};