import React from 'react';

const Footer = (props) => {
  const { randomQuote, toggleFavs, favQuote, quote } = props;

  return (
    <footer>
      <div className="shortcuts">
        <p onClick={randomQuote} className="us">R<span> Next quote.</span>
        </p>
        <p onClick={() => favQuote(quote)} className="us">L<span> To add on favorites.</span>
        </p>
      </div>
      <div className='controls'>
        <p className='love'  onClick={() => favQuote(quote)} title='Add this quote in your fav list, you can also press F'></p>
        <p className="refresh" onClick={randomQuote} title="Random quote, press R if you want"></p>
        <p className="send">
          <a href="mailto:KingCosmicDev@gmail.com?subject=QUOTE%20TITLE&body=QUOTE%20TEXT">Suggest</a>
        </p>
        <p className="send">
          <a href="how_to">Help</a>
        </p>
        <p className="send" onClick={toggleFavs} id="favs" title="Look and search through your fav quotes">Favorites</p>
        <p className="send" id="tag_search" title="Search quotes by text or tag" onClick={this.searchQT}>Search</p>
      </div>
    </footer>
  )
}

export default Footer;