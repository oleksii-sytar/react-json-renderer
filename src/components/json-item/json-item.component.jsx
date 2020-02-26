import React, { memo } from 'react';

import { getValueType } from "../../utils";

const JsonItem = ({ value }) => {
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

export default memo(JsonItem);
