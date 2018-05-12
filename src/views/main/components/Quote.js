import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { legends } from '../../../quotes';

@inject('quote')
@observer
export default class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false
    }

    this.wasCopied = () => {
      this.setState({
        copied: true
      }, () => {
        setTimeout(() => {
          this.setState({ copied: false })
        }, 1000)
      })
    }

    this.wasCopied = this.wasCopied.bind(this);
  }

  renderTags(tags) {
    // check if there is some tags
    if (tags.length === 0) return undefined;
    
    return tags.map((tag, i) => {
      let legend = (legends.indexOf(tag) !== -1);

      return (<span className={legend ? 'legends' : ''}
        title={legend ? 'tag on the Legendarium' : ''}
        key={i} id={`t${i}`}>{tag}</span>)
      })

    // add a click event for the tags
    //document.getElementById(('z' + z)).setAttribute('onclick', 'tag("'+ tagsArray[z] + '")');
  }

  render() {
    const { info } = this.props.quote;
    const { cite, author, referer, tags, meta } = info;
    const { encoded, twitter, size, referal } = meta;

    console.log(this.state.copied)
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
          <li className='toolTipContainer'>
            <CopyToClipboard
              text={`${cite} - ${author}`}
              onCopy={this.wasCopied}
            >
              <a title='Copy quote to clipboard'>Copy</a>
            </CopyToClipboard>
            <p className={`copyToolTip ${this.state.copied ? 'show' : ''}`}>Copied!</p>
          </li>
        </ul>

        <div className='tags'>{this.renderTags(tags)}</div>
        <span className="more" id="more">+</span>
      </div>
    );
  }
}
