import { RANDOM_QUOTE } from '../actions';
import { dataState } from './index';

import { quotes } from '../../quotes';
import { networkLink, checkTwitter } from '../../helpers';

export default (state = dataState.quote, action) => {
  switch (action.type) {
    case RANDOM_QUOTE:
      state = Object.assign({}, state, randomQuote());
      return state
    default:
      return state;
  }
};

const randomQuote = () => {
  // This line of code defines a random number from 1 to the length of the quotes array
  let quote = quotes[Math.floor(Math.random() * quotes.length)];

  // get us the info from the quote object
  let { cite, author, referer, social, tags } = quote;

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

  return ({
    cite,
    author,
    referer,
    social,
    tags,
    meta: {
      size,
      referal,
      encoded,
      twitter: checkTwitter(encoded, author)
    }
  })
}