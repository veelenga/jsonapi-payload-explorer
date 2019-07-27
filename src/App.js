import React from 'react';
import './App.css';
import JSONEditor from './compoments/JSONEditor';
import Viewer from './compoments/Viewer';

function App() {
  return (
    <div className="App">
      <JSONEditor className="JSON-input-area"/>
      <Viewer className="Object-viewer"/>
    </div>
  );
}

export default App;
