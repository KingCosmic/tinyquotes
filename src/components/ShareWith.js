import React from 'react';

import Twitter from './Twitter';
import Tumblr from './Tumblr.js';
import Copy from './Copy';

const ShareWith = (props) => {
  return (
    <ul>
      <li>Share with:</li>
      <Twitter {...props} />
      <Tumblr {...props} />
      <Copy {...props} />
    </ul>
  )
}

export default ShareWith;