import React, { useState, useMemo } from 'react';

import JsonRender from "../json-render/json-render.component";

import { deeepNames } from "../../utils";

const JsonView = ({ json }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const jsonParsed = useMemo(() => JSON.parse(json), [json]);

  const deepItemsKeys = useMemo(
    () => deeepNames(jsonParsed).reduce((acc, val) => ({ ...acc, [val]: true,}), {}),
    [jsonParsed]
  );

  return (
    <div>
      <button onClick={() => {
        if (Object.keys(expandedItems).length) {
          setExpandedItems({});
        } else {
          setExpandedItems(deepItemsKeys);
        }
      }}>
        {
          Object.keys(expandedItems).length ? 'Collapse all' : 'Expand all'
        }
      </button>

      <div>
        <JsonRender
          json={jsonParsed}
          setExpandedItem={(name, value) => setExpandedItems({ ...expandedItems, [name]: value })}
          expandedItems={expandedItems}
        />
      </div>
    </div>
  );
}

export default JsonView;
