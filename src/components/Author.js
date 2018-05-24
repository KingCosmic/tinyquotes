import React from 'react';

const Author = (props) => {
  const { author, referer, meta: { referal } } = props.quote;
  return (
    <p className='author'>
      {author} | <a href={referal} target="_blank">{referer}</a>
    </p>
  )
}

export default Author;