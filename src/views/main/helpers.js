import React from 'react';
import { legends } from './quotes';

export const loveQuote = (quote) => {
  let lovedQuotes = localStorage.getItem('loved');

  if (!lovedQuotes) return localStorage.setItem('loved', JSON.stringify([quote]));
  lovedQuotes = JSON.parse(lovedQuotes);

  if (indexOfQuote(lovedQuotes, quote) === -1) {
    lovedQuotes.push(quote);
    localStorage.setItem('loved', JSON.stringify(lovedQuotes));
    console.info(`Loved quote: ${quote.id}`);
  }
}

export const indexOfQuote = (arr, quote) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].cite === quote.cite) {
      return i;
    }
  }
  return -1;
}

export const renderTags = (tags) => {

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

export const checkTwitter = (quote, author) =>
  ((quote.length + ' -'.length + author.length) <= 140)

export const networkLink = (social, referrer) => {
  let referal;
  switch (social) {
    case 'tumblr':
      referal = `http://www.${referrer}.tumblr.com`;
      break;
    case 'facebook':
      referal = `http://www.facebook.com/${referrer}`;
      break;
    case 'twitter':
      referal = `http://www.twitter.com/${referrer}`;
      break;
    case 'behance':
      referal = `http://www.behance.com/${referrer}`;
      break;
    case 'youtube':
      referal = `http://www.youtube.com/user/${referrer}`;
      break;
    default:
      referal = referrer;
      break;
  }
  return referal
}