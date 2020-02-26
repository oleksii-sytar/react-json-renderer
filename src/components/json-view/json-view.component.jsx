import React, { useState, useMemo, useCallback } from 'react';

import JsonRender from "../json-render/json-render.component";

import { deeepNames } from "../../utils";

const JsonView = ({ json }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const jsonParsed = useMemo(() => JSON.parse(json), [json]);

  const isExpandedItems = useMemo(() => !!Object.keys(expandedItems).length, [expandedItems]);

  const deepItemsKeys = useMemo(
    () => deeepNames(jsonParsed).reduce((acc, val) => ({ ...acc, [val]: true,}), {}),
    [jsonParsed]
  );

  const setExpandedItem = useCallback(
    (name, value) => setExpandedItems({ ...expandedItems, [name]: value }),
    [expandedItems]
  );

  return (
    <div>
      <button onClick={() => {
        if (isExpandedItems) {
          setExpandedItems({});
        } else {
          setExpandedItems(deepItemsKeys);
        }
      }}>
        {
          isExpandedItems ? 'Collapse all' : 'Expand all'
        }
      </button>

      <div>
        <JsonRender
          json={jsonParsed}
          setExpandedItem={setExpandedItem}
          expandedItems={expandedItems}
        />
      </div>
    </div>
  );
}

export default JsonView;
