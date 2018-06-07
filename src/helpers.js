
export const indexOfQuote = (arr, quote) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].cite === quote.cite) {
      return i;
    }
  }
  return -1;
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
    case 'instagram':
      referal = `https://www.instagram.com/${referrer}`;
      break;
    default:
      referal = referrer;
      break;
  }
  return referal
}