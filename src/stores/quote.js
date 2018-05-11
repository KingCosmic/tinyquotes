import { observable, action } from 'mobx';

import { quotes } from '../views/main/quotes';
import { networkLink, checkTwitter } from '../views/main/helpers';

export default class Quote {
  @observable info = {
    id: '',
    cite: '',
    author: '',
    referer: '',
    social: '',
    tags: [],
    meta: {}
  }

  @action
  setQuote = (id) => {
    let quote = quotes.filter((quote) => quote.id === id)[0];
    this.info = Object.assign({}, this.info, getQuoteInfo(quote))
  }

  @action
  randomQuote = () => {
    // This line of code defines a random number from 1 to the length of the quotes array
    let quote = quotes[Math.floor(Math.random() * quotes.length)];

    this.info = Object.assign({}, this.info, getQuoteInfo(quote))
  }
}

const getQuoteInfo = (quote) => {
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