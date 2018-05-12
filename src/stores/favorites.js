import { observable, action } from 'mobx';

import { indexOfQuote } from '../helpers';

export default class Favorites {
  @observable favs = []

  @action
  setFavs = (favs) => {
    this.favs = favs
  }

  @action
  addFav = (quote) => {
    // already faved
    if (indexOfQuote(this.favs, quote) !== -1) return;
    this.favs.push(quote);
    localStorage.setItem('loved', JSON.stringify(this.favs));
  }
}