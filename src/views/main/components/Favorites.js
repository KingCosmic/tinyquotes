import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('ui', 'favorites')
@observer
export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favSearch: ''
    }

    this.renderFavorites = () => {
      let { favs } = this.props.favorites;
      let { favSearch } = this.state;
      if (favs.length === 0) return undefined;

      let matched = favs.filter((fav) => fav.cite.toLowerCase().includes(favSearch.toLowerCase()));
          
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
    const { showFavorites, toggleFavorites } = this.props.ui;
    return (
      <div
        className={`favoritesOverlay ${(showFavorites) ? 'open' : ''}`}
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
