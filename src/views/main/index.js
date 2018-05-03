import React, { Component } from 'react';

import Header from './components/Header';
import Quote from './components/Quote';
import Footer from './components/Footer';
import Favorites from './components/Favorites';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../redux/actions';

class Main extends Component {
  constructor(props) {
    super(props);

    /*this.love = () => {
      let { quote } = this.props;

      if (!lovedQuotes) {
        localStorage.setItem('loved', JSON.stringify([quote]));
      } else if (this.indexOf(lovedQuotes, quote) === -1) {
        lovedQuotes.push(quote);
        localStorage.setItem('loved', JSON.stringify(lovedQuotes));
        console.info(`Loved quote: ${quote}`);
      }
    }*/

    this.indexOf = (arr, quote) => {
      for (let i = 0; i < arr.length; i++) {
        if(arr[i].quote === quote) {
          return i;
        }
      }
      return -1;
    }
    
    // this.love.bind(this);
  }

  componentWillMount() {
    const { randomQuote, setFavs } = this.props;

    setFavs(localStorage.getItem('loved') || []);
    randomQuote();
    // Set interval to show a new random quote every 60 seconds
    this.quoteInterval = setInterval(randomQuote, 60000);
  }

  render() {
    const { theme } = this.props;
    return (
      <div id='container' className={(theme) ? 'dark' : 'light'} >
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
