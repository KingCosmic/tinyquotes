import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const Copy = (props) => {
  const { cite, author } = props;

  return (
    <li className='toolTipContainer'>
      <CopyToClipboard
        text={`${cite} - ${author}`}
      >
        <a title='Copy quote to clipboard'>
          Copy
        </a>
      </CopyToClipboard>
    </li>
  )
}

export default Copy;