import React from 'react';

const Quote = (props) => {
  const { cite, meta: { size } } = props.quote;
  return (
    <cite id='quote' style={{ fontSize: size }}>{cite}</cite>
  )
}

export default Quote;