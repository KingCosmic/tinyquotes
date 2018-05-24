import React from 'react';

const Twitter = (props) => {
  const { author, meta } = props.quote;
  const { encoded, twitter } = meta;

  return (
    <li>
      {(twitter) ?
        <a href={`https://twitter.com/intent/tweet?text=${encoded}%20-${author}`} className=''
          target="_blank" id="twitter" title={`Share me :) | ${encoded.length}`}>Twitter</a>
        :
        <a href='' className='disabled'
          target="_blank" id="twitter" title={`Too long to share ;( | ${encoded.length}`}>Twitter</a>}
    </li>
  )
}

export default Twitter;