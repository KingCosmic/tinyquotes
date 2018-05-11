import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { renderTags } from '../helpers';

@inject('quote')
@observer
export default class Quote extends Component {
  render() {
    const {
      cite, author, referer, tags,
      meta: { encoded, twitter, size, referal }
    } = this.props.quote.info;
    return (
      <div className='quoteContainer' id='quoteContainer'>
        <cite id='quote' style={{ fontSize: size }}>{cite}</cite>
        <p className='author'>
          {author} | <a href={referal} target="_blank">{referer}</a>
        </p>
        <ul>
          <li>Share with:</li>
          <li>
            {(twitter) ?
              <a href={`https://twitter.com/intent/tweet?text=${encoded}%20-${author}`} className=''
                target="_blank" id="twitter" title={`Share me :) | ${encoded.length}`}>Twitter</a>
              :
              <a href='' className='disabled'
                target="_blank" id="twitter" title={`Too long to share ;( | ${encoded.length}`}>Twitter</a>}
          </li>
          <li>
            <a target="_blank" id="tumblr" title="Share Me :)"
              href={`http://www.tumblr.com/share/link?description=${encoded}%20-${author} | @${referer}`}>Tumblr</a>
          </li>
          <li>
            <CopyToClipboard text={`${cite} - ${author}`}>
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
