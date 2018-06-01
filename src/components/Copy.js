import React from 'react';

import Tooltip from 'kc-tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Copy = (props) => {
  const { cite, author } = props.quote;

  return (
    <li>
      <CopyToClipboard
        text={`${cite} - ${author}`}
      >
        <Tooltip content='Copied' type='click' delayHide={10000}>
          <a title='Copy quote to clipboard'>
            Copy
          </a>
        </Tooltip>
      </CopyToClipboard>
    </li>
  )
}

export default Copy;