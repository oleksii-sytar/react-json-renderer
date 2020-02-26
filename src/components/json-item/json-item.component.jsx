import React, { memo } from 'react';

import { getValueType } from "../../utils";

const JsonItemValue = ({ value }) => {
  const type = getValueType(value);
  
  switch (type) {
    case 'String':
      return <span style={{ color: 'rgb(255, 65, 60)' }}>{`"${value}"`}</span>;
    case 'Boolean':
      return <span style={{ color: 'rgb(31, 48, 255)' }}>{`${value}`}</span>;
    case 'Null':
      return <i style={{ color: '#777777' }}>{'null'}</i>;
    default:
      return <span style={{ color: 'rgb(31, 49, 255)' }}>{`${value}`}</span>;
  }
}

const JsonItem = ({ keyValue, value }) => (<div>
  {`"${keyValue}": `} <JsonItemValue value={value} />
</div>)

export default memo(JsonItem);
