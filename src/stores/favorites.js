import { observable, action } from 'mobx';

export default class Favorites {
  @observable favs = []

  @action
  setFavs = (favs) => {
    this.favs = favs
  }

  @action
  addFav = (quote) => {
    this.favs.push(quote);
  }
}