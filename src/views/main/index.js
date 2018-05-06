import React, { Component } from 'react';

import Header from './components/Header';
import Quote from './components/Quote';
import Footer from './components/Footer';
import Favorites from './components/Favorites';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../redux/actions';

class Main extends Component {

  componentWillMount() {
    const { randomQuote, setQuote, setFavs, match: { params: { quote } } } = this.props;

    let lovedQuotes = localStorage.getItem('loved');

    setFavs((lovedQuotes) ? JSON.parse(lovedQuotes) : []);
    if (quote) {
      setQuote(quote)
    } else {
      randomQuote();
    }

    // Set interval to show a new random quote every 60 seconds
    this.quoteInterval = setInterval(randomQuote, 60000);
  }

  render() {
    const { theme } = this.props;
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

const mapStateToProps = (state, props) => ({
  theme: state.toggle.theme
})
const mapDispatchToProps = (dispatch) => 
  bindActionCreators(Actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Main);
