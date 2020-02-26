import React, { memo } from 'react';

import JsonItem from "../json-item/json-item.component";

import { ComplexDataContainer, ExpandButton } from "./json-render.styles";

import { getValueType } from "../../utils";

function JsonRender({ json, parentPath = 'root', ...otherProps }) {
  const { setExpandedItem, expandedItems } = otherProps;

  return Object.entries(json).map(value => {
    const key = value[0];
    const val = value[1];
    const type = getValueType(val);
    const currentPath = `${parentPath}.${key}`;

    if (type === 'Array' || type === 'Object') {
      return (
        <ComplexDataContainer key={currentPath}>
          <ExpandButton
            onClick={() => {
              setExpandedItem(currentPath, !expandedItems[currentPath])
            }}
          >{ expandedItems[currentPath] ? '-' : '+' }</ExpandButton>
          <div className="name" datatype={type}>{key}: </div>
          <div className="val">
            {
              expandedItems[currentPath] ?
              <JsonRender
                json={val}
                parentPath={currentPath}
                {...otherProps}
              /> : 
              ''
            }
          </div>
        </ComplexDataContainer>
      );
    }

    return (
      <div key={currentPath}>
        {`"${key}": `} <JsonItem value={val} />
      </div>
    );
  });
}

export default memo(JsonRender);