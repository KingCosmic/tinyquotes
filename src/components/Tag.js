import React from 'react';

const Tag = (props) => {
  const { legend, index, tag } = props;
  return (
    <span
      className={legend ? 'legends' : ''}
      title={legend ? 'tag on the Legendarium' : ''}
      key={index}
    >
      {tag}
    </span>
  )
}

export default Tag;