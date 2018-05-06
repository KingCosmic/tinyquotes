import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../../redux/actions';

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favSearch: ''
    }

    this.renderFavorites = () => {
      let { favorites } = this.props;
      let { favSearch } = this.state;
      if (favorites.length === 0) return undefined;

      let matched = favorites.filter((fav) => fav.cite.toLowerCase().includes(favSearch.toLowerCase()));
          
      return matched.map((fav) =>
        <section className='favorite' key={fav.id}>
          <cite>{fav.cite}</cite>
          <p className='favauthor'>
            <a href={fav.id}>
              {fav.author}
            </a>
          </p>
        </section>
      )
    }

    this.searchFavs = ({ target: { value }}) => {
      this.setState({
        favSearch: value
      })
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
          onClick={(e) => {e.stopPropagation()}}
        >
          <input className='favSearch' type='text' placeholder='Search...' onChange={this.searchFavs}/>
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