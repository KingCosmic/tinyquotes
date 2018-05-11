import { observable, action } from 'mobx';

export default class Ui {
  @observable theme = true;
  @observable showFavorites = false;

  @action
  toggleTheme = () => {
    this.theme = !this.theme;
  }

  @action
  toggleFavorites = () => {
    this.showFavorites = !this.showFavorites;
  }
}