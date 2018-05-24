import AppView from '../views/AppView';
import { Container } from 'flux/utils';

import QuoteStore from '../data/quote/store';
import QuoteActions from '../data/quote/actions';

import FavStore from '../data/favorites/store';
import FavActions from '../data/favorites/actions';

import UIStore from '../data/ui/store';
import UIActions from '../data/ui/actions';

const getStores = () => [
  QuoteStore,
  FavStore,
  UIStore,
];

const getState = () => ({
  quote: QuoteStore.getState(),
  randomQuote: QuoteActions.randomQuote,

  favs: FavStore.getState(),
  favQuote: FavActions.favQuote,

  ui: UIStore.getState(),
  toggleTheme: UIActions.toggleTheme,
  toggleFavs: UIActions.toggleFavs
})

export default Container.createFunctional(AppView, getStores, getState);