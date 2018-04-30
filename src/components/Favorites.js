import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.renderFavorites = (favs) => {
      if (favs.length === 0) return undefined;
          
      return favs.map((fav, i) =>
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
    const { open, favs, toggleFavorites } = this.props;
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
            {this.renderFavorites(favs)}
          </div>
        </div>

      </div>
    );
  }
}