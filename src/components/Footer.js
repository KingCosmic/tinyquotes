import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { randomQ, showFavorites } = this.props;
    return (
      <footer>
        <div className="shortcuts">
          <p onClick={randomQ} className="us">R<span> Next quote.</span>
          </p>
          <p className="us">L<span> To add on favorites.</span>
          </p>
        </div>
        <div className='controls'>
          <p className='love' title='Add this quote in your fav list, you can also press F'></p>
          <p className="refresh" onClick={randomQ} title="Random quote, press R if you want"></p>
          <p className="send">
            <a href="mailto:amiguencio@icloud.com?subject=QUOTE%20TITLE&body=QUOTE%20TEXT">Suggest</a>
          </p>
          <p className="send">
            <a href="how_to.html">Help</a>
          </p>
          <p className="send" onClick={showFavorites} id="favs" title="Look and search through your fav quotes">Favorites</p>
          <p className="send" id="tag_search" title="Search quotes by text or tag" onClick={this.searchQT}>Search</p>
        </div>
      </footer>
    );
  }
}