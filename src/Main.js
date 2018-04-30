import React, { Component } from 'react';

import { quotes } from './quotes'

import { networkLink, checkTwitter } from './helpers';

import Header from './components/Header';
import Quote from './components/Quote';
import Footer from './components/Footer';
import Favorites from './components/Favorites';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: true,
      showFavorites: false,
      selectedQ: 0,
      quote: '',
      referer: '',
      author: '',
      encodedQuote: '',
      tags: [],
      twitter: false
    }

    this.randomQ = () => {
      // This line of code defines a random number from 1 to the length of the quotes array
      let selectedQ = Math.floor(Math.random() * quotes.length);

      // get us the info from the quote object
      let {quote, author, referer, social, tags} = quotes[selectedQ];

      let referal = (referer === undefined) ? undefined : networkLink(social, referer);
      let encodedQuote = encodeURIComponent(quote.trim());

      let quoteSize;
      if (window.screen.width >= 961) {
        if (quote.length >= 140) {
          quoteSize = '2em';
        } else if (quote.length >= 200) {
          quoteSize = '1.7em';
        } else {
          quoteSize = '2.5em';
        }
      }

      this.setState({
        selectedQ,
        quoteSize,
        quote,
        author,
        tags,
        referer,
        referal,
        encodedQuote,
        twitter: checkTwitter(encodedQuote, author)
      })
    }

    this.searchQT = () => {}

    this.love = () => {}

    this.handleKeyPress = (e) => {

      console.log('Hey')
      // Random quote
      if (e.keyCode === '82') {
        clearInterval(this.quoteInterval);
        this.quoteInterval = setInterval(this.randomQ, 60000);
        this.randomQ();
        // Love quote
      } else if (e.keyCode === '70') {
        // Clicking L or F will add the quote to your favourites.
        this.love();
      }
    }

    this.toggleTheme = () => {
      this.setState({
        theme: !this.state.theme
      })
    }

    this.toggleFavorites = (e) => {
      this.setState({
        showFavorites: !this.state.showFavorites
      })
    }

    this.randomQ.bind(this);
    this.searchQT.bind(this);
    this.love.bind(this);
    this.handleKeyPress.bind(this);
    this.toggleTheme.bind(this);
    this.toggleFavorites.bind(this);
  }

  componentWillMount() {
    this.randomQ();
    // Set interval to show a new random quote every 60 seconds
    this.quoteInterval = setInterval(this.randomQ, 60000);
  }

  render() {
    const {
      theme, quote, author, encodedQuote, twitter, referer,
      referal, tags, quoteSize, showFavorites
    } = this.state;
    return (
      <div id='container'
        className={(theme) ? 'dark' : 'light'}
        onKeyDown={this.handleKeyPressed}  
      >
        <Header toggleTheme={this.toggleTheme} />
        <Quote
          quote={quote} author={author} referer={referer} referal={referal}
          tags={tags} encodedQuote={encodedQuote} twitter={twitter}
          quoteSize={quoteSize}
        />
        <Footer randomQ={this.randomQ} showFavorites={this.toggleFavorites} />

        <Favorites favs={[]} open={showFavorites} toggleFavorites={this.toggleFavorites} />
      </div>
    );
  }
}
