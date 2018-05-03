import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../../redux/actions';

class Footer extends Component {
  render() {
    const { randomQuote, toggleFavorites } = this.props;
    return (
      <footer>
        <div className="shortcuts">
          <p onClick={randomQuote} className="us">R<span> Next quote.</span>
          </p>
          <p className="us">L<span> To add on favorites.</span>
          </p>
        </div>
        <div className='controls'>
          <p className='love' title='Add this quote in your fav list, you can also press F'></p>
          <p className="refresh" onClick={randomQuote} title="Random quote, press R if you want"></p>
          <p className="send">
            <a href="mailto:KingCosmicDev@gail.com?subject=QUOTE%20TITLE&body=QUOTE%20TEXT">Suggest</a>
          </p>
          <p className="send">
            <a href="how_to">Help</a>
          </p>
          <p className="send" onClick={toggleFavorites} id="favs" title="Look and search through your fav quotes">Favorites</p>
          <p className="send" id="tag_search" title="Search quotes by text or tag" onClick={this.searchQT}>Search</p>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = (state, props) => ({})
const mapDispatchToProps = (dispatch) => 
  bindActionCreators(Actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Footer);