import React from 'react';
import './App.css';

import payloadSample from './PayloadSample.js';
import JSONEditor from './compoments/JSONEditor';
import Viewer from './compoments/Viewer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { payload: payloadSample };
    this.onPayloadChanged = this.onPayloadChanged.bind(this);
  }

  onPayloadChanged(payload) {
    this.setState({ payload });
  }

  render() {
    return(
      <div className="App">
        <JSONEditor
          className="sidepane"
          payload={this.state.payload}
          onPayloadChanged={this.onPayloadChanged} />

        <Viewer className="sidepane" payload={this.state.payload}/>
      </div>
    );
  }
}
