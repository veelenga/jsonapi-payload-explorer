import React from 'react';

import payloadSample from './PayloadSample';
import EditorPane from './components/EditorPane';
import Viewer from './components/Viewer';

import { safeJSONParse } from './utils/json';
import hashCode from './utils/string';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let payload = payloadSample;
    let object = safeJSONParse(payloadSample);
    this.state = { payload, object };

    this.onPayloadChanged = this.onPayloadChanged.bind(this);
  }

  onPayloadChanged(payload) {
    let object = safeJSONParse(payload);
    this.setState({ payload, object });
  }

  render() {
    let { object, payload } = this.state;

    return(
      <div className="App">
        <EditorPane
          className="splitpane"
          object={object}
          payload={payload}
          onPayloadChanged={this.onPayloadChanged}
        />

        <Viewer
          className="splitpane"
          object={object}
          hash={hashCode(payload)}
        />
      </div>
    );
  }
}
