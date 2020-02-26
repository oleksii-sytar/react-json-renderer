import React from 'react';

import data from "./bulk-data.json";
// import data from "./simple-data.json";

import JsonView from "./components/json-view/json-view.component";

function App() {
  return (
    <div>
      <JsonView json={JSON.stringify(data)} />
    </div>
  );
}

export default App;
