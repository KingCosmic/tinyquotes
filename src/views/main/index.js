import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Header from './components/Header';
import Quote from './components/Quote';
import Footer from './components/Footer';
import Favorites from './components/Favorites';

@inject('quote', 'ui', 'favorites')
@observer
export default class Main extends Component {
  componentWillMount() {
    const { quote, favorites, match } = this.props;
    const { setQuote, randomQuote } = quote;
    const { setFavs } = favorites;

    let lovedQuotes = localStorage.getItem('loved');

    setFavs((lovedQuotes) ? JSON.parse(lovedQuotes) : []);
    if (match.params.quote) {
      setQuote(match.params.quote)
    } else {
      randomQuote();
    }

    // Set interval to show a new random quote every 60 seconds
    this.quoteInterval = setInterval(randomQuote, 60000);
  }

  render() {
    const { ui: { theme } } = this.props;
    return (
      <div id='container' className={(theme) ? 'dark' : 'light'} >
        <Header />
        <Quote />
        <Footer />
        <Favorites />
      </div>
    );
  }
}
