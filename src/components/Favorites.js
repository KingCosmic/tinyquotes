import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../redux/actions';

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.renderFavorites = () => {
      let { favorites } = this.props;
      if (favorites.length === 0) return undefined;
          
      return favorites.map((fav, i) =>
        <section>
          <cite>{fav.quote}</cite>
          <p className='favauthor'>
            {fav.author}
          </p>
        </section>
      )
    }

    this.renderFavorites.bind(this);
  }
  render() {
    const { open, toggleFavorites } = this.props;
    return (
      <div
        className={`favoritesOverlay ${(open) ? 'open' : ''}`}
        onClick={toggleFavorites}
      >

        <div className='favoritesContainer'
          onClick={(e) => {e.stopPropagation();}}
        >
          <input className='favSearch' type='text' placeholder='search...'/>
          <div className='favorites'>
            {this.renderFavorites()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  open: state.toggle.showFavorites,
  favorites: state.favorites
})
const mapDispatchToProps = (dispatch) => 
  bindActionCreators(Actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);