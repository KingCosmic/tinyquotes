import React, { Component } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { renderTags } from '../helpers';

export default class Quote extends Component {
  render() {
    const {
      quote, referer, referal, encodedQuote, author,
      twitter, tags, quoteSize
    } = this.props;

    return (
      <div className='quoteContainer' id='quoteContainer'>
        <cite id='quote' style={{ fontSize: quoteSize }}>{quote}</cite>
        <p className='author'>
          {author} | <a href={referal} target="_blank">{referer}</a>
        </p>
        <ul>
          <li>Share with:</li>
          <li>
            {(twitter) ?
              <a href={`https://twitter.com/intent/tweet?text=${encodedQuote}%20-${author}`} className=''
                target="_blank" id="twitter" title={`Share me :) | ${encodedQuote.length}`}>Twitter</a>
              :
              <a href='' className='disabled'
                target="_blank" id="twitter" title={`Too long to share ;( | ${encodedQuote.length}`}>Twitter</a>}
          </li>
          <li>
            <a target="_blank" id="tumblr" title="Share Me :)"
              href={`http://www.tumblr.com/share/link?description=${encodedQuote}%20-${author} | @${referer}`}>Tumblr</a>
          </li>
          <li>
            <CopyToClipboard text={`${quote} - ${author}`}>
              <a title='Copy quote to clipboard'>Copy</a>
            </CopyToClipboard>
          </li>
        </ul>

        <div className='tags'>{renderTags(tags)}</div>
        <span className="more" id="more">+</span>
      </div>
    );
  }
}
