import React, { Component } from 'react';

export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favSearch: ''
    }

    this.renderFavorites = () => {
      let { favs } = this.props;
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
    const { toggleFavs } = this.props;
    const { favs } = this.props.ui;

    return (
      <div
        className={`favoritesOverlay ${(favs) ? 'open' : ''}`}
        onClick={toggleFavs}
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
