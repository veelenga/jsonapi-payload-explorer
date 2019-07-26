import React from 'react';
import './App.css';
import JSONInputArea from './compoments/JSONInputArea';
import ObjectViewer from './compoments/ObjectViewer';

function App() {
  return (
    <div className="App">
      <JSONInputArea className="JSON-input-area"/>
      <ObjectViewer className="Object-viewer"/>
    </div>
  );
}

export default App;
