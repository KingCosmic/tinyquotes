import React from 'react';

import Quote from './Quote';
import Author from './Author';
import ShareWith from './ShareWith';
import Tags from './Tags';

const QuoteContainer = (props) => {
  return (
    <div className='quoteContainer' id='quoteContainer'>
      <Quote {...props} />
      <Author {...props} />

      <ShareWith {...props} />
      <Tags {...props} />
      <span className="more" id="more">+</span>
    </div>
  );
}

export default QuoteContainer;