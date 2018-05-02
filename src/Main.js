import React, { Component } from 'react';

import Header from './components/Header';
import Quote from './components/Quote';
import Footer from './components/Footer';
import Favorites from './components/Favorites';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from './redux/actions';

class Main extends Component {
  constructor(props) {
    super(props);

    this.searchQT = () => {}

    this.love = () => {
      let { quote } = this.state;
      let lovedQuotes = localStorage.getItem('loved');
      if (!lovedQuotes) return localStorage.setItem('loved', JSON.stringify([quote]))
      lovedQuotes = JSON.parse(lovedQuotes);


      let lovedQ = this.indexOf(lovedQuotes, quote);
      if (lovedQ !== -1) {
        console.warn(`Already Loved ${quote}`);
      } else if (lovedQ === -1) {
        lovedQuotes.push(quote);
        localStorage.setItem('loved', JSON.stringify(lovedQuotes));
        console.info(`Loved quote: ${quote}`);
      }
    }

    this.indexOf = (arr, quote) => {
      for (let i = 0; i < arr.length; i++) {
        if(arr[i].quote === quote) {
          return i;
        }
      }
      return -1;
    }
    
    this.searchQT.bind(this);
    this.love.bind(this);
  }

  componentWillMount() {
    const { randomQuote } = this.props;
    randomQuote();
    // Set interval to show a new random quote every 60 seconds
    this.quoteInterval = setInterval(randomQuote, 60000);
  }

  render() {
    const {
      theme
    } = this.props;
    return (
      <div id='container'
        className={(theme) ? 'dark' : 'light'}
      >
        <Header/>
        <Quote />
        <Footer />
        <Favorites />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  theme: state.toggle.theme
})
const mapDispatchToProps = (dispatch) => 
  bindActionCreators(Actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Main);
