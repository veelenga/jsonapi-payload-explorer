import React from 'react';
import './App.css';
import JSONEditor from './compoments/JSONEditor';
import ObjectViewer from './compoments/ObjectViewer';

function App() {
  return (
    <div className="App">
      <JSONEditor className="JSON-input-area"/>
      <ObjectViewer className="Object-viewer"/>
    </div>
  );
}

export default App;
