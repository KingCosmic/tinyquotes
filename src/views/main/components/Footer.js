import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject ('quote', 'favorites', 'ui')
@observer
export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.loveQuote = () => {
      const {
        quote: { info },
        favorites: { addFav }
      } = this.props;

      delete info.meta;
      addFav(info);
    }
    this.loveQuote.bind(this);
  }

  render() {
    const {
      quote: { randomQuote }, ui: { toggleFavorites }
    } = this.props;
    return (
      <footer>
        <div className="shortcuts">
          <p onClick={randomQuote} className="us">R<span> Next quote.</span>
          </p>
          <p onClick={() => this.loveQuote()} className="us">L<span> To add on favorites.</span>
          </p>
        </div>
        <div className='controls'>
          <p className='love'  onClick={() => this.loveQuote()} title='Add this quote in your fav list, you can also press F'></p>
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
