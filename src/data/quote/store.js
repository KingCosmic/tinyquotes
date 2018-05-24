import { ReduceStore } from 'flux/utils';
import actionTypes from './actionTypes';
import Dispatcher from '../dispatcher';

import actions from './actions';

import Quote from './quote';

import quotes from '../../quotes';
import { networkLink, checkTwitter } from '../../helpers';

class Store extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    setInterval(actions.randomQuote, 60000);
    
    let quote = window.location.hash;
    if (quote) return new Quote(this.setQuote(quote.substring(1)));

    return new Quote(this.randomQuote());
  }

  reduce(state, action) {
    switch (action.type) {
      case actionTypes.RANDOM_QUOTE:

        return state = new Quote(this.randomQuote());

      default:
        return state;
    }
  }

  setQuote(id) {
    let quote = quotes.filter((quote) => quote.id === id)[0];
    return this.getQuoteInfo(quote)
  }

  randomQuote() {
    // This line of code defines a random number from 1 to the length of the quotes array
    let quote = quotes[Math.floor(Math.random() * quotes.length)];

    return this.getQuoteInfo(quote)
  }

  getQuoteInfo(quote) {
    // get us the info from the quote object
    let { cite, author, referer, social } = quote;

    let referal = (referer === undefined) ? undefined : networkLink(social, referer);
    let encoded = encodeURIComponent(cite.trim());

    let size;
    if (window.screen.width >= 961) {
      if (cite.length >= 140) {
        size = '2em';
      } else if (cite.length >= 200) {
        size = '1.7em';
      } else {
        size = '2.5em';
      }
    }

    return Object.assign({}, quote, {
      meta: {
        size,
        referal,
        encoded,
        twitter: checkTwitter(encoded, author)
      }
    })
  }
}

export default new Store();