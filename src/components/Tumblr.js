import React from 'react';

const Tumblr = (props) => {
  const { author, referer, meta } = props.quote;
  const { encoded } = meta;
  return (
    <li>
      <a target="_blank" id="tumblr" title="Share Me :)"
        href={`http://www.tumblr.com/share/link?description=${encoded}%20-${author} | @${referer}`}>Tumblr</a>
    </li>
  )
}

export default Tumblr;