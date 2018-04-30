import React from 'react';
import { legends } from './quotes';

export const checkTwitter = (quote, author) =>
  ((quote.length + ' -'.length + author.length) <= 140)

export const renderTags = (tags) => {

  // check if there is some tags
  if (tags.length === 0) return undefined;
    
  return tags.map((tag, i) => {
    let legend = (legends.indexOf(tag) !== -1);

    return (<span className={legend ? 'legends' : ''}
      title={legend ? 'tag on the Legendarium' : ''}
      id={`t${i}`}>{tag}</span>)
  })

  // add a click event for the tags
  //document.getElementById(('z' + z)).setAttribute('onclick', 'tag("'+ tagsArray[z] + '")');
}

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