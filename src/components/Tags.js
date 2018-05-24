import React from 'react';

import legends from '../legends';

import Tag from './Tag';

const renderTags = (tags) => {
  // check if there is some tags
  if (tags.length === 0) return undefined;
  
  return tags.map((tag, i) => {
    let legend = (legends.indexOf(tag) !== -1);

    return <Tag legend={legend} index={i} tag={tag} />
  })

  // CODE FROM BEFORE REACT KEEPING AS A REMINDER THAT I GOT ADD IT BACK
  // add a click event for the tags
  // document.getElementById(('z' + z)).setAttribute('onclick', 'tag("'+ tagsArray[z] + '")');
}

const Tags = (props) => {
  return (
    <div className='tags'>
      {renderTags(props.quote.tags)}
    </div>
  )
}

export default Tags;