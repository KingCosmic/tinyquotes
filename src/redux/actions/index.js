
/*
 * action types
 */

export const RANDOM_QUOTE = 'RANDOM_QUOTE';
export const TOGGLE_THEME = 'TOGGLE_THEME';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

/*
 * action creators
 */

export const randomQuote = () =>
  ({ type: RANDOM_QUOTE })

export const toggleTheme = () =>
  ({ type: TOGGLE_THEME })

export const toggleFavorites = () =>
  ({ type: TOGGLE_FAVORITES })