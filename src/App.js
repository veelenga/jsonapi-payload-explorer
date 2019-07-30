import React from 'react';
import cx from 'classnames';

import payloadSample from './PayloadSample';
import JSONEditor from './components/JSONEditor';
import Viewer from './components/Viewer';
import Toolbar from './components/Toolbar';

import { safeJSONParse, formattedJSON } from './utils/json';
import hashCode from './utils/string';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let payload = payloadSample;
    let object = safeJSONParse(payloadSample);
    this.state = { payload, object, autoformat: true };

    this.onPayloadChanged = this.onPayloadChanged.bind(this);
    this.onAutoformattingToggle = this.onAutoformattingToggle.bind(this);
  }

  onPayloadChanged(payload, autoformat = this.state.autoformat) {
    let object = safeJSONParse(payload);
    if (object && autoformat) payload = formattedJSON(object);
    this.setState({ payload, object, autoformat });
  }

  onAutoformattingToggle(event) {
    let autoformat = event.target.checked;
    this.onPayloadChanged(this.state.payload, autoformat);
  }

  render() {
    let { object } = this.state;

    return(
      <div className="App">
        <div className="splitpane">
          <Toolbar>
            <input
              className="autoformat"
              type="checkbox"
              onChange={this.onAutoformattingToggle}
              checked={this.state.autoformat} /> Autoformat
          </Toolbar>

          <JSONEditor
            className={ cx({ invalid: !object }) }
            payload={this.state.payload}
            onPayloadChanged={this.onPayloadChanged} />
        </div>

        <div className="splitpane">
          <Viewer
            object={this.state.object}
            hash={hashCode(this.state.payload)}
          />
        </div>
      </div>
    );
  }
}
