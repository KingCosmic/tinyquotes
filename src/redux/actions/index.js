
/*
 * action types
 */

export const RANDOM_QUOTE = 'RANDOM_QUOTE';
export const SET_QUOTE = 'SET_QUOTE';
export const TOGGLE_THEME = 'TOGGLE_THEME';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';
export const SET_FAVS = 'SET_FAVS';
export const ADD_FAV = 'ADD_FAV';

/*
 * action creators
 */

export const randomQuote = () =>
  ({ type: RANDOM_QUOTE })

export const setQuote = (quote) =>
  ({ type: SET_QUOTE, quote })

export const toggleTheme = () =>
  ({ type: TOGGLE_THEME })

export const toggleFavorites = () =>
  ({ type: TOGGLE_FAVORITES })

export const setFavs = (favs) =>
  ({ type: SET_FAVS, favs })

export const addFav = (quote) =>
  ({ type: ADD_FAV, quote })